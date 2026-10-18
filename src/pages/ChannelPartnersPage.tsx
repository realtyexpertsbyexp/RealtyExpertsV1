import React from 'react';
import { Users2, Target, Smartphone, Share2, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { LeadForm } from '../components/LeadForm';
import { FaqAccordion } from '../components/FaqAccordion';
import { trackEvent } from '../utils/analytics';

interface ChannelPartnersPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const ChannelPartnersPage: React.FC<ChannelPartnersPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const cpFaqs = [
    {
      question: 'Why should a Channel Partner invest in their own digital brand instead of relying on developers?',
      answer: 'When you market solely with developer-supplied flyers, you have no brand equity and no proprietary buyer database. Building your own digital presence lets you build repeat investor relationships, cross-sell across multiple projects, and command higher trust with buyers.'
    },
    {
      question: 'How do you prevent leads from leaking across our team of agents?',
      answer: 'We implement centralized CRM routing. Inbound leads from ads or landing pages are instantly allocated round-robin or by sector preference to your team members, with manager escalation alerts for uncontacted leads.'
    },
    {
      question: 'Can you market projects across multiple developers simultaneously?',
      answer: 'Yes. We build portfolio microsites and multi-project campaign funnels that allow your firm to present comparative investment options across Noida, Greater Noida, and Lucknow.'
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
                For Real Estate Channel Partners
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#202020] tracking-tight leading-tight">
                Build an Authoritative Brand & Generate Proprietary Buyer Leads
              </h1>
              <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed">
                Break free from generic broker flyers. We help progressive channel partner firms build distinct market authority, run high-converting ad campaigns, and streamline sales team lead routing.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#cp-form"
                  className="bg-[#202020] hover:bg-black text-white px-7 py-3.5 rounded-md text-sm font-semibold transition-colors flex items-center space-x-2"
                >
                  <span>Build Your Channel Partner Brand</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/919682294324?text=Hello%20Realty%20Experts%2C%20I%20am%20interested%20in%20digital%20marketing%20for%20my%20channel%20partner%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('whatsapp_click', { location: 'cp_hero' })}
                  className="border border-gray-300 hover:bg-gray-50 text-[#202020] px-5 py-3.5 rounded-md text-sm font-medium transition-colors flex items-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#85888C]" />
                  <span>WhatsApp CP Desk</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gray-50 border border-gray-200 rounded-xl p-8 space-y-4">
              <h3 className="text-lg font-bold text-[#202020]">Channel Partner Solutions</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#4b5563]">
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#202020] shrink-0 mt-0.5" />
                  <span>Proprietary buyer enquiry funnels across Meta & Google</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#202020] shrink-0 mt-0.5" />
                  <span>Polished digital brand identity & executive LinkedIn presence</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#202020] shrink-0 mt-0.5" />
                  <span>Micro-market advisory websites featuring multiple projects</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#202020] shrink-0 mt-0.5" />
                  <span>Automated WhatsApp brochure bots and lead distribution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-[#202020] tracking-tight">
              From Property Broker to Trusted Investment Advisory
            </h2>
            <p className="mt-2 text-sm text-[#4b5563]">
              High-net-worth investors seek unbiased advice and market insight before committing capital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-7 space-y-3">
              <div className="p-2.5 bg-gray-50 w-fit rounded-md text-[#202020]">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#202020]">Proprietary Lead Funnels</h3>
              <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                Generate high-intent buyer inquiries directly under your brand name, giving your sales executives exclusive leads that competitors are not chasing.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-7 space-y-3">
              <div className="p-2.5 bg-gray-50 w-fit rounded-md text-[#202020]">
                <Share2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#202020]">Authority Content Engine</h3>
              <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                Position your leadership as the foremost authority on micro-market infrastructure, price trends, and upcoming commercial corridors.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-7 space-y-3">
              <div className="p-2.5 bg-gray-50 w-fit rounded-md text-[#202020]">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#202020]">Speed-to-Lead Workflows</h3>
              <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                Plug lead drop-offs with instant WhatsApp greeting templates, automatic brochure delivery, and round-robin sales agent notifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Channel Partner Form */}
      <section className="py-20 bg-white" id="cp-form">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm
            formType="channel_partner"
            title="Build Your Channel Partner Brand"
            subtitle="Let’s discuss your firm’s current marketing channels and craft a proprietary buyer acquisition roadmap."
            buttonLabel="Build My Marketing Strategy"
            sourceUrl="/channel-partner-marketing"
          />
        </div>
      </section>

      {/* FAQs */}
      <FaqAccordion items={cpFaqs} title="Channel Partner Marketing FAQs" />
    </div>
  );
};
