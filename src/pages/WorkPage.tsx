import React from 'react';
import { ShieldCheck, Lock, FileText, ArrowRight, Building, CheckCircle } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface WorkPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-white py-16 sm:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#85888C] block">
              Case Studies & Proven Methodologies
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#202020] tracking-tight leading-tight">
              Selected Work & Campaign Architecture
            </h1>
            <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed">
              We respect non-disclosure agreements with developers, channel partners, and institutional property promoters. Below is our verified case study framework and private deck request portal.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Status Banner */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-xl p-8 sm:p-10 shadow-xs space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-md bg-gray-100 text-[#202020]">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-[#85888C] block">Confidentiality Protocol</span>
                <h2 className="text-xl font-bold text-[#202020]">Public Portfolio Being Updated</h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
              In the real estate sector, disclosing exact lead acquisition figures, unit booking velocity, or media budgets in a public forum compromises our developer and channel partner partners’ market positioning against regional competitors.
            </p>

            <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
              We present comprehensive, anonymized project dossiers during in-person and scheduled digital consultations.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  trackEvent('consultation_cta_click', { location: 'work_deck_request' });
                  onOpenConsultation();
                }}
                className="w-full sm:w-auto bg-[#202020] hover:bg-black text-white px-6 py-3 rounded-md text-xs font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <FileText className="w-4 h-4" />
                <span>Request Private Project Capability Deck</span>
              </button>
              <a
                href="tel:+919682294324"
                className="w-full sm:w-auto text-center border border-gray-300 hover:bg-gray-50 text-[#202020] px-5 py-3 rounded-md text-xs font-medium transition-colors"
              >
                Discuss Specific Micro-Market Track Record
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Framework Anatomy */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#85888C] block mb-2">
              Our Case Study Structure
            </span>
            <h2 className="text-3xl font-extrabold text-[#202020] tracking-tight">
              How We Evaluate & Report Real Estate Performance
            </h2>
            <p className="mt-2 text-sm text-[#4b5563]">
              Every client case study follows a disciplined, commercially grounded evaluation architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 space-y-3 bg-gray-50/50">
              <span className="text-xs font-bold uppercase text-[#85888C]">Element 01</span>
              <h3 className="text-base font-bold text-[#202020]">Starting Challenge & Baseline</h3>
              <p className="text-xs text-[#4b5563] leading-relaxed">
                Documenting the developer\'s initial state: past cost per lead, lead-to-visit conversion rates, uncontacted lead latency, and current channel dependencies.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 space-y-3 bg-gray-50/50">
              <span className="text-xs font-bold uppercase text-[#85888C]">Element 02</span>
              <h3 className="text-base font-bold text-[#202020]">Strategy & Execution Architecture</h3>
              <p className="text-xs text-[#4b5563] leading-relaxed">
                The tailored go-to-market plan: Meta Ads qualification forms, micro-market keyword negative lists, high-speed landing pages, and CRM webhook routing.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 space-y-3 bg-gray-50/50">
              <span className="text-xs font-bold uppercase text-[#85888C]">Element 03</span>
              <h3 className="text-base font-bold text-[#202020]">Downstream Business Outcome</h3>
              <p className="text-xs text-[#4b5563] leading-relaxed">
                Verified metrics: sales gallery visit show-up rates, cost per qualified lead, speed-to-lead response improvement, and inventory absorption velocity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Typical Project Archetypes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#85888C] block mb-1">
              Sector Specialisms
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#202020] tracking-tight">
              Project Profiles We Handle
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-2">
              <h3 className="text-base font-bold text-[#202020]">Luxury Residential & Golf Communities</h3>
              <p className="text-xs text-[#4b5563] leading-relaxed">
                Targeting high-net-worth individuals (HNIs), business owners, and CXOs with aspirational architectural cinematography and qualified ticket size filtering.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-2">
              <h3 className="text-base font-bold text-[#202020]">High-Density Commercial & Retail Spaces</h3>
              <p className="text-xs text-[#4b5563] leading-relaxed">
                Generating investors seeking rental yield, pre-leased corporate office floors, and retail shop units in arterial transit corridors.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-2">
              <h3 className="text-base font-bold text-[#202020]">Plotted Townships & Gated Communities</h3>
              <p className="text-xs text-[#4b5563] leading-relaxed">
                Micro-market search capture and weekend visit scheduling for buyers seeking land parcels with clear registry titles and infrastructure proximity.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-2">
              <h3 className="text-base font-bold text-[#202020]">Multi-Project Channel Partner Portfolios</h3>
              <p className="text-xs text-[#4b5563] leading-relaxed">
                Independent lead funnels allowing advisory firms to offer objective market comparisons across multiple developer inventory pools.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
