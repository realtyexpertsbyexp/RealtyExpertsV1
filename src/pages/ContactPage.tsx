import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock, Globe } from 'lucide-react';
import { LeadForm } from '../components/LeadForm';
import { trackEvent } from '../utils/analytics';

interface ContactPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#85888C] block">
              Direct Contact & Office Locations
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#202020] tracking-tight leading-tight">
              Speak With Our Real Estate Marketing Specialists
            </h1>
            <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed">
              We welcome discussions with developers, builders, channel partners, and property consultants seeking high-intent commercial marketing support.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Contact Details & Lead Form */}
      <section className="py-20 bg-gray-50 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Information & Channels */}
            <div className="lg:col-span-5 space-y-8">
              {/* Official Contact Card */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 space-y-6 shadow-xs">
                <h2 className="text-xl font-bold text-[#202020]">
                  Official Contact Channels
                </h2>

                <div className="space-y-4 text-xs sm:text-sm">
                  {/* Phone */}
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2 bg-gray-50 rounded text-[#202020] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[#85888C] font-semibold block text-xs">Telephone</span>
                      <a
                        href="tel:+919682294324"
                        onClick={() => trackEvent('phone_click', { location: 'contact_page' })}
                        className="text-[#202020] font-bold hover:underline"
                      >
                        +91 96822 94324
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2 bg-gray-50 rounded text-[#202020] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[#85888C] font-semibold block text-xs">Email</span>
                      <a
                        href="mailto:connect@realtyexperts.online"
                        onClick={() => trackEvent('email_click', { location: 'contact_page' })}
                        className="text-[#202020] font-bold hover:underline"
                      >
                        connect@realtyexperts.online
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2 bg-gray-50 rounded text-[#202020] shrink-0">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[#85888C] font-semibold block text-xs">WhatsApp Business</span>
                      <a
                        href="https://wa.me/919682294324?text=Hello%20Realty%20Experts%2C%20I%20would%20like%20to%20discuss%20digital%20marketing%20for%20my%20real%20estate%20business."
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('whatsapp_click', { location: 'contact_page' })}
                        className="text-[#202020] font-bold hover:underline inline-flex items-center space-x-1"
                      >
                        <span>Chat via WhatsApp (+91 96822 94324)</span>
                      </a>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2 bg-gray-50 rounded text-[#202020] shrink-0">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[#85888C] font-semibold block text-xs">Official Website</span>
                      <span className="text-[#202020] font-medium">https://www.realtyexperts.online</span>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2 bg-gray-50 rounded text-[#202020] shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[#85888C] font-semibold block text-xs">Consultation Hours</span>
                      <span className="text-[#202020] font-medium">Monday to Saturday: 9:30 AM – 6:30 PM IST</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 space-y-4 shadow-xs">
                <h3 className="text-lg font-bold text-[#202020]">
                  Operating Offices
                </h3>
                
                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-4 bg-gray-50 rounded-lg space-y-1">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-[#202020]" />
                      <strong className="text-[#202020]">Noida Office (Primary)</strong>
                    </div>
                    <p className="text-[#4b5563]">Noida, Uttar Pradesh, India</p>
                    <p className="text-[11px] text-[#85888C]">Primary client advisory & performance operations center.</p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg space-y-1">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-[#202020]" />
                      <strong className="text-[#202020]">Lucknow Office (Additional)</strong>
                    </div>
                    <p className="text-[#4b5563]">Lucknow, Uttar Pradesh, India</p>
                    <p className="text-[11px] text-[#85888C]">Regional marketing & channel partner coordination hub.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lead Form */}
            <div className="lg:col-span-7">
              <LeadForm
                formType="general"
                title="Send a Direct Business Enquiry"
                subtitle="Provide details regarding your project, advisory firm, or marketing goals. Our team will respond with actionable advice."
                buttonLabel="Send Business Enquiry"
                sourceUrl="/contact"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
