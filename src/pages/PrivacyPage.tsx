import React from 'react';

interface PrivacyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-100 pb-8 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#85888C] block mb-2">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#202020] tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs text-[#85888C]">
            Last updated: October 2026 · Realty Experts (A Prachar Prasar Initiative)
          </p>
        </div>

        <div className="p-4 bg-amber-50 border border-amber-200 rounded-md text-xs text-amber-900 mb-8">
          <strong>Notice:</strong> This privacy policy template is prepared for B2B commercial enquiry handling and should be reviewed by qualified legal counsel prior to formal certification.
        </div>

        <div className="space-y-8 text-xs sm:text-sm text-[#4b5563] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#202020]">1. Introduction</h2>
            <p>
              Realty Experts ("we", "us", or "our"), an initiative of Prachar Prasar with offices in Noida and Lucknow, Uttar Pradesh, respects the privacy of our website visitors and business clients. This Privacy Policy describes how we collect, store, utilize, and protect personal and commercial information submitted through https://www.realtyexperts.online.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#202020]">2. Information We Collect</h2>
            <p>We collect information voluntarily submitted when you request a marketing consultation, project evaluation, or submit an enquiry:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Contact Information:</strong> Full name, business email address, and phone number.</li>
              <li><strong>Commercial Details:</strong> Company/Developer name, project location, unit type, and marketing challenges.</li>
              <li><strong>Technical Data:</strong> IP address, device type, browser specifications, and referral source through server logs and analytics cookies.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#202020]">3. Purpose of Processing</h2>
            <p>Information gathered is processed solely for legitimate commercial purposes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>To evaluate and respond to your real estate marketing consultation request.</li>
              <li>To provide tailored proposals, project marketing assessments, and service schedules.</li>
              <li>To maintain internal lead records and ensure speed-to-lead service quality.</li>
              <li>To detect security anomalies and protect our web services from malicious abuse.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#202020]">4. Data Sharing & Third-Party Processors</h2>
            <p>
              We do not sell, rent, or trade your contact information to external property brokers, third-party lead aggregators, or unauthorized third parties. We may transmit information to authorized service infrastructure (such as transactional email service providers and secure cloud servers) strictly under confidentiality terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#202020]">5. Cookies & Analytics Practices</h2>
            <p>
              Our website may utilize standard first-party and third-party cookies (e.g. Google Analytics) to analyze traffic patterns and optimize site navigation. These services do not receive identifiable personal data such as names, phone numbers, or email addresses.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#202020]">6. Data Retention & Security</h2>
            <p>
              Lead records are retained only as long as necessary to fulfill commercial consultation objectives or meet statutory compliance mandates. We enforce appropriate technical safeguards, including HTTPS encryption, server firewalls, and rate-limiting controls.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#202020]">7. Your Rights & Privacy Inquiries</h2>
            <p>
              You have the right to request access to, rectification of, or deletion of your submitted personal details. To exercise these rights, please contact our privacy compliance desk:
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
