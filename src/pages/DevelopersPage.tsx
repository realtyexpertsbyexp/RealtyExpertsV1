import React from 'react';
import { Building2, Rocket, BarChart3, ShieldCheck, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { LeadForm } from '../components/LeadForm';
import { FaqAccordion } from '../components/FaqAccordion';
import { trackEvent } from '../utils/analytics';

interface DevelopersPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const DevelopersPage: React.FC<DevelopersPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const developerFaqs = [
    {
      question: 'How do you coordinate with our internal sales team and CRM?',
      answer: 'We configure instant webhook integrations directly into your sales CRM (LeadSquared, Sell.Do, Zoho, etc.). Leads are tagged with the specific adset, unit type, and budget bracket. We also establish automated WhatsApp notifications to ensure immediate contact.'
    },
    {
      question: 'Do you provide end-to-end creative production including 3D renders and videos?',
      answer: 'Yes. We script, film, and produce 4K property walkthroughs, aerial drone footage, and ad creatives. If 3D architectural renders already exist, we format and animate them into high-converting video and landing page assets.'
    },
    {
      question: 'How does your strategy change between Pre-Launch and Sustainment phases?',
      answer: 'During Pre-Launch, campaigns emphasize exclusivity, early investor privileges, and strategic teaser messaging. In the sustainment phase, we shift focus to specific remaining inventory tiers, actual construction progress milestones, and hyper-targeted micro-market buyer personas.'
    },
    {
      question: 'What is your compliance protocol for RERA announcements?',
      answer: 'Every landing page, digital ad, and brochure strictly displays the official RERA registration number, state RERA portal link, approved layout plans, and mandated legal disclaimers to ensure full statutory compliance.'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#85888C] block">
                For Real Estate Developers & Builders
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#202020] tracking-tight leading-tight">
                Project Marketing Engineered for High-Velocity Inventory Absorption
              </h1>
              <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed">
                From digital launch orchestration and high-intent buyer acquisition to custom project microsites and connected CRM routing, Realty Experts partners with real estate developers across NCR and Uttar Pradesh.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#project-form"
                  className="bg-[#202020] hover:bg-black text-white px-7 py-3.5 rounded-md text-sm font-semibold transition-colors flex items-center space-x-2"
                >
                  <span>Discuss Your Project Marketing</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/919682294324?text=Hello%20Realty%20Experts%2C%20I%20would%20like%20to%20discuss%20marketing%20for%20our%20real%20estate%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('whatsapp_click', { location: 'developer_hero' })}
                  className="border border-gray-300 hover:bg-gray-50 text-[#202020] px-5 py-3.5 rounded-md text-sm font-medium transition-colors flex items-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#85888C]" />
                  <span>WhatsApp Project Desk</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gray-50 border border-gray-200 rounded-xl p-8 space-y-4">
              <h3 className="text-lg font-bold text-[#202020]">Developer Marketing Deliverables</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#4b5563]">
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#202020] shrink-0 mt-0.5" />
                  <span>Full-funnel Meta Ads & Google Search acquisition campaigns</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#202020] shrink-0 mt-0.5" />
                  <span>Ultra-fast project microsites with interactive floor plans</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#202020] shrink-0 mt-0.5" />
                  <span>4K walkthrough video production & site progress documentation</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#202020] shrink-0 mt-0.5" />
                  <span>Automated CRM webhook routing & WhatsApp instant follow-up</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#202020] shrink-0 mt-0.5" />
                  <span>RERA-compliant messaging and weekly attribution reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Phases of Developer Marketing */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#85888C] block mb-2">
              Launch Lifecycle
            </span>
            <h2 className="text-3xl font-extrabold text-[#202020] tracking-tight">
              Phased Strategy from Pre-Launch to Final Registry
            </h2>
            <p className="mt-2 text-sm text-[#4b5563]">
              We align our digital marketing machinery with the real-world operational phases of your development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-3">
              <span className="text-xs font-bold uppercase text-[#85888C]">Phase 01</span>
              <h3 className="text-base font-bold text-[#202020]">Teaser & Positioning</h3>
              <p className="text-xs text-[#4b5563] leading-relaxed">
                Brand architecture, micro-market sentiment analysis, USP articulation, and landing page engineering prior to public launch.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-3">
              <span className="text-xs font-bold uppercase text-[#85888C]">Phase 02</span>
              <h3 className="text-base font-bold text-[#202020]">Pre-Launch EOI Sprints</h3>
              <p className="text-xs text-[#4b5563] leading-relaxed">
                Early investor campaigns, Expression of Interest (EOI) qualification, and channel partner digital sales enablement kits.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-3">
              <span className="text-xs font-bold uppercase text-[#85888C]">Phase 03</span>
              <h3 className="text-base font-bold text-[#202020]">Grand Launch Activation</h3>
              <p className="text-xs text-[#4b5563] leading-relaxed">
                High-intensity omnichannel surge across Meta, Google Ads, YouTube, and local PR to generate maximum sales gallery visits.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-3">
              <span className="text-xs font-bold uppercase text-[#85888C]">Phase 04</span>
              <h3 className="text-base font-bold text-[#202020]">Sustained Absorption</h3>
              <p className="text-xs text-[#4b5563] leading-relaxed">
                Continuous creative rotation, construction progress updates, NRI targeting, and targeted campaigns for specific inventory tiers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Project Enquiry Form */}
      <section className="py-20 bg-white" id="project-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm
            formType="developer"
            title="Discuss Your Project Marketing"
            subtitle="Submit details about your upcoming or active real estate development. A senior marketing strategist will review your requirements."
            buttonLabel="Discuss Your Project Marketing"
            sourceUrl="/developers-marketing"
          />
        </div>
      </section>

      {/* FAQs */}
      <FaqAccordion items={developerFaqs} title="Developer Marketing FAQs" />
    </div>
  );
};
