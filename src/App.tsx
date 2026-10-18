import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { StickyContactBar } from './components/StickyContactBar';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { DevelopersPage } from './pages/DevelopersPage';
import { ChannelPartnersPage } from './pages/ChannelPartnersPage';
import { AssociatesPage } from './pages/AssociatesPage';
import { ServicesIndexPage } from './pages/ServicesIndexPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { WorkPage } from './pages/WorkPage';
import { InsightsPage } from './pages/InsightsPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedServiceForConsultation, setSelectedServiceForConsultation] = useState<string | undefined>(undefined);

  // Listen to browser popstate (back/forward navigation)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title and scroll to top on path change
  useEffect(() => {
    window.scrollTo(0, 0);

    const baseTitle = 'Realty Experts | Real Estate Digital Marketing Agency';
    let pageTitle = baseTitle;

    if (currentPath === '/') {
      pageTitle = 'Realty Experts | Real Estate Digital Marketing Agency Noida & Lucknow';
    } else if (currentPath === '/about') {
      pageTitle = 'About Us | Realty Experts - Real Estate Marketing Agency';
    } else if (currentPath === '/developers-marketing') {
      pageTitle = 'Real Estate Developers & Builders Marketing | Realty Experts';
    } else if (currentPath === '/channel-partner-marketing') {
      pageTitle = 'Channel Partner Marketing & Lead Generation | Realty Experts';
    } else if (currentPath === '/associates-marketing') {
      pageTitle = 'Real Estate Associates & Property Consultants Marketing | Realty Experts';
    } else if (currentPath === '/services') {
      pageTitle = 'Our 10 Core Services | Realty Experts Real Estate Marketing';
    } else if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '');
      pageTitle = `${slug.replace(/-/g, ' ').toUpperCase()} | Realty Experts Service Scope`;
    } else if (currentPath === '/work') {
      pageTitle = 'Case Studies & Selected Work | Realty Experts';
    } else if (currentPath === '/insights') {
      pageTitle = 'Real Estate Marketing Insights & Strategy Blog | Realty Experts';
    } else if (currentPath.startsWith('/insights/')) {
      pageTitle = 'Marketing Insight Analysis | Realty Experts';
    } else if (currentPath === '/contact') {
      pageTitle = 'Contact Our Offices | Realty Experts Noida & Lucknow';
    } else if (currentPath === '/privacy-policy') {
      pageTitle = 'Privacy Policy | Realty Experts';
    } else if (currentPath === '/terms-and-conditions') {
      pageTitle = 'Terms & Conditions | Realty Experts';
    }

    document.title = pageTitle;
  }, [currentPath]);

  const navigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    }
  };

  const handleOpenConsultation = (serviceName?: string) => {
    setSelectedServiceForConsultation(serviceName);
    setIsConsultationOpen(true);
  };

  // Determine page context for mobile WhatsApp helper
  const pageContext =
    currentPath === '/developers-marketing' ? 'developer' :
    currentPath === '/channel-partner-marketing' ? 'channel_partner' :
    currentPath === '/associates-marketing' ? 'associate' : 'general';

  // Render view based on path
  const renderCurrentPage = () => {
    // Normalise trailing slashes
    const path = currentPath.length > 1 && currentPath.endsWith('/')
      ? currentPath.slice(0, -1)
      : currentPath;

    if (path === '') return <HomePage onNavigate={navigate} onOpenConsultation={() => handleOpenConsultation()} />;
    if (path === '/') return <HomePage onNavigate={navigate} onOpenConsultation={() => handleOpenConsultation()} />;
    if (path === '/about') return <AboutPage onNavigate={navigate} onOpenConsultation={() => handleOpenConsultation()} />;
    if (path === '/developers-marketing') return <DevelopersPage onNavigate={navigate} onOpenConsultation={() => handleOpenConsultation()} />;
    if (path === '/channel-partner-marketing') return <ChannelPartnersPage onNavigate={navigate} onOpenConsultation={() => handleOpenConsultation()} />;
    if (path === '/associates-marketing') return <AssociatesPage onNavigate={navigate} onOpenConsultation={() => handleOpenConsultation()} />;
    if (path === '/services') return <ServicesIndexPage onNavigate={navigate} onOpenConsultation={() => handleOpenConsultation()} />;

    if (path.startsWith('/services/')) {
      const slug = path.replace('/services/', '');
      return <ServiceDetailPage slug={slug} onNavigate={navigate} onOpenConsultation={() => handleOpenConsultation(slug)} />;
    }

    if (path === '/work') return <WorkPage onNavigate={navigate} onOpenConsultation={() => handleOpenConsultation()} />;
    if (path === '/insights') return <InsightsPage onNavigate={navigate} onOpenConsultation={() => handleOpenConsultation()} />;

    if (path.startsWith('/insights/')) {
      const slug = path.replace('/insights/', '');
      return <ArticleDetailPage slug={slug} onNavigate={navigate} onOpenConsultation={() => handleOpenConsultation()} />;
    }

    if (path === '/contact') return <ContactPage onNavigate={navigate} onOpenConsultation={() => handleOpenConsultation()} />;
    if (path === '/privacy-policy') return <PrivacyPage onNavigate={navigate} />;
    if (path === '/terms-and-conditions') return <TermsPage onNavigate={navigate} />;

    return <NotFoundPage onNavigate={navigate} onOpenConsultation={() => handleOpenConsultation()} />;
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-[#202020] bg-white selection:bg-[#202020] selection:text-white">
      {/* Primary Site Header */}
      <Header
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Page Content */}
      <main className="flex-1 pb-14 lg:pb-0">
        {renderCurrentPage()}
      </main>

      {/* Primary Site Footer */}
      <Footer
        onNavigate={navigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Accessible Consultation Popup Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={selectedServiceForConsultation}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <StickyContactBar
        onOpenConsultation={() => handleOpenConsultation()}
        pageContext={pageContext}
      />
    </div>
  );
}
