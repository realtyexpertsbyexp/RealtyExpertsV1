import React from 'react';
import { Home, Compass, PhoneCall, ArrowRight } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white border border-gray-200 rounded-xl p-8 sm:p-10 text-center shadow-xs space-y-6">
        <div className="inline-block p-3 bg-gray-100 rounded-full text-[#202020]">
          <Compass className="w-8 h-8" />
        </div>

        <div>
          <span className="text-4xl sm:text-5xl font-black text-[#202020] block">404</span>
          <h1 className="text-lg sm:text-xl font-bold text-[#202020] mt-1">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-[#4b5563] mt-2 leading-relaxed">
            The page you are looking for does not exist, has been moved, or the URL was entered incorrectly.
          </p>
        </div>

        <div className="space-y-2.5 pt-2">
          <button
            onClick={() => onNavigate('/')}
            className="w-full bg-[#202020] hover:bg-black text-white py-3 rounded-md text-xs font-semibold transition-colors flex items-center justify-center space-x-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>

          <button
            onClick={() => onNavigate('/services')}
            className="w-full border border-gray-300 hover:bg-gray-50 text-[#202020] py-2.5 rounded-md text-xs font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <span>Explore All 10 Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-4 border-t border-gray-100 text-xs text-[#85888C]">
          <span>Need immediate assistance?</span>{' '}
          <a href="tel:+919682294324" className="text-[#202020] font-semibold hover:underline">
            Call +91 96822 94324
          </a>
        </div>
      </div>
    </div>
  );
};
