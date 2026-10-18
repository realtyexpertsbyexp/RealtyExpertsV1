import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  title?: string;
  subtitle?: string;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  items,
  title = 'Frequently Asked Questions',
  subtitle = 'Clear answers regarding our real estate digital marketing processes, deliverables, and campaign governance.'
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#85888C] block mb-2">
            Clarity & Transparency
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#202020] tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-sm text-[#4b5563]">
              {subtitle}
            </p>
          )}
        </div>

        <div className="space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between bg-white hover:bg-gray-50/80 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-[#202020] pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#85888C] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#202020]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#4b5563] leading-relaxed border-t border-gray-100 bg-gray-50/40">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
