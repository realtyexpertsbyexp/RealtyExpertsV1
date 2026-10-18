import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import healthRouter from './routes/health.js';
import leadsRouter from './routes/leads.js';
import { securityHeadersMiddleware } from './middleware/security.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Determine the correct port to bind to.
 * In Google AI Studio / Cloud Run container environment:
 * - NGINX is fronting the container on port 8080.
 * - DEFAULT_APP_PORT is set to 3000.
 * - The supervisor invokes `npm run dev --port 3000 --host 0.0.0.0`.
 * If PORT is set to 8080 by Cloud Run, our Express app must bind to 3000
 * to allow NGINX to proxy requests to localhost:3000 without port collision.
 */
function resolvePort(): number {
  // 1. Check CLI argument (--port 3000)
  const portArgIndex = process.argv.indexOf('--port');
  if (portArgIndex !== -1 && process.argv[portArgIndex + 1]) {
    const parsed = parseInt(process.argv[portArgIndex + 1], 10);
    if (!isNaN(parsed) && parsed > 0) return parsed;
  }

  // 2. Check DEFAULT_APP_PORT if configured by supervisor
  if (process.env.DEFAULT_APP_PORT) {
    const parsed = parseInt(process.env.DEFAULT_APP_PORT, 10);
    if (!isNaN(parsed) && parsed > 0) return parsed;
  }

  // 3. In AI Studio container where NGINX or control-plane runs on 8080/8000
  if (process.env.PORT === '8080' && (process.env.CONTROL_PLANE_PORT || process.env.NGINX_PORT)) {
    return 3000;
  }

  // 4. Standalone hosting environment
  return parseInt(process.env.PORT || '3000', 10);
}

const app = express();
const PORT = resolvePort();
const isProd = process.env.NODE_ENV === 'production';

// Body parsing middleware with size limits
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true, limit: '100kb' }));

// Security headers with AI Studio preview compatibility
app.use(securityHeadersMiddleware);

// API routes
app.use('/api/health', healthRouter);
app.use('/api/leads', leadsRouter);

// Unknown API routes return JSON 404
app.all('/api/*', (req: Request, res: Response) => {
  res.status(404).json({
    error: 'API endpoint not found',
    path: req.originalUrl,
    status: 404
  });
});

// Setup frontend serving
async function setupServer() {
  if (!isProd) {
    // Development mode: Mount Vite middleware
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        allowedHosts: true,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production mode: Serve built static files from dist
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath, { maxAge: '1d', index: false }));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  // Generic client-safe error handler
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('[Unhandled Server Error]:', err.message);
    if (res.headersSent) {
      return next(err);
    }
    res.status(500).json({
      success: false,
      error: 'An internal server error occurred.',
      status: 500
    });
  });

  const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`Realty Experts Server listening on http://0.0.0.0:${PORT} [${isProd ? 'PRODUCTION' : 'DEVELOPMENT'}]`);
  });

  // Handle termination signals cleanly
  const shutdown = () => {
    console.log('Received kill signal, shutting down gracefully...');
    server.close(() => {
      process.exit(0);
    });
  };

  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);
}

if (process.env.NODE_ENV !== 'test') {
  setupServer().catch((err) => {
    console.error('Failed to start server:', err);
    process.exit(1);
  });
}

export default app;
