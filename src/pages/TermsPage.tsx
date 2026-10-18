import React from 'react';

interface TermsPageProps {
  onNavigate: (path: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-100 pb-8 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#85888C] block mb-2">
            Commercial Terms
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#202020] tracking-tight">
            Terms & Conditions
          </h1>
          <p className="mt-2 text-xs text-[#85888C]">
            Last updated: October 2026 · Realty Experts
          </p>
        </div>

        <div className="p-4 bg-amber-50 border border-amber-200 rounded-md text-xs text-amber-900 mb-8">
          <strong>Notice:</strong> This terms agreement governs general website usage and initial enquiry requests. Specific marketing engagements, service scopes, and media budgets are governed by executed master services agreements (MSAs).
        </div>

        <div className="space-y-8 text-xs sm:text-sm text-[#4b5563] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#202020]">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Realty Experts website (https://www.realtyexperts.online), you agree to comply with and be bound by these Terms and Conditions. If you disagree with any portion of these terms, please do not use this site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#202020]">2. Nature of Services</h2>
            <p>
              Realty Experts is a digital marketing, performance advertising, and strategic consulting agency specializing in the real estate sector. We are not a registered real estate broker, property aggregator, or real estate developer. Submitting an enquiry does not constitute an engagement until an authorized service contract is formalized.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#202020]">3. Intellectual Property</h2>
            <p>
              All original content, visual assets, text copy, frameworks, methodology descriptions, and brand logos on this website are the intellectual property of Realty Experts and Prachar Prasar. Unauthorized duplication, redistribution, or commercial reproduction is prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#202020]">4. No Guaranteed Sales or Performance Warranties</h2>
            <p>
              While we engineer high-converting campaigns and apply disciplined methodology (“Strategically Marketed, Scientifically Sold!”), real estate transactions depend on multiple external factors including prevailing macroeconomic interest rates, micro-market pricing, developer construction velocity, and the on-site closing capabilities of the developer’s sales team. Realty Experts does not guarantee a specific number of property bookings or fixed cost-per-lead figures.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#202020]">5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Realty Experts shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your access to or inability to use this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#202020]">6. Governing Law & Jurisdiction</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in Uttar Pradesh, India.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#202020]">7. Contact Information</h2>
            <p>
              For legal inquiries concerning these terms, please contact:
            </p>
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-md text-xs space-y-1">
              <div><strong>Email:</strong> connect@realtyexperts.online</div>
              <div><strong>Telephone:</strong> +91 96822 94324</div>
              <div><strong>Offices:</strong> Noida and Lucknow, Uttar Pradesh, India</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
