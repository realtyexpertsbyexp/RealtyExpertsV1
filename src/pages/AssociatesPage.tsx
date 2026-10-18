import React from 'react';
import { UserCheck, Video, MapPin, Search, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { LeadForm } from '../components/LeadForm';
import { FaqAccordion } from '../components/FaqAccordion';
import { trackEvent } from '../utils/analytics';

interface AssociatesPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const AssociatesPage: React.FC<AssociatesPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const associateFaqs = [
    {
      question: 'Can an independent consultant or boutique team afford specialized digital marketing?',
      answer: 'Yes. We offer tailored personal branding, video tour, and local SEO frameworks designed specifically for individual real estate consultants and small associate teams, providing high-leverage digital assets without enterprise overhead.'
    },
    {
      question: 'How do video walkthroughs help my business?',
      answer: 'Walkthrough videos establish immediate credibility and allow out-of-station or NRI buyers to tour properties virtually. They position you as a knowledgeable local expert and consistently generate higher-intent inquiries than static photo listings.'
    },
    {
      question: 'What is the role of Google Business Profile and Local SEO for consultants?',
      answer: 'When prospective buyers search for trusted property consultants in specific localities (e.g. Sector 150 Noida or Gomti Nagar Lucknow), an optimized Google Business Profile with verified reviews and active posts generates high-intent incoming calls directly to your phone.'
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
                For Real Estate Associates & Consultants
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#202020] tracking-tight leading-tight">
                Establish Personal Authority & Attract High-Value Property Inquiries
              </h1>
              <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed">
                Stand out in competitive micro-markets. We help independent property consultants and boutique advisory firms create polished personal brands, cinematic walkthrough videos, and sustainable local search visibility.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#associate-form"
                  className="bg-[#202020] hover:bg-black text-white px-7 py-3.5 rounded-md text-sm font-semibold transition-colors flex items-center space-x-2"
                >
                  <span>Grow Your Real Estate Business</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/919682294324?text=Hello%20Realty%20Experts%2C%20I%20am%20an%20independent%20real%20estate%20consultant%20interested%20in%20marketing%20support."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('whatsapp_click', { location: 'associate_hero' })}
                  className="border border-gray-300 hover:bg-gray-50 text-[#202020] px-5 py-3.5 rounded-md text-sm font-medium transition-colors flex items-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#85888C]" />
                  <span>WhatsApp Consultant Desk</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gray-50 border border-gray-200 rounded-xl p-8 space-y-4">
              <h3 className="text-lg font-bold text-[#202020]">Consultant Marketing Capabilities</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#4b5563]">
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#202020] shrink-0 mt-0.5" />
                  <span>Personal website & digital property showcase portfolio</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#202020] shrink-0 mt-0.5" />
                  <span>Cinematic property walkthrough video editing for YouTube & Reels</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#202020] shrink-0 mt-0.5" />
                  <span>Local SEO & Google Business Profile optimization</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#202020] shrink-0 mt-0.5" />
                  <span>Micro-market social media calendars & paid buyer ads</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Associates */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-[#202020] tracking-tight">
              Tools to Build Long-Term Commercial Equity
            </h2>
            <p className="mt-2 text-sm text-[#4b5563]">
              Move from one-off transactional deals to a systematic flow of inbound client referrals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-7 space-y-3">
              <div className="p-2.5 bg-gray-50 w-fit rounded-md text-[#202020]">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#202020]">Property Walkthrough Videos</h3>
              <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                Transform raw property walkthrough clips into cinematic 4K presentations with professional voiceovers, subtitles, and branded lower-thirds.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-7 space-y-3">
              <div className="p-2.5 bg-gray-50 w-fit rounded-md text-[#202020]">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#202020]">Local Micro-Market SEO</h3>
              <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                Rank when buyers search for trusted consultants in specific sectors, residential societies, or commercial hubs in Noida and Lucknow.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-7 space-y-3">
              <div className="p-2.5 bg-gray-50 w-fit rounded-md text-[#202020]">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#202020]">Personal Advisory Positioning</h3>
              <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                Position your personal advisory brand on LinkedIn and Instagram as a dependable real estate market authority who protects buyer interests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Associate Form */}
      <section className="py-20 bg-white" id="associate-form">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm
            formType="associate"
            title="Grow Your Real Estate Business"
            subtitle="Tell us about your micro-market focus and current client acquisition channels to receive tailored guidance."
            buttonLabel="Request a Consultation"
            sourceUrl="/associates-marketing"
          />
        </div>
      </section>

      {/* FAQs */}
      <FaqAccordion items={associateFaqs} title="Associate Marketing FAQs" />
    </div>
  );
};
