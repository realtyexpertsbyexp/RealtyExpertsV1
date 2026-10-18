import React from 'react';
import { ArrowRight, Building2, Users2, UserCheck, ShieldCheck, Zap, BarChart2, CheckCircle, Phone, ArrowUpRight } from 'lucide-react';
import { MethodologySection } from '../components/MethodologySection';
import { FaqAccordion } from '../components/FaqAccordion';
import { LeadForm } from '../components/LeadForm';
import { SERVICES } from '../data/servicesData';
import { BLOG_POSTS } from '../data/blogData';
import { trackEvent } from '../utils/analytics';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenConsultation }) => {
  const homeFaqs = [
    {
      question: 'What makes Realty Experts different from a generic digital marketing agency?',
      answer: 'Generic agencies apply e-commerce and retail tactics to real estate, producing cheap superficial leads that never show up at site offices. Realty Experts specializes exclusively in real estate. We understand RERA compliance, micro-market pricing, developer unit absorption stages, and multi-tier channel partner networks.'
    },
    {
      question: 'Do you work with real estate channel partners and individual brokers?',
      answer: 'Yes. We build dedicated marketing and brand architectures for channel partner organizations and independent property associates to help them generate proprietary buyer leads and establish micro-market authority.'
    },
    {
      question: 'How do you ensure leads generated from Meta and Google Ads are genuine?',
      answer: 'We introduce custom qualification fields (budget tiers, purchase timeline, unit requirements) rather than relying on standard auto-filled instant forms, and implement immediate CRM webhook alerts and WhatsApp brochure delivery.'
    },
    {
      question: 'What geographies do you cover across India?',
      answer: 'Our primary offices are located in Noida and Lucknow, Uttar Pradesh. We manage marketing campaigns for residential and commercial projects across the National Capital Region (NCR), Uttar Pradesh, and key high-growth investment corridors.'
    },
    {
      question: 'How do we begin working together?',
      answer: 'You can book a strategy consultation by submitting the enquiry form or calling us at +91 96822 94324. We will review your project inventory, target buyer profile, and current marketing channels before presenting a tailored proposal.'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative bg-white pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Eyebrow */}
              <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-wider uppercase text-[#85888C] border-b border-gray-200 pb-1">
                <span>Real Estate Digital Marketing Specialists</span>
              </div>

              {/* Primary Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#202020] tracking-tight leading-[1.12]">
                Real Estate Marketing.{' '}
                <span className="text-[#202020] block sm:inline">
                  Strategically Designed for Growth.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed max-w-2xl font-normal">
                From project marketing and performance advertising to websites, content, SEO, and connected lead management, Realty Experts helps real estate developers, channel partners, and associates build a stronger digital presence.
              </p>

              {/* Tagline Badge */}
              <div className="p-3 bg-gray-50 border-l-2 border-[#202020] max-w-xl">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#85888C] block">
                  Official Brand Philosophy
                </span>
                <span className="text-sm font-bold text-[#202020]">
                  “Strategically Marketed, Scientifically Sold!”
                </span>
              </div>

              {/* CTA Group */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    trackEvent('consultation_cta_click', { location: 'hero_primary' });
                    onOpenConsultation();
                  }}
                  className="bg-[#202020] hover:bg-black text-white px-7 py-3.5 rounded-md font-semibold text-sm transition-all shadow-xs hover:shadow-sm text-center flex items-center justify-center space-x-2"
                >
                  <span>Book a Strategy Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('/services')}
                  className="bg-white hover:bg-gray-50 text-[#202020] border border-gray-300 px-6 py-3.5 rounded-md font-semibold text-sm transition-colors text-center"
                >
                  Explore Our Services
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#85888C]">
                <div className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#202020]" />
                  <span>RERA-Aware Marketing Frameworks</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Building2 className="w-4 h-4 text-[#202020]" />
                  <span>Offices in Noida & Lucknow</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Zap className="w-4 h-4 text-[#202020]" />
                  <span>A Prachar Prasar Initiative</span>
                </div>
              </div>
            </div>

            {/* Right Architectural Visual Container */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100">
                {/* Authentic architectural photography SVG render representing modern Indian real estate development */}
                <svg
                  viewBox="0 0 600 500"
                  className="w-full h-auto object-cover"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Modern Indian Residential and Commercial Architecture - Realty Experts Marketing"
                >
                  <defs>
                    <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#E2E8F0" />
                      <stop offset="100%" stopColor="#F8FAFC" />
                    </linearGradient>
                    <linearGradient id="glassFacade" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#475569" />
                      <stop offset="50%" stopColor="#334155" />
                      <stop offset="100%" stopColor="#1E293B" />
                    </linearGradient>
                    <linearGradient id="towerAccent" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#64748B" />
                      <stop offset="100%" stopColor="#94A3B8" />
                    </linearGradient>
                  </defs>

                  {/* Sky */}
                  <rect width="600" height="500" fill="url(#skyGrad)" />

                  {/* Background Skyline */}
                  <polygon points="40,500 40,260 90,240 140,260 140,500" fill="#CBD5E1" opacity="0.6"/>
                  <polygon points="130,500 130,220 180,210 220,230 220,500" fill="#94A3B8" opacity="0.5"/>
                  <polygon points="420,500 420,210 470,190 520,220 520,500" fill="#CBD5E1" opacity="0.7"/>

                  {/* Modern High-Rise Tower 1 (Left) */}
                  <polygon points="120,500 120,130 250,70 250,500" fill="url(#glassFacade)" />
                  <polygon points="250,500 250,70 340,110 340,500" fill="#1E293B" />
                  {/* Louvers / Balconies */}
                  {[...Array(14)].map((_, i) => (
                    <line
                      key={`b1-${i}`}
                      x1="130"
                      y1={150 + i * 24}
                      x2="240"
                      y2={100 + i * 24}
                      stroke="#94A3B8"
                      strokeWidth="2.5"
                      opacity="0.75"
                    />
                  ))}
                  {[...Array(14)].map((_, i) => (
                    <line
                      key={`b2-${i}`}
                      x1="260"
                      y1={85 + i * 24}
                      x2="330"
                      y2={120 + i * 24}
                      stroke="#64748B"
                      strokeWidth="2.5"
                      opacity="0.85"
                    />
                  ))}

                  {/* Modern Luxury High-Rise Tower 2 (Right Landmark) */}
                  <polygon points="320,500 320,90 440,40 440,500" fill="#0F172A" />
                  <polygon points="440,500 440,40 540,80 540,500" fill="url(#glassFacade)" />
                  {[...Array(16)].map((_, i) => (
                    <line
                      key={`b3-${i}`}
                      x1="335"
                      y1={110 + i * 23}
                      x2="425"
                      y2={65 + i * 23}
                      stroke="#E2E8F0"
                      strokeWidth="2"
                      opacity="0.6"
                    />
                  ))}

                  {/* Architectural Podium / Entrance Pavilion */}
                  <polygon points="80,500 80,410 560,410 560,500" fill="#334155" opacity="0.95" />
                  <line x1="80" y1="410" x2="560" y2="410" stroke="#F1F5F9" strokeWidth="3" />

                  {/* Modern Glass Finishes */}
                  <rect x="180" y="430" width="100" height="70" fill="#94A3B8" opacity="0.4" />
                  <rect x="340" y="430" width="120" height="70" fill="#94A3B8" opacity="0.4" />

                  {/* Foreground Landscape Lines */}
                  <polygon points="0,500 0,470 600,470 600,500" fill="#0F172A" />
                </svg>

                {/* Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-gray-200 p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-semibold text-[#85888C] uppercase tracking-wider block">
                        Specialised Focus
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[#202020]">
                        High-Intent Property Buyer Acquisition
                      </span>
                    </div>
                    <span className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded text-[#202020]">
                      NCR & UP
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST & POSITIONING STATEMENT */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#85888C]">
              Commercial Positioning
            </span>
            <p className="text-lg sm:text-xl font-medium text-[#202020] leading-relaxed">
              We are not a property portal, a brokerage, or a generic advertising vendor. Realty Experts is an experienced, commercially aware real estate marketing partner operating with deep sector knowledge.
            </p>
            <div className="pt-2 text-xs text-[#85888C] flex flex-wrap justify-center gap-x-6 gap-y-2">
              <span>Parent Company: Prachar Prasar</span>
              <span>·</span>
              <span>Primary Office: Noida, Uttar Pradesh</span>
              <span>·</span>
              <span>Additional Office: Lucknow, Uttar Pradesh</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHO WE HELP (AUDIENCE SEGMENTS) */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#85888C] block mb-2">
              Audience Specialisation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202020] tracking-tight">
              Tailored Marketing Journeys for Every Stakeholder
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#4b5563]">
              Different real estate business models require fundamentally different marketing strategies. We have engineered dedicated frameworks for each segment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Developers & Builders */}
            <div className="bg-white border border-gray-200 rounded-lg p-7 sm:p-8 flex flex-col justify-between hover:border-gray-400 transition-all group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-md bg-gray-50 text-[#202020] flex items-center justify-center group-hover:bg-[#202020] group-hover:text-white transition-colors">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#202020]">
                  Real Estate Developers & Builders
                </h3>
                <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                  Residential and commercial project launches, brand positioning, Meta and Google performance advertising, interactive microsites, and CRM lead tracking.
                </p>
                <ul className="space-y-2 text-xs text-[#4b5563] pt-2 border-t border-gray-100">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#202020]" />
                    <span>Project launch & sustainment campaigns</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#202020]" />
                    <span>High-intent HNI & NRI buyer targeting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#202020]" />
                    <span>Connected CRM & site-visit measurement</span>
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <button
                  onClick={() => onNavigate('/developers-marketing')}
                  className="w-full bg-[#202020] hover:bg-black text-white py-3 px-4 rounded-md text-xs font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Discuss Your Project Marketing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 2: Channel Partners */}
            <div className="bg-white border border-gray-200 rounded-lg p-7 sm:p-8 flex flex-col justify-between hover:border-gray-400 transition-all group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-md bg-gray-50 text-[#202020] flex items-center justify-center group-hover:bg-[#202020] group-hover:text-white transition-colors">
                  <Users2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#202020]">
                  Real Estate Channel Partners
                </h3>
                <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                  Establish an independent digital brand, generate proprietary buyer inquiries, deploy automated WhatsApp workflows, and market across multiple projects.
                </p>
                <ul className="space-y-2 text-xs text-[#4b5563] pt-2 border-t border-gray-100">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#202020]" />
                    <span>Proprietary lead generation systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#202020]" />
                    <span>Channel partner brand positioning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#202020]" />
                    <span>Automated WhatsApp & CRM routing</span>
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <button
                  onClick={() => onNavigate('/channel-partner-marketing')}
                  className="w-full bg-[#202020] hover:bg-black text-white py-3 px-4 rounded-md text-xs font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Build Your Channel Partner Brand</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 3: Real Estate Associates */}
            <div className="bg-white border border-gray-200 rounded-lg p-7 sm:p-8 flex flex-col justify-between hover:border-gray-400 transition-all group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-md bg-gray-50 text-[#202020] flex items-center justify-center group-hover:bg-[#202020] group-hover:text-white transition-colors">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#202020]">
                  Real Estate Associates & Consultants
                </h3>
                <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                  Personal branding, micro-market walkthrough video production, local SEO, Google Business Profile management, and qualified enquiry capture.
                </p>
                <ul className="space-y-2 text-xs text-[#4b5563] pt-2 border-t border-gray-100">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#202020]" />
                    <span>Personal advisor digital positioning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#202020]" />
                    <span>Micro-market video walkthrough tours</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#202020]" />
                    <span>Local Google Search prominence</span>
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <button
                  onClick={() => onNavigate('/associates-marketing')}
                  className="w-full bg-[#202020] hover:bg-black text-white py-3 px-4 rounded-md text-xs font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Grow Your Real Estate Business</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES OVERVIEW */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#85888C] block mb-2">
                Comprehensive Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202020] tracking-tight">
                Specialised Real Estate Marketing Services
              </h2>
              <p className="mt-2 text-sm text-[#4b5563] max-w-2xl">
                Every service is built specifically for the real estate sales cycle, with explicit qualification and commercial accountability.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/services')}
              className="inline-flex items-center space-x-2 text-xs font-semibold text-[#202020] hover:text-black hover:underline"
            >
              <span>View All 10 Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col justify-between hover:border-gray-400 transition-all hover:shadow-xs"
              >
                <div>
                  <h3 className="text-base font-bold text-[#202020] mb-2">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>
                  <div className="space-y-1.5 pt-3 border-t border-gray-100">
                    <span className="text-[11px] font-semibold uppercase text-[#85888C] block">
                      Solves Problem:
                    </span>
                    <p className="text-xs text-[#202020] font-medium">
                      {service.businessProblems[0]}
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => onNavigate(`/services/${service.slug}`)}
                    className="text-xs font-bold text-[#202020] hover:text-black flex items-center space-x-1"
                  >
                    <span>Learn More & Scope</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('/services')}
              className="bg-[#202020] hover:bg-black text-white px-6 py-3 rounded-md text-xs font-semibold transition-colors inline-flex items-center space-x-2"
            >
              <span>Explore Full Service Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. METHODOLOGY SECTION */}
      <MethodologySection />

      {/* 6. WHY SPECIALISED MARKETING MATTERS */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#85888C] block">
                The Real Estate Reality
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202020] tracking-tight">
                Why Generic Marketing Fails in Real Estate
              </h2>
              <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed">
                Buying a home or commercial unit is often the largest financial commitment in a client’s lifetime. A generic agency running basic lead ads without understanding RERA guidelines, micro-market pricing, or inventory absorption will invariably burn marketing budgets on non-working numbers.
              </p>
              <div className="space-y-3 pt-2">
                <div className="p-4 bg-gray-50 border border-gray-200/80 rounded-md">
                  <h4 className="text-sm font-bold text-[#202020] mb-1">High-Ticket Purchase Psychology</h4>
                  <p className="text-xs text-[#4b5563]">Property decisions require trust, spatial visualization, and location proof—not generic discount coupons.</p>
                </div>
                <div className="p-4 bg-gray-50 border border-gray-200/80 rounded-md">
                  <h4 className="text-sm font-bold text-[#202020] mb-1">RERA Compliance & Credibility</h4>
                  <p className="text-xs text-[#4b5563]">Every digital asset must respect regulatory standards, project registrations, and truthful specifications.</p>
                </div>
                <div className="p-4 bg-gray-50 border border-gray-200/80 rounded-md">
                  <h4 className="text-sm font-bold text-[#202020] mb-1">Connected Sales Hand-off</h4>
                  <p className="text-xs text-[#4b5563]">Marketing does not conclude at lead generation; it must empower your sales floor to convert inquiries into site visits.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#141414] text-white p-8 sm:p-10 rounded-xl space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#85888C] font-semibold block">
                The Realty Experts Distinction
              </span>
              <h3 className="text-2xl font-bold tracking-tight">
                “Strategically Marketed, Scientifically Sold!”
              </h3>
              <p className="text-xs sm:text-sm text-[#A8ABB0] leading-relaxed">
                We combine deep sector domain experience with performance rigor. Our teams in Noida and Lucknow track real metrics: Cost Per Qualified Lead (CPQL), visit show-up ratios, and inventory clearance velocity.
              </p>
              <div className="pt-4 border-t border-[#262626] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#85888C] block">Direct Consultation</span>
                  <span className="text-sm font-bold text-white">+91 96822 94324</span>
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="bg-white hover:bg-gray-100 text-[#141414] px-4 py-2 rounded text-xs font-semibold transition-colors"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SELECTED WORK / PORTFOLIO SECTION */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#85888C] block mb-2">
              Verified Work
            </span>
            <h2 className="text-3xl font-extrabold text-[#202020] tracking-tight">
              Case Studies & Portfolio
            </h2>
            <p className="mt-3 text-sm text-[#4b5563]">
              We adhere strictly to client confidentiality and verified marketing outcomes.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 sm:p-12 text-center max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-[#202020] mb-2">
              Portfolio Being Updated
            </h3>
            <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed mb-6">
              In accordance with our client privacy commitments and non-disclosure agreements with real estate developers and channel partners, detailed case study dossiers are shared during private strategy consultations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto bg-[#202020] hover:bg-black text-white px-5 py-2.5 rounded-md text-xs font-semibold transition-colors"
              >
                Request Private Capability Deck
              </button>
              <button
                onClick={() => onNavigate('/work')}
                className="w-full sm:w-auto border border-gray-300 text-[#202020] px-5 py-2.5 rounded-md text-xs font-semibold hover:bg-gray-50 transition-colors"
              >
                View Case Study Framework
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. EDUCATIONAL INSIGHTS & RESOURCES */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#85888C] block mb-2">
                Knowledge & Strategy
              </span>
              <h2 className="text-3xl font-extrabold text-[#202020] tracking-tight">
                Real Estate Marketing Insights
              </h2>
              <p className="mt-1 text-sm text-[#4b5563]">
                Practical analysis, campaign architectures, and tactical playbooks for the Indian property market.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/insights')}
              className="text-xs font-semibold text-[#202020] hover:underline flex items-center space-x-1"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <div
                key={post.slug}
                onClick={() => onNavigate(`/insights/${post.slug}`)}
                className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col justify-between hover:border-gray-400 transition-all cursor-pointer group"
              >
                <div>
                  <div className="flex items-center space-x-2 text-xs text-[#85888C] mb-3">
                    <span>{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#202020] group-hover:text-black mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-[#4b5563] leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#202020]">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <FaqAccordion items={homeFaqs} />

      {/* 10. LEAD-GENERATION CONSULTATION SECTION */}
      <section className="py-20 bg-gray-50 border-t border-gray-100" id="consultation-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#85888C] block">
                Start a Conversation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202020] tracking-tight">
                Discuss Your Real Estate Marketing Goals
              </h2>
              <p className="text-sm text-[#4b5563] leading-relaxed">
                Whether you are launching a new residential tower in Noida, marketing commercial suites in Lucknow, or building your channel partner brand, our specialists are ready to help.
              </p>

              <div className="space-y-4 pt-2 text-xs sm:text-sm text-[#4b5563]">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#202020] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">1</div>
                  <p><strong>Initial Commercial Review:</strong> We analyze your micro-market, target pricing, and current lead flow.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#202020] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">2</div>
                  <p><strong>Strategic Roadmap:</strong> You receive a customized channel allocation plan and qualification architecture.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#202020] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">3</div>
                  <p><strong>Transparent Execution:</strong> Zero guesswork, disciplined reporting, and direct sales team collaboration.</p>
                </div>
              </div>

              <div className="pt-4 p-5 bg-white border border-gray-200 rounded-lg space-y-2 text-xs">
                <span className="font-semibold text-[#202020] block">Prefer direct contact?</span>
                <p className="text-[#4b5563]">Call us at <a href="tel:+919682294324" className="text-[#202020] font-semibold hover:underline">+91 96822 94324</a> or email <a href="mailto:connect@realtyexperts.online" className="text-[#202020] font-semibold hover:underline">connect@realtyexperts.online</a>.</p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <LeadForm
                formType="general"
                title="Book a Strategy Consultation"
                subtitle="Fill in your project or business requirement below to receive actionable real estate marketing guidance."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
