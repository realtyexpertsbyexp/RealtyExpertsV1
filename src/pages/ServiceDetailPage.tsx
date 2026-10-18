import React from 'react';
import { SERVICES, ServiceItem } from '../data/servicesData';
import { LeadForm } from '../components/LeadForm';
import { FaqAccordion } from '../components/FaqAccordion';
import { CheckCircle2, AlertTriangle, ArrowRight, ArrowLeft } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenConsultation
}) => {
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="py-24 text-center max-w-xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#202020] mb-3">Service Not Found</h2>
        <p className="text-sm text-[#4b5563] mb-6">The requested real estate marketing service page does not exist.</p>
        <button
          onClick={() => onNavigate('/services')}
          className="bg-[#202020] text-white px-5 py-2.5 rounded-md text-xs font-semibold"
        >
          View All Services
        </button>
      </div>
    );
  }

  // Related services resolution
  const related = SERVICES.filter((s) => service.relatedServices.includes(s.slug) || service.relatedServices.includes(s.id));

  return (
    <div className="flex flex-col">
      {/* Breadcrumb & Hero Header */}
      <section className="bg-white py-14 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs text-[#85888C] mb-6" aria-label="Breadcrumb">
            <button onClick={() => onNavigate('/')} className="hover:text-[#202020] transition-colors">Home</button>
            <span>/</span>
            <button onClick={() => onNavigate('/services')} className="hover:text-[#202020] transition-colors">Services</button>
            <span>/</span>
            <span className="text-[#202020] font-semibold">{service.name}</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#85888C] block">
              Real Estate Specialisation
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#202020] tracking-tight leading-tight">
              {service.heroHeadline}
            </h1>
            <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed">
              {service.heroSubheadline}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-[#85888C]">Primary Audience:</span>
              {service.targetAudience.map((item, idx) => (
                <span key={idx} className="text-xs font-medium bg-gray-100 text-[#202020] px-2.5 py-1 rounded">
                  {item}
                </span>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#enquiry-form"
                className="bg-[#202020] hover:bg-black text-white px-6 py-3 rounded-md text-xs font-semibold transition-colors inline-flex items-center space-x-2"
              >
                <span>{service.ctaLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => onNavigate('/services')}
                className="text-xs text-[#85888C] hover:text-[#202020] px-3 py-2 flex items-center space-x-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Services</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Problems Solved */}
      <section className="py-16 sm:py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#85888C] block mb-1">
              Market Realities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#202020] tracking-tight">
              Commercial Problems This Service Solves
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.businessProblems.map((prob, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 flex items-start space-x-3.5">
                <AlertTriangle className="w-5 h-5 text-[#85888C] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-medium">
                  {prob}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope of Deliverables */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#85888C] block mb-1">
              Scope of Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#202020] tracking-tight">
              What Is Included in this Service
            </h2>
            <p className="mt-2 text-sm text-[#4b5563]">
              Transparent, measurable deliverables designed to produce qualified buyers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-6 bg-gray-50/50 space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#202020]" />
                  <span className="text-xs font-bold uppercase text-[#85888C]">Deliverable 0{idx + 1}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#202020] font-medium leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Execution Process Steps */}
      <section className="py-16 sm:py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#85888C] block mb-1">
              Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#202020]">
              How the Execution Process Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {service.processSteps.map((step, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 space-y-2">
                <span className="text-2xl font-black text-[#85888C]/40 block">0{idx + 1}</span>
                <h3 className="text-base font-bold text-[#202020]">{step.title}</h3>
                <p className="text-xs text-[#4b5563] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqAccordion items={service.faqs} title={`${service.name} FAQs`} />

      {/* Lead Form Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100" id="enquiry-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm
            formType="general"
            defaultService={service.name}
            title={service.ctaLabel}
            subtitle={`Discuss your requirements for ${service.name}. Our specialists in Noida and Lucknow will evaluate your current marketing and propose a strategic solution.`}
            buttonLabel={service.ctaLabel}
            sourceUrl={`/services/${service.slug}`}
          />
        </div>
      </section>

      {/* Related Services */}
      {related.length > 0 && (
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg font-bold text-[#202020] mb-6">
              Complementary Real Estate Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onNavigate(`/services/${rel.slug}`)}
                  className="p-5 border border-gray-200 rounded-lg hover:border-gray-400 cursor-pointer transition-colors group"
                >
                  <h4 className="text-sm font-bold text-[#202020] group-hover:text-black mb-1">
                    {rel.name}
                  </h4>
                  <p className="text-xs text-[#4b5563] line-clamp-2 mb-3">
                    {rel.shortDesc}
                  </p>
                  <span className="text-xs font-semibold text-[#202020] flex items-center space-x-1">
                    <span>View Service</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
