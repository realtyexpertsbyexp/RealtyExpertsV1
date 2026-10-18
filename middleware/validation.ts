import { Request, Response, NextFunction } from 'express';

export interface ValidatedLeadPayload {
  fullName: string;
  email: string;
  phone: string;
  businessType: 'developer' | 'channel_partner' | 'associate' | 'consultation' | 'general';
  companyName?: string;
  projectLocation?: string;
  projectType?: string;
  service?: string;
  currentChallenge?: string;
  message?: string;
  consent: boolean;
  sourceUrl?: string;
}

// In-memory deduplication set: stores hash of (email+phone) with timestamp
const recentSubmissions = new Map<string, number>();
const DEDUP_WINDOW_MS = 3 * 60 * 1000; // 3 minutes

// Clean up deduplication cache
setInterval(() => {
  const now = Date.now();
  for (const [key, ts] of recentSubmissions.entries()) {
    if (now - ts > DEDUP_WINDOW_MS) {
      recentSubmissions.delete(key);
    }
  }
}, 60 * 1000).unref();

function sanitizeString(input: unknown): string {
  if (typeof input !== 'string') return '';
  return input
    .replace(/<[^>]*>/g, '') // Strip HTML tags
    .replace(/[<>'"&]/g, (char) => {
      switch (char) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case "'": return '&#39;';
        case '"': return '&quot;';
        case '&': return '&amp;';
        default: return char;
      }
    })
    .trim();
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone: string): boolean {
  // Allow optional +, digits, spaces, hyphens, min 8 digits, max 16 digits
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  const phoneRegex = /^\+?[0-9]{8,15}$/;
  return phoneRegex.test(cleaned);
}

export function validateLeadSubmission(req: Request, res: Response, next: NextFunction) {
  const body = req.body || {};
  const errors: Record<string, string> = {};

  // 1. Full Name
  const fullName = sanitizeString(body.fullName || body.name);
  if (!fullName) {
    errors.fullName = 'Full name is required.';
  } else if (fullName.length < 2) {
    errors.fullName = 'Name must be at least 2 characters long.';
  } else if (fullName.length > 100) {
    errors.fullName = 'Name must be less than 100 characters.';
  }

  // 2. Email
  const email = (typeof body.email === 'string' ? body.email.trim().toLowerCase() : '');
  if (!email) {
    errors.email = 'Business email address is required.';
  } else if (!isValidEmail(email)) {
    errors.email = 'Please provide a valid email address.';
  }

  // 3. Phone
  const rawPhone = typeof body.phone === 'string' ? body.phone.trim() : '';
  if (!rawPhone) {
    errors.phone = 'Contact phone number is required.';
  } else if (!isValidPhone(rawPhone)) {
    errors.phone = 'Please provide a valid telephone/mobile number (e.g. +91 96822 94324).';
  }

  // 4. Business Type
  const rawType = typeof body.businessType === 'string' ? body.businessType.trim() : 'general';
  const allowedTypes = ['developer', 'channel_partner', 'associate', 'consultation', 'general'];
  const businessType = allowedTypes.includes(rawType) ? rawType : 'general';

  // 5. Consent checkbox
  const consent = body.consent === true || body.consent === 'true' || body.consent === 'on' || body.consent === 1;
  if (!consent) {
    errors.consent = 'You must agree to allow Realty Experts to contact you regarding your enquiry.';
  }

  // Check errors
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed. Please correct the highlighted errors.',
      errors
    });
  }

  // Deduplication check
  const dedupKey = `${email}:${rawPhone.replace(/\D/g, '')}`;
  const now = Date.now();
  const lastSubmitted = recentSubmissions.get(dedupKey);
  if (lastSubmitted && now - lastSubmitted < DEDUP_WINDOW_MS) {
    return res.status(400).json({
      success: false,
      message: 'An identical enquiry was recently received. Our team will contact you shortly.',
      code: 'DUPLICATE_SUBMISSION'
    });
  }

  // Store timestamp in dedup map
  recentSubmissions.set(dedupKey, now);

  // Attach sanitized payload to request
  (req as any).validatedLead = {
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
  } as ValidatedLeadPayload;

  next();
}
