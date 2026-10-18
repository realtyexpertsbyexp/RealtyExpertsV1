# REALTY EXPERTS
### Specialised Digital Marketing Agency for the Real Estate Industry
**Tagline:** “Strategically Marketed, Scientifically Sold!”  
**Parent Company:** Prachar Prasar  
**Offices:** Noida (Primary) & Lucknow (Additional), Uttar Pradesh, India  
**Official Website:** https://www.realtyexperts.online  
**Official Contact:** +91 96822 94324 | connect@realtyexperts.online  

---

## 1. Project Overview

Realty Experts is a production-grade, high-converting digital marketing agency website specifically engineered for the Indian real estate ecosystem. It establishes specialized B2B positioning for:
1. **Real Estate Developers & Builders** (Project launches, Meta/Google acquisition, microsites, CRM automation)
2. **Real Estate Channel Partners** (Independent brand building, proprietary lead generation, multi-project marketing)
3. **Real Estate Associates & Consultants** (Personal advisory positioning, 4K walkthrough videos, local SEO)

The platform includes all 22 required pages, 10 deep-dive service scopes, a 6-stage branded methodology framework, full server-side lead validation, rate limiting, duplicate protection, durable lead persistence, optional SMTP notifications, and SEO foundations.

---

## 2. Technology Stack

- **Runtime & Web Server:** Node.js (v18+) with Express.js
- **Frontend Architecture:** React 19 SPA with TypeScript and Vite
- **Styling & Layout:** Tailwind CSS v4 with mobile-first responsive architecture
- **Icons & Typography:** Lucide React & Plus Jakarta Sans
- **Security & Headers:** Express security middleware (CSP, X-Frame-Options, rate limiting, payload size limits)
- **Email Delivery:** Nodemailer (configurable via standard SMTP environment variables)
- **Lead Storage:** Durable atomic JSON storage (`data/leads.json`) with backup resilience

---

## 3. Project Structure

```text
realty-experts/
├── .env.example              # Environment variables template
├── .gitignore                # Git exclusions (credentials, private leads, node_modules)
├── index.html                # Entry point with SEO metadata and JSON-LD structured data
├── metadata.json             # AI Studio applet specifications
├── package.json              # Declared dependencies and lifecycle scripts
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite client build configuration
├── server.ts                 # Production Express web server & API router
├── README.md                 # Complete system documentation
├── middleware/
│   ├── security.ts           # Security headers, CSP & IP rate limiting middleware
│   └── validation.ts         # Server-side lead input sanitization & duplicate detection
├── routes/
│   ├── health.ts             # System health & lead statistics endpoint (/api/health)
│   └── leads.ts              # Qualified lead intake handler (/api/leads)
├── utils/
│   ├── email.ts              # SMTP notification dispatcher
│   └── lead-storage.ts       # Atomic file-based lead persistence
├── public/
│   ├── 404.html              # Standalone branded fallback 404 page
│   ├── favicon.svg           # High-resolution vector favicon
│   ├── robots.txt            # Search engine crawl directives
│   ├── sitemap.xml           # XML sitemap covering all 22 pages
│   └── assets/logos/
│       ├── realty-experts-logo.svg        # Official brandmark (dark/charcoal)
│       └── realty-experts-logo-white.svg  # Inverted brandmark (light/white)
└── src/
    ├── main.tsx              # React mounting root
    ├── App.tsx               # Client router, meta controller & modal coordinator
    ├── index.css             # Tailwind CSS & global styling
    ├── components/
    │   ├── Header.tsx        # Navigation bar, logo, and phone quick-dial
    │   ├── Footer.tsx        # Official brand links, locations, and legal navigation
    │   ├── LeadForm.tsx      # Reusable validated enquiry form
    │   ├── ConsultationModal.tsx # Accessible strategy consultation dialog
    │   ├── StickyContactBar.tsx  # Mobile quick-action bar (Call, WhatsApp, Consultation)
    │   ├── MethodologySection.tsx# 6-stage “Strategically Marketed, Scientifically Sold!”
    │   └── FaqAccordion.tsx  # Interactive FAQ component
    ├── data/
    │   ├── servicesData.ts   # All 10 services data, problems, deliverables & FAQs
    │   └── blogData.ts       # 8 research-backed educational real estate marketing articles
    ├── utils/
    │   └── analytics.ts      # Privacy-preserving conversion event tracking
    └── pages/
        ├── HomePage.tsx
        ├── AboutPage.tsx
        ├── DevelopersPage.tsx
        ├── ChannelPartnersPage.tsx
        ├── AssociatesPage.tsx
        ├── ServicesIndexPage.tsx
        ├── ServiceDetailPage.tsx
        ├── WorkPage.tsx
        ├── InsightsPage.tsx
        ├── ArticleDetailPage.tsx
        ├── ContactPage.tsx
        ├── PrivacyPage.tsx
        ├── TermsPage.tsx
        └── NotFoundPage.tsx
```

---

## 4. Prerequisites

- **Node.js:** v18.0.0 or higher
- **npm:** v9.0.0 or higher

---

## 5. Local Installation

```bash
# 1. Clone repository and navigate to directory
cd realty-experts

# 2. Install production and development dependencies
npm install

# 3. Configure environment variables
cp .env.example .env
```

---

## 6. Environment Variable Configuration

Create a `.env` file in the root directory based on `.env.example`:

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `PORT` | Web server listening port | `3000` |
| `NODE_ENV` | Runtime environment mode | `development` or `production` |
| `SITE_URL` | Canonical site domain | `https://www.realtyexperts.online` |
| `LEAD_STORAGE_MODE` | Lead storage strategy | `file` |
| `SMTP_HOST` | Outgoing SMTP mail server | `smtp.example.com` (leave empty to log safely) |
| `SMTP_PORT` | Outgoing SMTP port | `587` |
| `SMTP_SECURE` | Use TLS (true for 465, false for 587) | `false` |
| `SMTP_USER` | SMTP username | *(empty by default)* |
| `SMTP_PASS` | SMTP password / app key | *(empty by default)* |
| `LEADS_TO_EMAIL` | Lead notification destination | `connect@realtyexperts.online` |
| `LEADS_FROM_EMAIL` | Lead email sender address | `noreply@realtyexperts.online` |
| `VITE_GA4_MEASUREMENT_ID` | Google Analytics 4 ID | *(optional)* |
| `VITE_GTM_CONTAINER_ID` | Google Tag Manager ID | *(optional)* |
| `VITE_META_PIXEL_ID` | Meta Pixel Identifier | *(optional)* |

---

## 7. Development & Production Commands

### Development Mode (with Instant Middleware)
```bash
npm run dev
```
Starts Express server on `http://0.0.0.0:3000` with Vite middleware mounted. Changes to React components or CSS update instantly.

### Production Build
```bash
npm run build
```
Compiles client assets into `dist/` and creates a standalone production `server.js` using esbuild.

### Production Execution
```bash
npm start
# or: node server.js
```
Runs the Express production server serving static assets and API routes directly without any dev dependencies.

---

## 8. Backend Lead Management & Storage

### API Route: `POST /api/leads`
Accepts submissions with:
- `fullName`: string (min 2, max 100)
- `email`: valid RFC 5322 format
- `phone`: sanitized, valid 10-15 digit phone with international/Indian format
- `businessType`: 'developer' | 'channel_partner' | 'associate' | 'consultation' | 'general'
- `consent`: boolean (must be true)
- Optional fields: `companyName`, `projectLocation`, `projectType`, `service`, `currentChallenge`, `message`

### Security & Delivery Safeguards:
1. **Rate Limiting:** Enforces maximum 10 submissions per 15 minutes per IP. Exceeding returns HTTP 429.
2. **Duplicate Prevention:** Prevents identical submissions (same email & phone) within 3 minutes.
3. **Atomic Persistence:** Each accepted lead is appended to `data/leads.json` using atomic temporary file write and rename to prevent file corruption.
4. **Resilient Notification:** If SMTP credentials are configured, an alert email is sent to `connect@realtyexperts.online`. If SMTP credentials are missing, the lead is safely recorded and an informative server log is created without crashing the application.
5. **No Public PII Exposure:** There is no unauthenticated endpoint that returns lead databases.

### API Route: `GET /api/health`
Returns system health, server uptime, and total leads recorded:
```json
{
  "status": "ok",
  "service": "Realty Experts Web Application API",
  "brand": "Realty Experts",
  "tagline": "Strategically Marketed, Scientifically Sold!",
  "uptimeSeconds": 3600,
  "leadMetrics": {
    "totalRecorded": 12,
    "lastRecorded": "2026-10-09T07:30:00.000Z"
  }
}
```

---

## 9. Conversion Rate Optimisation (CRO)

- **Consistent CTAs:** Specific action labels throughout: *"Book a Strategy Consultation"*, *"Discuss Your Project Marketing"*, *"Build Your Channel Partner Brand"*, *"Grow Your Real Estate Business"*.
- **Direct Contact Links:**
  - Phone: `tel:+919682294324`
  - WhatsApp: `https://wa.me/919682294324?text=...` with pre-filled context for developers, channel partners, and general inquiries.
  - Email: `mailto:connect@realtyexperts.online`
- **Mobile Floating Bar:** Quick access to Call, WhatsApp, and Consultation modal without blocking content.
- **Zero Pill / Anti-Slop Discipline:** Strict typographic hierarchy, WCAG AA contrast, no generic placeholder claims or artificial metrics.

---

## 10. Technical SEO Foundations

- **Canonical URL:** `https://www.realtyexperts.online`
- **Page Titles & Meta Descriptions:** Distinct titles and summaries tailored to real estate keywords for Noida, Lucknow, and NCR.
- **Schema.org Structured Data:** Valid JSON-LD graph specifying `ProfessionalService`, `Organization`, office locations (Noida, Lucknow), official telephone, email, and catalog of all 10 services.
- **Sitemap & Robots:** `public/sitemap.xml` lists all 22 public pages; `public/robots.txt` specifies crawl permissions and sitemap URL.

---

## 11. Deployment Checklist

- [x] Node.js + Express web server binds to `0.0.0.0` and listens on `process.env.PORT || 3000`.
- [x] All 22 required pages functional with working internal navigation.
- [x] Official Realty Experts logo and favicon integrated without distortion or AI regeneration.
- [x] Contact phone (`+91 96822 94324`) and email (`connect@realtyexperts.online`) linked directly.
- [x] Lead submission API verified with validation, rate-limiting, and error handling.
- [x] `.env.example` documents all required parameters.
- [x] `.gitignore` excludes private leads and environment files.
- [x] Custom 404 handler returns branded error page.
