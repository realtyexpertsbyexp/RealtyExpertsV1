import React from 'react';
import { Phone, Mail, MapPin, Globe, ExternalLink, ArrowUpRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <footer className="bg-[#141414] text-[#85888C] border-t border-[#262626]">
      {/* Pre-Footer Action Banner */}
      <div className="border-b border-[#262626] bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A8ABB0] block mb-2">
                Specialised Real Estate Marketing
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Ready to elevate your project marketing and digital sales pipeline?
              </h2>
              <p className="mt-2 text-sm text-[#A8ABB0]">
                Speak with a real estate marketing specialist who understands developer absorption, channel partner dynamics, and buyer qualification.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="bg-white hover:bg-gray-100 text-[#141414] px-6 py-3 rounded-md text-sm font-semibold transition-all shadow-sm flex items-center space-x-2"
              >
                <span>Book a Strategy Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/919682294324?text=Hello%20Realty%20Experts%2C%20I%20would%20like%20to%20discuss%20digital%20marketing%20for%20my%20real%20estate%20business."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { location: 'footer_banner' })}
                className="bg-[#262626] hover:bg-[#333333] text-white px-5 py-3 rounded-md text-sm font-medium transition-colors border border-[#3b3b3b]"
              >
                WhatsApp Quick Chat
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/assets/logos/footer-logo.png"
                alt="Realty Experts"
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </div>

            <p className="text-xs uppercase tracking-widest font-semibold text-white">
              “Strategically Marketed, Scientifically Sold!”
            </p>

            <p className="text-sm text-[#A8ABB0] max-w-sm leading-relaxed">
              Realty Experts is a specialised digital marketing agency dedicated exclusively to the real estate sector. A proud initiative of <strong className="text-white font-medium">Prachar Prasar</strong>.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Primary Office:</strong> Noida, Uttar Pradesh, India
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Additional Office:</strong> Lucknow, Uttar Pradesh, India
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <a
                  href="tel:+919682294324"
                  onClick={() => trackEvent('phone_click', { location: 'footer' })}
                  className="hover:text-white transition-colors text-white font-medium"
                >
                  +91 96822 94324
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <a
                  href="mailto:connect@realtyexperts.online"
                  onClick={() => trackEvent('email_click', { location: 'footer' })}
                  className="hover:text-white transition-colors"
                >
                  connect@realtyexperts.online
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-white shrink-0" />
                <span className="text-white">https://www.realtyexperts.online</span>
              </div>
            </div>
          </div>

          {/* Solutions / Who We Help */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Who We Help</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/developers-marketing')}
                  className="hover:text-white transition-colors text-left"
                >
                  Developers & Builders
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/channel-partner-marketing')}
                  className="hover:text-white transition-colors text-left"
                >
                  Channel Partner Firms
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/associates-marketing')}
                  className="hover:text-white transition-colors text-left"
                >
                  Real Estate Associates
                </button>
              </li>
              <li className="pt-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-2">Agency</h3>
                <button
                  onClick={() => onNavigate('/about')}
                  className="hover:text-white transition-colors text-left block py-1"
                >
                  About Realty Experts
                </button>
                <button
                  onClick={() => onNavigate('/work')}
                  className="hover:text-white transition-colors text-left block py-1"
                >
                  Case Studies & Work
                </button>
                <button
                  onClick={() => onNavigate('/insights')}
                  className="hover:text-white transition-colors text-left block py-1"
                >
                  Educational Insights
                </button>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="hover:text-white transition-colors text-left block py-1"
                >
                  Contact & Locations
                </button>
              </li>
            </ul>
          </div>

          {/* Services Column 1 */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Core Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('/services/meta-ads')} className="hover:text-white transition-colors text-left">
                  Meta Ads & Performance
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/services/google-ads')} className="hover:text-white transition-colors text-left">
                  Google Ads for Real Estate
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/services/social-media')} className="hover:text-white transition-colors text-left">
                  Social Media Marketing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/services/project-marketing')} className="hover:text-white transition-colors text-left">
                  Project Marketing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/services/websites-landing-pages')} className="hover:text-white transition-colors text-left">
                  Websites & Landing Pages
                </button>
              </li>
            </ul>
          </div>

          {/* Services Column 2 */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Advanced Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('/services/real-estate-seo')} className="hover:text-white transition-colors text-left">
                  Real Estate SEO
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/services/video-creative-production')} className="hover:text-white transition-colors text-left">
                  Video Production & Tours
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/services/marketing-strategy-consulting')} className="hover:text-white transition-colors text-left">
                  Strategy & Consulting
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/services/crm-sales-automation')} className="hover:text-white transition-colors text-left">
                  CRM & Sales Automation
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/services/complete-marketing-outsourcing')} className="hover:text-white transition-colors text-left">
                  Marketing Outsourcing
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-14 pt-8 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between text-xs text-[#85888C] gap-4">
          <div>
            © {new Date().getFullYear()} Realty Experts. All rights reserved. A Prachar Prasar company.
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => onNavigate('/privacy-policy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('/terms-and-conditions')}
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </button>
            <span>Primary Market: India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
