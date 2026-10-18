import { Router, Request, Response } from 'express';
import { leadRateLimitMiddleware } from '../middleware/security.js';
import { validateLeadSubmission, ValidatedLeadPayload } from '../middleware/validation.js';
import { saveLead } from '../utils/lead-storage.js';
import { sendLeadNotificationEmail } from '../utils/email.js';

const router = Router();

router.post('/', leadRateLimitMiddleware, validateLeadSubmission, async (req: Request, res: Response) => {
  try {
    const validatedLead = (req as any).validatedLead as ValidatedLeadPayload;

    // Save lead durably to storage
    const storedLead = await saveLead(validatedLead);

    // Dispatch email notification in background
    sendLeadNotificationEmail(storedLead).catch((err) => {
      console.error('[Lead Dispatch Error]:', err);
    });

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your enquiry has been received. A real estate marketing specialist from Realty Experts will contact you shortly.',
      leadId: storedLead.id,
      timestamp: storedLead.createdAt
    });
  } catch (err: any) {
    console.error('[Lead Submission Error]:', err);
    return res.status(500).json({
      success: false,
      message: 'An unexpected error occurred while processing your request. Please try again or call us directly at +91 96822 94324.',
      code: 'SERVER_ERROR'
    });
  }
});

export default router;
