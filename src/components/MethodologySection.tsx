import React from 'react';
import { Compass, Target, PenTool, Rocket, BarChart3, RefreshCw } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      icon: Compass,
      subtitle: 'Understanding Reality & Micro-Market',
      description: 'We analyze your project specifications, location advantages, competitor positioning, unit inventory tiers, and buyer demographics before planning a single rupee of ad spend.'
    },
    {
      number: '02',
      title: 'Strategise',
      icon: Target,
      subtitle: 'Architecting the Conversion Journey',
      description: 'Formulating high-converting messaging angles, channel allocation (Meta vs Google vs Local Search), budget models, and qualifying criteria tailored to real estate buyers.'
    },
    {
      number: '03',
      title: 'Create',
      icon: PenTool,
      subtitle: 'High-Fidelity Collateral & Assets',
      description: 'Engineering ultra-fast microsites, interactive unit selectors, high-converting ad visuals, walkthrough video scripts, and RERA-compliant digital sales collateral.'
    },
    {
      number: '04',
      title: 'Activate',
      icon: Rocket,
      subtitle: 'Omnichannel Precision Launch',
      description: 'Coordinated deployment of performance advertising campaigns, local search visibility, and instantaneous lead capture mechanisms linked to your sales floor.'
    },
    {
      number: '05',
      title: 'Measure',
      icon: BarChart3,
      subtitle: 'Downstream Lead Quality & Site Visits',
      description: 'We track beyond superficial form submits. We measure Cost Per Qualified Lead (CPQL), speed-to-lead response times, and physical sales gallery visit show-up rates.'
    },
    {
      number: '06',
      title: 'Optimise',
      icon: RefreshCw,
      subtitle: 'Data-Driven Absorption Sprints',
      description: 'Continuous creative rotation to eliminate ad fatigue, negative keyword pruning, and sales team feedback loops to accelerate unit absorption.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#85888C] block mb-2">
            The Realty Experts Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202020] tracking-tight">
            Strategically Marketed, Scientifically Sold!
          </h2>
          <p className="mt-3 text-base text-[#4b5563] leading-relaxed">
            Real estate marketing is neither guesswork nor generic template distribution. We apply a disciplined 6-stage commercial framework designed specifically for high-consideration property transactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white border border-gray-200/80 rounded-lg p-6 sm:p-7 relative transition-all duration-200 hover:border-gray-400 hover:shadow-xs group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-[#85888C]/40 group-hover:text-[#202020] transition-colors">
                    {step.number}
                  </span>
                  <div className="p-2.5 rounded-md bg-gray-50 text-[#202020] group-hover:bg-[#202020] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#202020] mb-1">
                  {step.title}
                </h3>
                <span className="text-xs font-semibold text-[#85888C] block mb-3">
                  {step.subtitle}
                </span>

                <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 bg-white border border-gray-200 rounded-lg text-center max-w-2xl mx-auto text-xs text-[#85888C]">
          <span className="font-semibold text-[#202020]">Working Principle:</span> Our methodology emphasizes verified lead qualification and sales collaboration over unverified claim generation or arbitrary lead volume.
        </div>
      </div>
    </section>
  );
};
