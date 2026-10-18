import React from 'react';
import { SERVICES } from '../data/servicesData';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface ServicesIndexPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const ServicesIndexPage: React.FC<ServicesIndexPageProps> = ({
  onNavigate,
  onOpenConsultation
}) => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-white py-16 sm:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#85888C] block">
              Core Capabilities
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#202020] tracking-tight leading-tight">
              Specialised Real Estate Marketing Services
            </h1>
            <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed">
              Every service is designed exclusively for the real estate industry, addressing specific developer absorption targets, channel partner brand equity, and buyer qualification requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col justify-between hover:border-gray-400 transition-all hover:shadow-xs group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#85888C]">
                      Service 0{index + 1}
                    </span>
                    <span className="text-[11px] font-semibold text-[#85888C] bg-gray-50 px-2 py-0.5 rounded">
                      Real Estate Exclusive
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-[#202020] group-hover:text-black">
                    {service.name}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Business Problem Addressed */}
                  <div className="p-4 bg-gray-50 rounded-lg space-y-1">
                    <span className="text-[11px] font-bold uppercase text-[#85888C] block">
                      Primary Problem Solved:
                    </span>
                    <p className="text-xs text-[#202020] font-medium leading-relaxed">
                      {service.businessProblems[0]}
                    </p>
                  </div>

                  {/* Deliverables snippet */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold uppercase text-[#85888C] block">
                      Key Deliverables:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#4b5563]">
                      {service.deliverables.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#202020] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Target Audience */}
                  <div className="text-xs text-[#85888C] pt-2 border-t border-gray-100 flex flex-wrap gap-2 items-center">
                    <span className="font-semibold text-[#202020]">Intended For:</span>
                    {service.targetAudience.map((aud, aIdx) => (
                      <span key={aIdx} className="text-xs text-[#4b5563]">
                        {aud}{aIdx < service.targetAudience.length - 1 ? ' ·' : ''}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={() => {
                      trackEvent('service_page_view', { service: service.slug });
                      onNavigate(`/services/${service.slug}`);
                    }}
                    className="bg-[#202020] hover:bg-black text-white px-5 py-2.5 rounded-md text-xs font-semibold transition-colors flex items-center justify-center space-x-1.5"
                  >
                    <span>View Service Scope & FAQs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={onOpenConsultation}
                    className="border border-gray-300 hover:bg-gray-50 text-[#202020] px-4 py-2.5 rounded-md text-xs font-medium transition-colors text-center"
                  >
                    {service.ctaLabel}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#141414] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#85888C] font-semibold block">
            Custom Real Estate Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Need an Integrated Multi-Channel Marketing Architecture?
          </h2>
          <p className="text-sm sm:text-base text-[#A8ABB0] max-w-2xl mx-auto leading-relaxed">
            Most successful real estate launches combine multiple services into an orchestrated campaign. Speak with our senior strategists to design a tailored scope.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                trackEvent('consultation_cta_click', { location: 'services_index_cta' });
                onOpenConsultation();
              }}
              className="bg-white hover:bg-gray-100 text-[#141414] px-7 py-3.5 rounded-md text-sm font-semibold transition-colors inline-flex items-center space-x-2"
            >
              <span>Book a Strategy Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
