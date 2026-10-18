import React, { useState, useEffect } from 'react';
import { Phone, Mail, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [audienceDropdownOpen, setAudienceDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setAudienceDropdownOpen(false);
  }, [currentPath]);

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  const handleConsultationClick = () => {
    trackEvent('consultation_cta_click', { location: 'header' });
    onOpenConsultation();
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-200 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-gray-100 py-3' : 'bg-white border-b border-gray-100 py-4'
    }`}>
      {/* Top Utility Contact Bar */}
      <div className="hidden lg:block border-b border-gray-100 pb-2 mb-2 text-xs text-[#85888C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span>Specialised Real Estate Digital Marketing Agency · A Prachar Prasar Initiative</span>
            <span>Offices: Noida & Lucknow, UP</span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="tel:+919682294324"
              onClick={() => trackEvent('phone_click', { location: 'top_bar' })}
              className="flex items-center space-x-1.5 text-[#202020] hover:text-black font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#85888C]" />
              <span>+91 96822 94324</span>
            </a>
            <a
              href="mailto:connect@realtyexperts.online"
              onClick={() => trackEvent('email_click', { location: 'top_bar' })}
              className="flex items-center space-x-1.5 text-[#202020] hover:text-black transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#85888C]" />
              <span>connect@realtyexperts.online</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#202020] rounded-sm group text-left"
            aria-label="Realty Experts Homepage"
          >
            <img
              src="/assets/logos/header-logo.png"
              alt="Realty Experts - Strategically Marketed, Scientifically Sold!"
              className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-[1.01]"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-[#202020]">
            <button
              onClick={() => handleLinkClick('/')}
              className={`hover:text-black transition-colors ${currentPath === '/' ? 'text-black font-semibold' : 'text-[#4b5563]'}`}
            >
              Home
            </button>

            <button
              onClick={() => handleLinkClick('/about')}
              className={`hover:text-black transition-colors ${currentPath === '/about' ? 'text-black font-semibold' : 'text-[#4b5563]'}`}
            >
              About
            </button>

            {/* Who We Help Dropdown */}
            <div className="relative group" onMouseLeave={() => setAudienceDropdownOpen(false)}>
              <button
                onClick={() => setAudienceDropdownOpen(!audienceDropdownOpen)}
                onMouseEnter={() => setAudienceDropdownOpen(true)}
                className={`flex items-center space-x-1 hover:text-black transition-colors py-2 ${
                  currentPath.includes('marketing') ? 'text-black font-semibold' : 'text-[#4b5563]'
                }`}
              >
                <span>Who We Help</span>
                <ChevronDown className="w-4 h-4 text-[#85888C] group-hover:rotate-180 transition-transform duration-200" />
              </button>

              {audienceDropdownOpen && (
                <div
                  onMouseEnter={() => setAudienceDropdownOpen(true)}
                  className="absolute left-0 top-full mt-1 w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-1"
                >
                  <button
                    onClick={() => handleLinkClick('/developers-marketing')}
                    className="w-full text-left px-4 py-2.5 hover:bg-gray-50 flex flex-col group/item"
                  >
                    <span className="text-sm font-medium text-[#202020] group-hover/item:text-black">Developers & Builders</span>
                    <span className="text-xs text-[#85888C]">Project launches, lead generation, branding</span>
                  </button>
                  <button
                    onClick={() => handleLinkClick('/channel-partner-marketing')}
                    className="w-full text-left px-4 py-2.5 hover:bg-gray-50 flex flex-col group/item"
                  >
                    <span className="text-sm font-medium text-[#202020] group-hover/item:text-black">Channel Partners</span>
                    <span className="text-xs text-[#85888C]">Brand building, buyer inquiries, CRM flows</span>
                  </button>
                  <button
                    onClick={() => handleLinkClick('/associates-marketing')}
                    className="w-full text-left px-4 py-2.5 hover:bg-gray-50 flex flex-col group/item"
                  >
                    <span className="text-sm font-medium text-[#202020] group-hover/item:text-black">Real Estate Associates</span>
                    <span className="text-xs text-[#85888C]">Personal branding, video tours, local SEO</span>
                  </button>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative group" onMouseLeave={() => setServicesDropdownOpen(false)}>
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`flex items-center space-x-1 hover:text-black transition-colors py-2 ${
                  currentPath.startsWith('/services') ? 'text-black font-semibold' : 'text-[#4b5563]'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 text-[#85888C] group-hover:rotate-180 transition-transform duration-200" />
              </button>

              {servicesDropdownOpen && (
                <div
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[460px] bg-white rounded-lg shadow-xl border border-gray-100 p-3 grid grid-cols-2 gap-1 z-50 animate-in fade-in slide-in-from-top-1"
                >
                  <button
                    onClick={() => handleLinkClick('/services')}
                    className="col-span-2 text-left px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-md mb-1 text-xs font-semibold text-[#202020] flex items-center justify-between"
                  >
                    <span>View All 10 Services Overview</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#85888C]" />
                  </button>
                  
                  <button onClick={() => handleLinkClick('/services/meta-ads')} className="text-left p-2 rounded-md hover:bg-gray-50 text-xs">
                    <span className="font-medium text-[#202020] block">Meta Ads & Performance</span>
                    <span className="text-[11px] text-[#85888C]">High-intent buyer generation</span>
                  </button>
                  <button onClick={() => handleLinkClick('/services/google-ads')} className="text-left p-2 rounded-md hover:bg-gray-50 text-xs">
                    <span className="font-medium text-[#202020] block">Google Ads</span>
                    <span className="text-[11px] text-[#85888C]">High-intent search capture</span>
                  </button>
                  <button onClick={() => handleLinkClick('/services/project-marketing')} className="text-left p-2 rounded-md hover:bg-gray-50 text-xs">
                    <span className="font-medium text-[#202020] block">Project Marketing</span>
                    <span className="text-[11px] text-[#85888C]">Launches & sustainment</span>
                  </button>
                  <button onClick={() => handleLinkClick('/services/social-media')} className="text-left p-2 rounded-md hover:bg-gray-50 text-xs">
                    <span className="font-medium text-[#202020] block">Social Media Marketing</span>
                    <span className="text-[11px] text-[#85888C]">Brand trust & video reels</span>
                  </button>
                  <button onClick={() => handleLinkClick('/services/websites-landing-pages')} className="text-left p-2 rounded-md hover:bg-gray-50 text-xs">
                    <span className="font-medium text-[#202020] block">Websites & Landing Pages</span>
                    <span className="text-[11px] text-[#85888C]">Speed & conversion focused</span>
                  </button>
                  <button onClick={() => handleLinkClick('/services/real-estate-seo')} className="text-left p-2 rounded-md hover:bg-gray-50 text-xs">
                    <span className="font-medium text-[#202020] block">Real Estate SEO</span>
                    <span className="text-[11px] text-[#85888C]">Local search rankings</span>
                  </button>
                  <button onClick={() => handleLinkClick('/services/video-creative-production')} className="text-left p-2 rounded-md hover:bg-gray-50 text-xs">
                    <span className="font-medium text-[#202020] block">Video Production</span>
                    <span className="text-[11px] text-[#85888C]">Walkthroughs & 4K tours</span>
                  </button>
                  <button onClick={() => handleLinkClick('/services/crm-sales-automation')} className="text-left p-2 rounded-md hover:bg-gray-50 text-xs">
                    <span className="font-medium text-[#202020] block">CRM & Automation</span>
                    <span className="text-[11px] text-[#85888C]">Speed to lead & WhatsApp</span>
                  </button>
                  <button onClick={() => handleLinkClick('/services/marketing-strategy-consulting')} className="text-left p-2 rounded-md hover:bg-gray-50 text-xs">
                    <span className="font-medium text-[#202020] block">Marketing Strategy</span>
                    <span className="text-[11px] text-[#85888C]">Audits & go-to-market</span>
                  </button>
                  <button onClick={() => handleLinkClick('/services/complete-marketing-outsourcing')} className="text-left p-2 rounded-md hover:bg-gray-50 text-xs">
                    <span className="font-medium text-[#202020] block">Marketing Outsourcing</span>
                    <span className="text-[11px] text-[#85888C]">Full dedicated department</span>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleLinkClick('/work')}
              className={`hover:text-black transition-colors ${currentPath === '/work' ? 'text-black font-semibold' : 'text-[#4b5563]'}`}
            >
              Work
            </button>

            <button
              onClick={() => handleLinkClick('/insights')}
              className={`hover:text-black transition-colors ${currentPath.startsWith('/insights') ? 'text-black font-semibold' : 'text-[#4b5563]'}`}
            >
              Insights
            </button>

            <button
              onClick={() => handleLinkClick('/contact')}
              className={`hover:text-black transition-colors ${currentPath === '/contact' ? 'text-black font-semibold' : 'text-[#4b5563]'}`}
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={handleConsultationClick}
              className="bg-[#202020] hover:bg-black text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-150 shadow-xs hover:shadow-sm"
            >
              Book a Strategy Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={handleConsultationClick}
              className="bg-[#202020] text-white px-3 py-1.5 rounded text-xs font-semibold"
            >
              Consultation
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#202020] hover:text-black focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-white z-50 overflow-y-auto border-t border-gray-100 p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="pb-3 border-b border-gray-100">
              <span className="text-xs uppercase tracking-wider font-bold text-[#85888C] block mb-2">Main Navigation</span>
              <button
                onClick={() => handleLinkClick('/')}
                className="w-full text-left py-2 text-base font-semibold text-[#202020]"
              >
                Home
              </button>
              <button
                onClick={() => handleLinkClick('/about')}
                className="w-full text-left py-2 text-base font-semibold text-[#202020]"
              >
                About Realty Experts
              </button>
              <button
                onClick={() => handleLinkClick('/services')}
                className="w-full text-left py-2 text-base font-semibold text-[#202020]"
              >
                All 10 Services
              </button>
              <button
                onClick={() => handleLinkClick('/work')}
                className="w-full text-left py-2 text-base font-semibold text-[#202020]"
              >
                Case Studies & Work
              </button>
              <button
                onClick={() => handleLinkClick('/insights')}
                className="w-full text-left py-2 text-base font-semibold text-[#202020]"
              >
                Educational Insights / Blog
              </button>
              <button
                onClick={() => handleLinkClick('/contact')}
                className="w-full text-left py-2 text-base font-semibold text-[#202020]"
              >
                Contact Us
              </button>
            </div>

            <div className="pb-3 border-b border-gray-100">
              <span className="text-xs uppercase tracking-wider font-bold text-[#85888C] block mb-2">Who We Help</span>
              <button
                onClick={() => handleLinkClick('/developers-marketing')}
                className="w-full text-left py-1.5 text-sm font-medium text-[#4b5563]"
              >
                Real Estate Developers & Builders
              </button>
              <button
                onClick={() => handleLinkClick('/channel-partner-marketing')}
                className="w-full text-left py-1.5 text-sm font-medium text-[#4b5563]"
              >
                Channel Partner Firms
              </button>
              <button
                onClick={() => handleLinkClick('/associates-marketing')}
                className="w-full text-left py-1.5 text-sm font-medium text-[#4b5563]"
              >
                Real Estate Associates & Consultants
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100 space-y-4">
            <button
              onClick={handleConsultationClick}
              className="w-full bg-[#202020] text-white py-3 rounded-md font-semibold text-sm text-center shadow-xs"
            >
              Book a Strategy Consultation
            </button>
            <div className="text-center space-y-1">
              <a
                href="tel:+919682294324"
                className="block text-sm font-medium text-[#202020]"
              >
                Direct Call: +91 96822 94324
              </a>
              <a
                href="mailto:connect@realtyexperts.online"
                className="block text-xs text-[#85888C]"
              >
                connect@realtyexperts.online
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
