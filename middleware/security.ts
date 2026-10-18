import { Request, Response, NextFunction } from 'express';

// In-memory rate limiting map: IP -> { count: number, resetTime: number }
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 10; // Max 10 submissions per 15 min per IP

/**
 * Clean up expired rate limiting entries periodically
 */
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap.entries()) {
    if (now > entry.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, 5 * 60 * 1000).unref();

export function securityHeadersMiddleware(req: Request, res: Response, next: NextFunction) {
  // Determine if application is running in preview environment (Google AI Studio, Cloud Run dev preview, or development)
  const isPreviewMode =
    process.env.PREVIEW_MODE === 'true' ||
    process.env.NODE_ENV !== 'production' ||
    Boolean(process.env.APP_URL && process.env.APP_URL.includes('run.app')) ||
    Boolean(process.env.CONTROL_PLANE_PORT);

  // 1. Essential HTTP security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  // 2. Embedding & Content Security Policy configuration
  // Note: X-Frame-Options cannot express an allowlist of origins. In preview mode,
  // we do not set X-Frame-Options and instead use CSP frame-ancestors with trusted Google AI Studio origins.
  // In standalone production mode, we enforce strict same-origin embedding.
  if (isPreviewMode) {
    // Trusted Google AI Studio & Cloud Run preview origins
    const allowedFrameAncestors = "'self' https://*.google.com https://*.run.app https://localhost.corp.google.com:26001";
    res.setHeader(
      'Content-Security-Policy',
      `default-src 'self'; ` +
      `script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net; ` +
      `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; ` +
      `font-src 'self' https://fonts.gstatic.com data:; ` +
      `img-src 'self' data: https:; ` +
      `connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com ws: wss:; ` +
      `frame-ancestors ${allowedFrameAncestors};`
    );
  } else {
    // Strict standalone production policy for custom domain (https://www.realtyexperts.online)
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net; " +
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
      "font-src 'self' https://fonts.gstatic.com data:; " +
      "img-src 'self' data: https:; " +
      "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com; " +
      "frame-ancestors 'self';"
    );
  }

  next();
}

export function leadRateLimitMiddleware(req: Request, res: Response, next: NextFunction) {
  const forwarded = req.headers['x-forwarded-for'];
  const ip = (typeof forwarded === 'string' ? forwarded.split(',')[0].trim() : req.socket.remoteAddress) || 'unknown-ip';
  const now = Date.now();

  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + WINDOW_MS });
    return next();
  }

  if (entry.count >= MAX_REQUESTS) {
    res.setHeader('Retry-After', Math.ceil((entry.resetTime - now) / 1000));
    return res.status(429).json({
      success: false,
      error: 'Too many requests. Please wait before submitting another enquiry, or contact us directly at +91 96822 94324.',
      code: 'RATE_LIMIT_EXCEEDED'
    });
  }

  entry.count += 1;
  next();
}
