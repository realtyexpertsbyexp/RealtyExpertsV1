import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface StickyContactBarProps {
  onOpenConsultation: () => void;
  pageContext?: string;
}

export const StickyContactBar: React.FC<StickyContactBarProps> = ({
  onOpenConsultation,
  pageContext = 'general'
}) => {
  const getWhatsAppMessage = () => {
    if (pageContext === 'developer') {
      return 'Hello Realty Experts, I would like to discuss marketing for our real estate project.';
    }
    if (pageContext === 'channel_partner') {
      return 'Hello Realty Experts, I am interested in digital marketing for my channel partner business.';
    }
    return 'Hello Realty Experts, I would like to discuss digital marketing for my real estate business.';
  };

  const waUrl = `https://wa.me/919682294324?text=${encodeURIComponent(getWhatsAppMessage())}`;

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 px-3 py-2 shadow-lg safe-bottom">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto text-center">
        {/* Call Link */}
        <a
          href="tel:+919682294324"
          onClick={() => trackEvent('phone_click', { location: 'mobile_sticky_bar' })}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-md bg-gray-50 hover:bg-gray-100 text-[#202020] transition-colors"
        >
          <Phone className="w-4 h-4 mb-0.5 text-[#202020]" />
          <span className="text-[11px] font-semibold">Call Direct</span>
        </a>

        {/* WhatsApp Link */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('whatsapp_click', { location: 'mobile_sticky_bar' })}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-md bg-gray-50 hover:bg-gray-100 text-[#202020] transition-colors"
        >
          <MessageSquare className="w-4 h-4 mb-0.5 text-[#202020]" />
          <span className="text-[11px] font-semibold">WhatsApp</span>
        </a>

        {/* Consultation Button */}
        <button
          onClick={() => {
            trackEvent('consultation_cta_click', { location: 'mobile_sticky_bar' });
            onOpenConsultation();
          }}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-md bg-[#202020] text-white hover:bg-black transition-colors"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-semibold">Consultation</span>
        </button>
      </div>
    </div>
  );
};
