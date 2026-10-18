/**
 * Analytics and Conversion Tracking Utility
 * Safely dispatches custom events to Google Analytics 4 (gtag), Google Tag Manager (dataLayer),
 * and Meta Pixel (fbq) if configured in the environment.
 * Strictly adheres to privacy guidelines: NEVER transmits PII (names, emails, phones).
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    fbq?: (...args: any[]) => void;
  }
}

export type AnalyticsEventName =
  | 'generate_lead'
  | 'form_start'
  | 'form_submit'
  | 'phone_click'
  | 'email_click'
  | 'whatsapp_click'
  | 'consultation_cta_click'
  | 'service_page_view'
  | 'case_study_view';

export function trackEvent(eventName: AnalyticsEventName, params: Record<string, any> = {}) {
  try {
    // Sanitize params - remove any accidental PII fields
    const safeParams = { ...params };
    delete safeParams.name;
    delete safeParams.fullName;
    delete safeParams.email;
    delete safeParams.phone;
    delete safeParams.message;

    // 1. Google Analytics 4
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, safeParams);
    }

    // 2. Google Tag Manager
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...safeParams,
        timestamp: new Date().toISOString()
      });
    }

    // 3. Meta Pixel
    if (typeof window.fbq === 'function') {
      if (eventName === 'generate_lead') {
        window.fbq('track', 'Lead', safeParams);
      } else if (eventName === 'consultation_cta_click') {
        window.fbq('trackCustom', 'ConsultationClick', safeParams);
      } else if (eventName === 'whatsapp_click') {
        window.fbq('trackCustom', 'WhatsAppClick', safeParams);
      }
    }

    // Safe dev log for verification
    if (process.env.NODE_ENV !== 'production') {
      console.debug(`[Analytics Event] ${eventName}:`, safeParams);
    }
  } catch (err) {
    // Fail silently without disrupting user experience
    console.debug('[Analytics Warning]: Event dispatch skipped');
  }
}
