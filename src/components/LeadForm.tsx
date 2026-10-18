import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, Send, Phone, MessageSquare } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export interface LeadFormProps {
  formType: 'developer' | 'channel_partner' | 'associate' | 'consultation' | 'general';
  defaultService?: string;
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  sourceUrl?: string;
  onSuccess?: (leadId: string) => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  formType = 'general',
  defaultService = '',
  title,
  subtitle,
  buttonLabel,
  sourceUrl,
  onSuccess
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessType: formType,
    companyName: '',
    projectLocation: '',
    projectType: 'Residential High-Rise',
    service: defaultService || '',
    currentChallenge: '',
    message: '',
    consent: true
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedLeadId, setSubmittedLeadId] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const handleFieldChange = (field: string, value: any) => {
    if (!hasStarted) {
      setHasStarted(true);
      trackEvent('form_start', { formType });
    }

    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear inline error on change
    if (errors[field]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid business email address.';
    }

    const phoneRegex = /^\+?[0-9]{8,15}$/;
    const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, '');
    if (!formData.phone.trim() || !phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Please provide a valid 10-digit mobile or phone number.';
    }

    if (!formData.consent) {
      newErrors.consent = 'Consent is required to allow our specialists to review and respond.';
    }

    if (formType === 'developer') {
      if (!formData.companyName.trim()) {
        newErrors.companyName = 'Please specify your developer or company name.';
      }
      if (!formData.projectLocation.trim()) {
        newErrors.projectLocation = 'Please specify your project location / city.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    trackEvent('form_submit', { formType, service: formData.service || 'unspecified' });

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          sourceUrl: sourceUrl || window.location.pathname
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmittedLeadId(data.leadId);
        trackEvent('generate_lead', {
          formType,
          leadId: data.leadId,
          businessType: formData.businessType
        });
        if (onSuccess) {
          onSuccess(data.leadId);
        }
      } else if (response.status === 400 && data.errors) {
        setErrors(data.errors);
        setServerError(data.message || 'Please correct the highlighted fields.');
      } else if (response.status === 429) {
        setServerError('Too many submissions. Please wait a few minutes, or contact us directly at +91 96822 94324.');
      } else {
        setServerError(data.message || 'Unable to submit enquiry at this time. Please contact connect@realtyexperts.online.');
      }
    } catch (err: any) {
      console.error('Submission error:', err);
      setServerError('Network error. Please check your internet connection or reach us directly at +91 96822 94324.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // SUCCESS STATE
  if (submittedLeadId) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-8 sm:p-10 shadow-xs text-center animate-in fade-in">
        <div className="w-14 h-14 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <span className="text-xs font-semibold tracking-wider uppercase text-[#85888C] block mb-1">
          Enquiry Received
        </span>
        <h3 className="text-2xl font-bold text-[#202020] mb-3">
          Thank you, {formData.fullName}!
        </h3>
        <p className="text-sm text-[#4b5563] max-w-md mx-auto mb-6 leading-relaxed">
          Your enquiry has been successfully logged with reference{' '}
          <strong className="text-[#202020] font-semibold">{submittedLeadId}</strong>. A Realty Experts real estate marketing specialist will review your requirement and reach out within 1 business day.
        </p>

        <div className="bg-gray-50 border border-gray-100 rounded-md p-4 max-w-md mx-auto mb-8 text-left text-xs space-y-1.5 text-[#4b5563]">
          <div><span className="text-[#85888C]">Category:</span> <span className="font-medium text-[#202020] capitalize">{formData.businessType.replace('_', ' ')}</span></div>
          <div><span className="text-[#85888C]">Contact Phone:</span> <span className="font-medium text-[#202020]">{formData.phone}</span></div>
          <div><span className="text-[#85888C]">Email:</span> <span className="font-medium text-[#202020]">{formData.email}</span></div>
          {formData.service && <div><span className="text-[#85888C]">Selected Service:</span> <span className="font-medium text-[#202020]">{formData.service}</span></div>}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/919682294324?text=Hello%20Realty%20Experts%2C%20I%20just%20submitted%20an%20enquiry%20(Ref%3A%20${encodeURIComponent(submittedLeadId)})%20and%20would%20like%20to%20connect%20now.`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('whatsapp_click', { location: 'form_success' })}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#202020] hover:bg-black text-white px-5 py-2.5 rounded-md text-xs font-semibold transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Need Immediate Response? WhatsApp Us</span>
          </a>
          <button
            onClick={() => {
              setSubmittedLeadId(null);
              setFormData({
                fullName: '',
                email: '',
                phone: '',
                businessType: formType,
                companyName: '',
                projectLocation: '',
                projectType: 'Residential High-Rise',
                service: defaultService || '',
                currentChallenge: '',
                message: '',
                consent: true
              });
            }}
            className="w-full sm:w-auto text-xs text-[#85888C] hover:text-[#202020] py-2 px-3 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  // DEFAULT FORM LABELS
  const defaultTitle =
    formType === 'developer' ? 'Discuss Your Project Marketing' :
    formType === 'channel_partner' ? 'Build Your Channel Partner Brand' :
    formType === 'associate' ? 'Grow Your Real Estate Business' :
    formType === 'consultation' ? 'Book a Strategy Consultation' :
    'Request a Real Estate Marketing Consultation';

  const defaultBtnLabel =
    buttonLabel ||
    (formType === 'developer' ? 'Discuss Your Project Marketing' :
     formType === 'channel_partner' ? 'Build My Marketing Strategy' :
     formType === 'associate' ? 'Request Consultation' :
     'Book Strategy Consultation');

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 shadow-xs">
      {/* Form Header */}
      <div className="mb-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#85888C] block mb-1">
          Confidential Consultation
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-[#202020] tracking-tight">
          {title || defaultTitle}
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-[#4b5563]">
          {subtitle || 'No generic sales pitches. You will speak with a real estate marketing specialist.'}
        </p>
      </div>

      {serverError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-xs sm:text-sm text-red-700 flex items-start space-x-2.5">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{serverError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className="block text-xs font-semibold text-[#202020] mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              required
              value={formData.fullName}
              onChange={(e) => handleFieldChange('fullName', e.target.value)}
              placeholder="e.g. Rahul Sharma"
              className={`w-full px-3.5 py-2.5 text-sm rounded-md border ${
                errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-gray-200 bg-white'
              } focus:outline-none focus:ring-1 focus:ring-[#202020] focus:border-[#202020] text-[#202020]`}
            />
            {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-[#202020] mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => handleFieldChange('phone', e.target.value)}
              placeholder="+91 98765 43210"
              className={`w-full px-3.5 py-2.5 text-sm rounded-md border ${
                errors.phone ? 'border-red-500 bg-red-50/20' : 'border-gray-200 bg-white'
              } focus:outline-none focus:ring-1 focus:ring-[#202020] focus:border-[#202020] text-[#202020]`}
            />
            {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
          </div>
        </div>

        {/* Business Email & Company Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-[#202020] mb-1">
              Business Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => handleFieldChange('email', e.target.value)}
              placeholder="name@company.com"
              className={`w-full px-3.5 py-2.5 text-sm rounded-md border ${
                errors.email ? 'border-red-500 bg-red-50/20' : 'border-gray-200 bg-white'
              } focus:outline-none focus:ring-1 focus:ring-[#202020] focus:border-[#202020] text-[#202020]`}
            />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="companyName" className="block text-xs font-semibold text-[#202020] mb-1">
              {formType === 'developer' ? 'Developer / Brand Name *' : 'Company / Firm Name'}
            </label>
            <input
              type="text"
              id="companyName"
              value={formData.companyName}
              onChange={(e) => handleFieldChange('companyName', e.target.value)}
              placeholder={formType === 'developer' ? 'e.g. Apex Infratech' : 'e.g. PropConsult Advisors'}
              className={`w-full px-3.5 py-2.5 text-sm rounded-md border ${
                errors.companyName ? 'border-red-500 bg-red-50/20' : 'border-gray-200 bg-white'
              } focus:outline-none focus:ring-1 focus:ring-[#202020] focus:border-[#202020] text-[#202020]`}
            />
            {errors.companyName && <p className="mt-1 text-xs text-red-600">{errors.companyName}</p>}
          </div>
        </div>

        {/* Specific Developer Fields */}
        {formType === 'developer' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="projectLocation" className="block text-xs font-semibold text-[#202020] mb-1">
                Project Location / City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="projectLocation"
                value={formData.projectLocation}
                onChange={(e) => handleFieldChange('projectLocation', e.target.value)}
                placeholder="e.g. Sector 150, Noida"
                className={`w-full px-3.5 py-2.5 text-sm rounded-md border ${
                  errors.projectLocation ? 'border-red-500 bg-red-50/20' : 'border-gray-200 bg-white'
                } focus:outline-none focus:ring-1 focus:ring-[#202020] focus:border-[#202020] text-[#202020]`}
              />
              {errors.projectLocation && <p className="mt-1 text-xs text-red-600">{errors.projectLocation}</p>}
            </div>

            <div>
              <label htmlFor="projectType" className="block text-xs font-semibold text-[#202020] mb-1">
                Project Classification
              </label>
              <select
                id="projectType"
                value={formData.projectType}
                onChange={(e) => handleFieldChange('projectType', e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-md border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#202020] focus:border-[#202020] text-[#202020]"
              >
                <option value="Residential High-Rise">Residential High-Rise / Towers</option>
                <option value="Luxury Villas / Floors">Luxury Villas / Independent Floors</option>
                <option value="Commercial Retail & Office">Commercial Retail & Office Complex</option>
                <option value="Plotted Development">Plotted / Township Development</option>
                <option value="Hospitality / Studio Suites">Hospitality / Studio Suites</option>
              </select>
            </div>
          </div>
        )}

        {/* Channel Partner or Associate Location */}
        {(formType === 'channel_partner' || formType === 'associate') && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="projectLocation" className="block text-xs font-semibold text-[#202020] mb-1">
                Operating City / Micro-Market
              </label>
              <input
                type="text"
                id="projectLocation"
                value={formData.projectLocation}
                onChange={(e) => handleFieldChange('projectLocation', e.target.value)}
                placeholder="e.g. Noida, Greater Noida, or Lucknow"
                className="w-full px-3.5 py-2.5 text-sm rounded-md border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#202020] focus:border-[#202020] text-[#202020]"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-xs font-semibold text-[#202020] mb-1">
                Primary Marketing Goal
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => handleFieldChange('service', e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-md border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#202020] focus:border-[#202020] text-[#202020]"
              >
                <option value="">Select Primary Goal</option>
                <option value="Buyer Enquiry Generation">High-Intent Buyer Lead Generation</option>
                <option value="Channel Partner Branding">Brand Positioning & Authority</option>
                <option value="Website & Microsites">Microsite & Landing Pages</option>
                <option value="Social Media & Video Tours">Video Walkthroughs & Social Media</option>
                <option value="Local SEO & Google Maps">Local SEO & Google Search</option>
                <option value="CRM & WhatsApp Automation">CRM & WhatsApp Follow-up Automation</option>
              </select>
            </div>
          </div>
        )}

        {/* Preferred Service for General / Consultation */}
        {(formType === 'general' || formType === 'consultation') && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="businessType" className="block text-xs font-semibold text-[#202020] mb-1">
                Your Business Category
              </label>
              <select
                id="businessType"
                value={formData.businessType}
                onChange={(e) => handleFieldChange('businessType', e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-md border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#202020] focus:border-[#202020] text-[#202020]"
              >
                <option value="developer">Real Estate Developer / Builder</option>
                <option value="channel_partner">Real Estate Channel Partner</option>
                <option value="associate">Property Consultant / Associate</option>
                <option value="consultation">Strategic Advisory / Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="service" className="block text-xs font-semibold text-[#202020] mb-1">
                Preferred Service Area
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => handleFieldChange('service', e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-md border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#202020] focus:border-[#202020] text-[#202020]"
              >
                <option value="">Select Service (or Discuss during call)</option>
                <option value="Meta Ads & Performance Marketing">Meta Ads & Performance Marketing</option>
                <option value="Google Ads for Real Estate">Google Ads for Real Estate</option>
                <option value="Real Estate Project Marketing">Real Estate Project Marketing</option>
                <option value="Social Media Marketing">Social Media Marketing</option>
                <option value="Website Development & Landing Pages">Website Development & Landing Pages</option>
                <option value="Real Estate SEO">Real Estate SEO</option>
                <option value="Video Production & Tours">Video Production & Tours</option>
                <option value="Marketing Strategy & Consulting">Marketing Strategy & Consulting</option>
                <option value="CRM & Sales Automation">CRM & Sales Automation</option>
                <option value="Complete Marketing Outsourcing">Complete Marketing Outsourcing</option>
              </select>
            </div>
          </div>
        )}

        {/* Current Marketing Challenge */}
        {formType === 'developer' && (
          <div>
            <label htmlFor="currentChallenge" className="block text-xs font-semibold text-[#202020] mb-1">
              Current Marketing Challenge
            </label>
            <input
              type="text"
              id="currentChallenge"
              value={formData.currentChallenge}
              onChange={(e) => handleFieldChange('currentChallenge', e.target.value)}
              placeholder="e.g. High CPL with low site visit show-up rates, upcoming tower launch"
              className="w-full px-3.5 py-2.5 text-sm rounded-md border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#202020] focus:border-[#202020] text-[#202020]"
            />
          </div>
        )}

        {/* Message / Details */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-[#202020] mb-1">
            Brief Requirement or Notes
          </label>
          <textarea
            id="message"
            rows={3}
            value={formData.message}
            onChange={(e) => handleFieldChange('message', e.target.value)}
            placeholder="Tell us about your project or current marketing goals..."
            className="w-full px-3.5 py-2.5 text-sm rounded-md border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#202020] focus:border-[#202020] text-[#202020] resize-y"
          />
        </div>

        {/* Consent Checkbox */}
        <div className="pt-1">
          <label className="flex items-start space-x-2.5 cursor-pointer">
            <input
              type="checkbox"
              id="consent"
              checked={formData.consent}
              onChange={(e) => handleFieldChange('consent', e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#202020] focus:ring-[#202020]"
            />
            <span className="text-xs text-[#6b7280] leading-relaxed">
              I consent to Realty Experts contacting me regarding this business enquiry via telephone, email, or WhatsApp. We do not share your information with external brokers.
            </span>
          </label>
          {errors.consent && <p className="mt-1 text-xs text-red-600">{errors.consent}</p>}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#202020] hover:bg-black text-white py-3.5 px-6 rounded-md text-sm font-semibold transition-all duration-150 flex items-center justify-center space-x-2 shadow-xs hover:shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing Submission...</span>
              </>
            ) : (
              <>
                <span>{defaultBtnLabel}</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        <div className="pt-2 text-center text-xs text-[#85888C] flex items-center justify-center space-x-4">
          <span>Official Contact: +91 96822 94324</span>
          <span>·</span>
          <span>connect@realtyexperts.online</span>
        </div>
      </form>
    </div>
  );
};
