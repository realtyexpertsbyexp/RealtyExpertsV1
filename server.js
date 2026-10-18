// server.ts
import express from "express";
import path2 from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// routes/health.ts
import { Router } from "express";

// utils/lead-storage.ts
import fs from "fs";
import path from "path";
var DATA_DIR = path.resolve(process.cwd(), "data");
var LEADS_FILE = path.join(DATA_DIR, "leads.json");
function ensureStorage() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(LEADS_FILE)) {
      fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2), "utf-8");
    }
  } catch (err) {
    console.error("Error ensuring lead storage directory/file:", err);
  }
}
async function saveLead(leadData) {
  ensureStorage();
  const id = `LEAD-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
  const storedLead = {
    ...leadData,
    id,
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    status: "new"
  };
  try {
    let leads = [];
    if (fs.existsSync(LEADS_FILE)) {
      const fileContent = fs.readFileSync(LEADS_FILE, "utf-8");
      try {
        leads = JSON.parse(fileContent);
        if (!Array.isArray(leads)) leads = [];
      } catch {
        leads = [];
      }
    }
    leads.push(storedLead);
    const tempFile = `${LEADS_FILE}.tmp.${Date.now()}`;
    fs.writeFileSync(tempFile, JSON.stringify(leads, null, 2), "utf-8");
    fs.renameSync(tempFile, LEADS_FILE);
    return storedLead;
  } catch (err) {
    console.error("Error writing lead to storage file:", err);
    return storedLead;
  }
}
function getLeadStats() {
  try {
    ensureStorage();
    if (!fs.existsSync(LEADS_FILE)) return { totalCount: 0 };
    const content = fs.readFileSync(LEADS_FILE, "utf-8");
    const leads = JSON.parse(content);
    if (!Array.isArray(leads)) return { totalCount: 0 };
    return {
      totalCount: leads.length,
      lastSubmission: leads.length > 0 ? leads[leads.length - 1].createdAt : void 0
    };
  } catch {
    return { totalCount: 0 };
  }
}

// routes/health.ts
var router = Router();
router.get("/", (req, res) => {
  const stats = getLeadStats();
  res.status(200).json({
    status: "ok",
    service: "Realty Experts Web Application API",
    brand: "Realty Experts",
    tagline: "Strategically Marketed, Scientifically Sold!",
    website: "https://www.realtyexperts.online",
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    environment: process.env.NODE_ENV || "development",
    leadMetrics: {
      totalRecorded: stats.totalCount,
      lastRecorded: stats.lastSubmission || null
    }
  });
});
var health_default = router;

// routes/leads.ts
import { Router as Router2 } from "express";

// middleware/security.ts
var rateLimitMap = /* @__PURE__ */ new Map();
var WINDOW_MS = 15 * 60 * 1e3;
var MAX_REQUESTS = 10;
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap.entries()) {
    if (now > entry.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, 5 * 60 * 1e3).unref();
function securityHeadersMiddleware(req, res, next) {
  const isPreviewMode = process.env.PREVIEW_MODE === "true" || process.env.NODE_ENV !== "production" || Boolean(process.env.APP_URL && process.env.APP_URL.includes("run.app")) || Boolean(process.env.CONTROL_PLANE_PORT);
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  if (isPreviewMode) {
    const allowedFrameAncestors = "'self' https://*.google.com https://*.run.app https://localhost.corp.google.com:26001";
    res.setHeader(
      "Content-Security-Policy",
      `default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com ws: wss:; frame-ancestors ${allowedFrameAncestors};`
    );
  } else {
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader(
      "Content-Security-Policy",
      "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com; frame-ancestors 'self';"
    );
  }
  next();
}
function leadRateLimitMiddleware(req, res, next) {
  const forwarded = req.headers["x-forwarded-for"];
  const ip = (typeof forwarded === "string" ? forwarded.split(",")[0].trim() : req.socket.remoteAddress) || "unknown-ip";
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + WINDOW_MS });
    return next();
  }
  if (entry.count >= MAX_REQUESTS) {
    res.setHeader("Retry-After", Math.ceil((entry.resetTime - now) / 1e3));
    return res.status(429).json({
      success: false,
      error: "Too many requests. Please wait before submitting another enquiry, or contact us directly at +91 96822 94324.",
      code: "RATE_LIMIT_EXCEEDED"
    });
  }
  entry.count += 1;
  next();
}

// middleware/validation.ts
var recentSubmissions = /* @__PURE__ */ new Map();
var DEDUP_WINDOW_MS = 3 * 60 * 1e3;
setInterval(() => {
  const now = Date.now();
  for (const [key, ts] of recentSubmissions.entries()) {
    if (now - ts > DEDUP_WINDOW_MS) {
      recentSubmissions.delete(key);
    }
  }
}, 60 * 1e3).unref();
function sanitizeString(input) {
  if (typeof input !== "string") return "";
  return input.replace(/<[^>]*>/g, "").replace(/[<>'"&]/g, (char) => {
    switch (char) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "'":
        return "&#39;";
      case '"':
        return "&quot;";
      case "&":
        return "&amp;";
      default:
        return char;
    }
  }).trim();
}
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email);
}
function isValidPhone(phone) {
  const cleaned = phone.replace(/[\s\-\(\)]/g, "");
  const phoneRegex = /^\+?[0-9]{8,15}$/;
  return phoneRegex.test(cleaned);
}
function validateLeadSubmission(req, res, next) {
  const body = req.body || {};
  const errors = {};
  const fullName = sanitizeString(body.fullName || body.name);
  if (!fullName) {
    errors.fullName = "Full name is required.";
  } else if (fullName.length < 2) {
    errors.fullName = "Name must be at least 2 characters long.";
  } else if (fullName.length > 100) {
    errors.fullName = "Name must be less than 100 characters.";
  }
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!email) {
    errors.email = "Business email address is required.";
  } else if (!isValidEmail(email)) {
    errors.email = "Please provide a valid email address.";
  }
  const rawPhone = typeof body.phone === "string" ? body.phone.trim() : "";
  if (!rawPhone) {
    errors.phone = "Contact phone number is required.";
  } else if (!isValidPhone(rawPhone)) {
    errors.phone = "Please provide a valid telephone/mobile number (e.g. +91 96822 94324).";
  }
  const rawType = typeof body.businessType === "string" ? body.businessType.trim() : "general";
  const allowedTypes = ["developer", "channel_partner", "associate", "consultation", "general"];
  const businessType = allowedTypes.includes(rawType) ? rawType : "general";
  const consent = body.consent === true || body.consent === "true" || body.consent === "on" || body.consent === 1;
  if (!consent) {
    errors.consent = "You must agree to allow Realty Experts to contact you regarding your enquiry.";
  }
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: "Validation failed. Please correct the highlighted errors.",
      errors
    });
  }
  const dedupKey = `${email}:${rawPhone.replace(/\D/g, "")}`;
  const now = Date.now();
  const lastSubmitted = recentSubmissions.get(dedupKey);
  if (lastSubmitted && now - lastSubmitted < DEDUP_WINDOW_MS) {
    return res.status(400).json({
      success: false,
      message: "An identical enquiry was recently received. Our team will contact you shortly.",
      code: "DUPLICATE_SUBMISSION"
    });
  }
  recentSubmissions.set(dedupKey, now);
  req.validatedLead = {
    fullName,
    email,
    phone: rawPhone,
    businessType,
    companyName: sanitizeString(body.companyName || body.company),
    projectLocation: sanitizeString(body.projectLocation || body.location),
    projectType: sanitizeString(body.projectType),
    service: sanitizeString(body.service || body.preferredService),
    currentChallenge: sanitizeString(body.currentChallenge),
    message: sanitizeString(body.message),
    consent: true,
    sourceUrl: sanitizeString(body.sourceUrl)
  };
  next();
}

// utils/email.ts
import nodemailer from "nodemailer";
var SMTP_HOST = process.env.SMTP_HOST;
var SMTP_PORT = parseInt(process.env.SMTP_PORT || "587", 10);
var SMTP_SECURE = process.env.SMTP_SECURE === "true";
var SMTP_USER = process.env.SMTP_USER;
var SMTP_PASS = process.env.SMTP_PASS;
var TO_EMAIL = process.env.LEADS_TO_EMAIL || "connect@realtyexperts.online";
var FROM_EMAIL = process.env.LEADS_FROM_EMAIL || "noreply@realtyexperts.online";
async function sendLeadNotificationEmail(lead) {
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.info(`[Lead Notice] Lead ${lead.id} recorded in durable storage. SMTP notification skipped (SMTP credentials not configured in environment).`);
    return { sent: false, reason: "SMTP credentials not configured" };
  }
  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS
      },
      connectionTimeout: 5e3,
      greetingTimeout: 5e3
    });
    const subject = `[New Real Estate Lead] ${lead.fullName} (${lead.businessType.toUpperCase()}) - Realty Experts`;
    const textBody = `
New Business Enquiry Received - Realty Experts
------------------------------------------------
Lead ID: ${lead.id}
Submitted At: ${lead.createdAt}

Contact Details:
- Name: ${lead.fullName}
- Email: ${lead.email}
- Phone: ${lead.phone}
- Business Type: ${lead.businessType}
- Company: ${lead.companyName || "Not specified"}
- Location: ${lead.projectLocation || "Not specified"}
- Project Type: ${lead.projectType || "Not specified"}
- Service of Interest: ${lead.service || "Not specified"}

Challenge / Message:
${lead.currentChallenge ? `Challenge: ${lead.currentChallenge}
` : ""}
${lead.message ? lead.message : "No message provided"}

Source Page: ${lead.sourceUrl || "https://www.realtyexperts.online"}
------------------------------------------------
Realty Experts - Strategically Marketed, Scientifically Sold!
    `.trim();
    const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; color: #202020;">
        <div style="background-color: #202020; padding: 24px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 20px; letter-spacing: 1px;">REALTY EXPERTS</h1>
          <p style="color: #85888C; margin: 6px 0 0 0; font-size: 13px;">Strategically Marketed, Scientifically Sold!</p>
        </div>
        <div style="padding: 24px; background-color: #ffffff;">
          <h2 style="font-size: 18px; margin-top: 0; color: #202020; border-bottom: 2px solid #f3f4f6; padding-bottom: 12px;">New Real Estate Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
            <tr><td style="padding: 8px 0; color: #6b7280; width: 140px;">Lead Reference:</td><td style="padding: 8px 0; font-weight: 600;">${lead.id}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Full Name:</td><td style="padding: 8px 0; font-weight: 600;">${lead.fullName}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Business Email:</td><td style="padding: 8px 0;"><a href="mailto:${lead.email}" style="color: #202020;">${lead.email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Phone Number:</td><td style="padding: 8px 0;"><a href="tel:${lead.phone}" style="color: #202020; font-weight: 600;">${lead.phone}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Business Category:</td><td style="padding: 8px 0; text-transform: capitalize;">${lead.businessType.replace("_", " ")}</td></tr>
            ${lead.companyName ? `<tr><td style="padding: 8px 0; color: #6b7280;">Company / Firm:</td><td style="padding: 8px 0;">${lead.companyName}</td></tr>` : ""}
            ${lead.projectLocation ? `<tr><td style="padding: 8px 0; color: #6b7280;">Location:</td><td style="padding: 8px 0;">${lead.projectLocation}</td></tr>` : ""}
            ${lead.projectType ? `<tr><td style="padding: 8px 0; color: #6b7280;">Project Type:</td><td style="padding: 8px 0;">${lead.projectType}</td></tr>` : ""}
            ${lead.service ? `<tr><td style="padding: 8px 0; color: #6b7280;">Selected Service:</td><td style="padding: 8px 0; font-weight: 600;">${lead.service}</td></tr>` : ""}
          </table>

          ${lead.currentChallenge ? `
            <div style="background-color: #f9fafb; border-left: 3px solid #85888C; padding: 12px 16px; margin-bottom: 16px;">
              <strong style="font-size: 13px; color: #4b5563;">Current Marketing Challenge:</strong>
              <p style="margin: 4px 0 0 0; font-size: 14px; color: #1f2937;">${lead.currentChallenge}</p>
            </div>
          ` : ""}

          ${lead.message ? `
            <div style="background-color: #f9fafb; border-left: 3px solid #202020; padding: 12px 16px; margin-bottom: 16px;">
              <strong style="font-size: 13px; color: #4b5563;">Message / Requirement:</strong>
              <p style="margin: 4px 0 0 0; font-size: 14px; color: #1f2937;">${lead.message}</p>
            </div>
          ` : ""}

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af; text-align: center;">
            Enquiry captured via Realty Experts official website (<a href="${lead.sourceUrl || "https://www.realtyexperts.online"}" style="color: #6b7280;">${lead.sourceUrl || "https://www.realtyexperts.online"}</a>)
          </div>
        </div>
      </div>
    `;
    await transporter.sendMail({
      from: `"Realty Experts Leads" <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: lead.email,
      subject,
      text: textBody,
      html: htmlBody
    });
    console.info(`[Lead Notice] Email notification for lead ${lead.id} sent successfully to ${TO_EMAIL}`);
    return { sent: true };
  } catch (error) {
    console.error(`[Lead Notice] Failed to dispatch email for lead ${lead.id}:`, error.message);
    return { sent: false, reason: error.message };
  }
}

// routes/leads.ts
var router2 = Router2();
router2.post("/", leadRateLimitMiddleware, validateLeadSubmission, async (req, res) => {
  try {
    const validatedLead = req.validatedLead;
    const storedLead = await saveLead(validatedLead);
    sendLeadNotificationEmail(storedLead).catch((err) => {
      console.error("[Lead Dispatch Error]:", err);
    });
    return res.status(201).json({
      success: true,
      message: "Thank you! Your enquiry has been received. A real estate marketing specialist from Realty Experts will contact you shortly.",
      leadId: storedLead.id,
      timestamp: storedLead.createdAt
    });
  } catch (err) {
    console.error("[Lead Submission Error]:", err);
    return res.status(500).json({
      success: false,
      message: "An unexpected error occurred while processing your request. Please try again or call us directly at +91 96822 94324.",
      code: "SERVER_ERROR"
    });
  }
});
var leads_default = router2;

// server.ts
dotenv.config();
var __filename = fileURLToPath(import.meta.url);
var __dirname = path2.dirname(__filename);
function resolvePort() {
  const portArgIndex = process.argv.indexOf("--port");
  if (portArgIndex !== -1 && process.argv[portArgIndex + 1]) {
    const parsed = parseInt(process.argv[portArgIndex + 1], 10);
    if (!isNaN(parsed) && parsed > 0) return parsed;
  }
  if (process.env.DEFAULT_APP_PORT) {
    const parsed = parseInt(process.env.DEFAULT_APP_PORT, 10);
    if (!isNaN(parsed) && parsed > 0) return parsed;
  }
  if (process.env.PORT === "8080" && (process.env.CONTROL_PLANE_PORT || process.env.NGINX_PORT)) {
    return 3e3;
  }
  return parseInt(process.env.PORT || "3000", 10);
}
var app = express();
var PORT = resolvePort();
var isProd = process.env.NODE_ENV === "production";
app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: true, limit: "100kb" }));
app.use(securityHeadersMiddleware);
app.use("/api/health", health_default);
app.use("/api/leads", leads_default);
app.all("/api/*", (req, res) => {
  res.status(404).json({
    error: "API endpoint not found",
    path: req.originalUrl,
    status: 404
  });
});
async function setupServer() {
  if (!isProd) {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        allowedHosts: true
      },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path2.resolve(__dirname, "dist");
    app.use(express.static(distPath, { maxAge: "1d", index: false }));
    app.get("*", (req, res) => {
      res.sendFile(path2.resolve(distPath, "index.html"));
    });
  }
  app.use((err, req, res, next) => {
    console.error("[Unhandled Server Error]:", err.message);
    if (res.headersSent) {
      return next(err);
    }
    res.status(500).json({
      success: false,
      error: "An internal server error occurred.",
      status: 500
    });
  });
  const server = app.listen(PORT, "0.0.0.0", () => {
    console.log(`Realty Experts Server listening on http://0.0.0.0:${PORT} [${isProd ? "PRODUCTION" : "DEVELOPMENT"}]`);
  });
  const shutdown = () => {
    console.log("Received kill signal, shutting down gracefully...");
    server.close(() => {
      process.exit(0);
    });
  };
  process.on("SIGTERM", shutdown);
  process.on("SIGINT", shutdown);
}
if (process.env.NODE_ENV !== "test") {
  setupServer().catch((err) => {
    console.error("Failed to start server:", err);
    process.exit(1);
  });
}
var server_default = app;
export {
  server_default as default
};
