import React from 'react';
import { Shield, Target, Compass, Award, Building, MapPin, ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Header */}
      <section className="bg-white py-16 sm:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#85888C] block">
              About Realty Experts
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#202020] tracking-tight leading-tight">
              Specialised Real Estate Marketing for Sustainable Growth
            </h1>
            <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed">
              We are a dedicated digital marketing agency built exclusively around the commercial realities, regulatory landscape, and buyer journeys of the Indian real estate sector.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-gray-100 text-xs font-semibold text-[#202020] rounded-sm">
                A Prachar Prasar Initiative
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story & Philosophy */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6 text-[#4b5563] text-sm sm:text-base leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#202020] tracking-tight">
                Our Brand Story
              </h2>
              <p>
                The Indian real estate industry is undergoing profound structural evolution. Buyers today are research-intensive, RERA regulations mandate strict transparency, and traditional advertising methods—such as mass newspaper inserts and roadside hoardings—yield diminishing commercial returns.
              </p>
              <p>
                Recognizing that real estate developers and channel partners were underserved by generalist marketing agencies that treat high-value property launches like fast-moving consumer goods, <strong>Realty Experts</strong> was established as a dedicated specialized practice under <strong>Prachar Prasar</strong>.
              </p>
              <p>
                Our operating philosophy is encapsulated in our brand promise:
              </p>
              <div className="p-5 bg-gray-50 border-l-3 border-[#202020] text-base sm:text-lg font-bold text-[#202020]">
                “Strategically Marketed, Scientifically Sold!”
              </div>
              <p>
                This means every campaign we deploy is rooted in deep micro-market analysis, precise audience qualification, clean technical engineering, and continuous data-informed optimization.
              </p>
            </div>

            <div className="lg:col-span-5 bg-gray-50 border border-gray-200 rounded-xl p-8 space-y-6">
              <h3 className="text-xl font-bold text-[#202020]">
                Corporate Profile
              </h3>
              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <span className="text-[#85888C] font-semibold block">Brand Name:</span>
                  <span className="font-bold text-[#202020]">Realty Experts</span>
                </div>
                <div>
                  <span className="text-[#85888C] font-semibold block">Parent Organization:</span>
                  <span className="font-bold text-[#202020]">Prachar Prasar</span>
                </div>
                <div>
                  <span className="text-[#85888C] font-semibold block">Primary Market:</span>
                  <span className="font-medium text-[#202020]">India (National Capital Region & Uttar Pradesh)</span>
                </div>
                <div>
                  <span className="text-[#85888C] font-semibold block">Official Website:</span>
                  <span className="font-medium text-[#202020]">https://www.realtyexperts.online</span>
                </div>
                <div>
                  <span className="text-[#85888C] font-semibold block">Official Telephone:</span>
                  <span className="font-medium text-[#202020]">+91 96822 94324</span>
                </div>
                <div>
                  <span className="text-[#85888C] font-semibold block">Official Inquiries:</span>
                  <span className="font-medium text-[#202020]">connect@realtyexperts.online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Working Principles */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-7 space-y-3">
              <div className="p-2.5 bg-gray-50 w-fit rounded-md text-[#202020]">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#202020]">Our Mission</h3>
              <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                To empower real estate developers, channel partners, and property consultants with high-intent digital marketing systems that generate genuine buyer inquiries and accelerate inventory sales velocity.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-7 space-y-3">
              <div className="p-2.5 bg-gray-50 w-fit rounded-md text-[#202020]">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#202020]">Our Vision</h3>
              <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                To be the most respected and commercially trusted real estate digital marketing advisory across India, recognized for integrity, scientific measurement, and transparent client partnerships.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-7 space-y-3">
              <div className="p-2.5 bg-gray-50 w-fit rounded-md text-[#202020]">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#202020]">Working Principles</h3>
              <ul className="text-xs sm:text-sm text-[#4b5563] space-y-1.5 list-disc pl-4">
                <li>Quality over superficial lead volume</li>
                <li>RERA compliance and truthful messaging</li>
                <li>Rigorous speed-to-lead and CRM alignment</li>
                <li>Commercial accountability to sales results</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#85888C] block mb-2">
              Presence & Operations
            </span>
            <h2 className="text-3xl font-extrabold text-[#202020]">
              Our Office Locations
            </h2>
            <p className="mt-2 text-sm text-[#4b5563]">
              Operating from key real estate growth epicenters in Uttar Pradesh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Noida Office */}
            <div className="border border-gray-200 rounded-lg p-8 bg-gray-50 space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-[#202020]" />
                <h3 className="text-xl font-bold text-[#202020]">Noida Office (Primary)</h3>
              </div>
              <p className="text-xs uppercase font-semibold text-[#85888C]">
                Uttar Pradesh, India
              </p>
              <p className="text-sm text-[#4b5563] leading-relaxed">
                Our primary operational hub overseeing digital performance campaigns, creative direction, and developer relationships across Noida, Greater Noida, and the NCR.
              </p>
              <div className="pt-2 text-xs text-[#202020]">
                <strong>Direct Contact:</strong> +91 96822 94324
              </div>
            </div>

            {/* Lucknow Office */}
            <div className="border border-gray-200 rounded-lg p-8 bg-gray-50 space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-[#202020]" />
                <h3 className="text-xl font-bold text-[#202020]">Lucknow Office (Additional)</h3>
              </div>
              <p className="text-xs uppercase font-semibold text-[#85888C]">
                Uttar Pradesh, India
              </p>
              <p className="text-sm text-[#4b5563] leading-relaxed">
                Dedicated regional office managing channel partner enablement, local SEO, and project campaigns across Lucknow and emerging Tier-2 investment corridors.
              </p>
              <div className="pt-2 text-xs text-[#202020]">
                <strong>Direct Contact:</strong> connect@realtyexperts.online
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#141414] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#85888C] font-semibold block">
            Start a Collaboration
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Discuss Your Business or Project Requirement
          </h2>
          <p className="text-sm sm:text-base text-[#A8ABB0] max-w-2xl mx-auto leading-relaxed">
            Connect with our strategy team to evaluate your current marketing performance and identify high-conversion growth opportunities.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => {
                trackEvent('consultation_cta_click', { location: 'about_cta' });
                onOpenConsultation();
              }}
              className="bg-white hover:bg-gray-100 text-[#141414] px-7 py-3.5 rounded-md text-sm font-semibold transition-colors flex items-center space-x-2"
            >
              <span>Book a Strategy Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              className="border border-[#3b3b3b] text-white hover:bg-[#262626] px-6 py-3.5 rounded-md text-sm font-medium transition-colors"
            >
              Contact Our Offices
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
