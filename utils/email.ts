import nodemailer from 'nodemailer';
import { StoredLead } from './lead-storage.js';

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587', 10);
const SMTP_SECURE = process.env.SMTP_SECURE === 'true';
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const TO_EMAIL = process.env.LEADS_TO_EMAIL || 'connect@realtyexperts.online';
const FROM_EMAIL = process.env.LEADS_FROM_EMAIL || 'noreply@realtyexperts.online';

/**
 * Sends an email notification when a new lead is submitted.
 * Returns boolean indicating whether email was sent.
 */
export async function sendLeadNotificationEmail(lead: StoredLead): Promise<{ sent: boolean; reason?: string }> {
  // If SMTP is not configured, do not pretend it was sent. Document and return clearly.
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.info(`[Lead Notice] Lead ${lead.id} recorded in durable storage. SMTP notification skipped (SMTP credentials not configured in environment).`);
    return { sent: false, reason: 'SMTP credentials not configured' };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
      connectionTimeout: 5000,
      greetingTimeout: 5000,
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
- Company: ${lead.companyName || 'Not specified'}
- Location: ${lead.projectLocation || 'Not specified'}
- Project Type: ${lead.projectType || 'Not specified'}
- Service of Interest: ${lead.service || 'Not specified'}

Challenge / Message:
${lead.currentChallenge ? `Challenge: ${lead.currentChallenge}\n` : ''}
${lead.message ? lead.message : 'No message provided'}

Source Page: ${lead.sourceUrl || 'https://www.realtyexperts.online'}
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
            <tr><td style="padding: 8px 0; color: #6b7280;">Business Category:</td><td style="padding: 8px 0; text-transform: capitalize;">${lead.businessType.replace('_', ' ')}</td></tr>
            ${lead.companyName ? `<tr><td style="padding: 8px 0; color: #6b7280;">Company / Firm:</td><td style="padding: 8px 0;">${lead.companyName}</td></tr>` : ''}
            ${lead.projectLocation ? `<tr><td style="padding: 8px 0; color: #6b7280;">Location:</td><td style="padding: 8px 0;">${lead.projectLocation}</td></tr>` : ''}
            ${lead.projectType ? `<tr><td style="padding: 8px 0; color: #6b7280;">Project Type:</td><td style="padding: 8px 0;">${lead.projectType}</td></tr>` : ''}
            ${lead.service ? `<tr><td style="padding: 8px 0; color: #6b7280;">Selected Service:</td><td style="padding: 8px 0; font-weight: 600;">${lead.service}</td></tr>` : ''}
          </table>

          ${lead.currentChallenge ? `
            <div style="background-color: #f9fafb; border-left: 3px solid #85888C; padding: 12px 16px; margin-bottom: 16px;">
              <strong style="font-size: 13px; color: #4b5563;">Current Marketing Challenge:</strong>
              <p style="margin: 4px 0 0 0; font-size: 14px; color: #1f2937;">${lead.currentChallenge}</p>
            </div>
          ` : ''}

          ${lead.message ? `
            <div style="background-color: #f9fafb; border-left: 3px solid #202020; padding: 12px 16px; margin-bottom: 16px;">
              <strong style="font-size: 13px; color: #4b5563;">Message / Requirement:</strong>
              <p style="margin: 4px 0 0 0; font-size: 14px; color: #1f2937;">${lead.message}</p>
            </div>
          ` : ''}

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af; text-align: center;">
            Enquiry captured via Realty Experts official website (<a href="${lead.sourceUrl || 'https://www.realtyexperts.online'}" style="color: #6b7280;">${lead.sourceUrl || 'https://www.realtyexperts.online'}</a>)
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
      html: htmlBody,
    });

    console.info(`[Lead Notice] Email notification for lead ${lead.id} sent successfully to ${TO_EMAIL}`);
    return { sent: true };
  } catch (error: any) {
    console.error(`[Lead Notice] Failed to dispatch email for lead ${lead.id}:`, error.message);
    return { sent: false, reason: error.message };
  }
}
