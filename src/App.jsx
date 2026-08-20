import { StoreProvider } from './context/StoreContext';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AtlasPortfolioPhilosophyExtension from './pages/AtlasPortfolioPhilosophyExtension';
import SugiDevAboutPage from './pages/SugiDevAboutPage';
import SugiDevLandingPageIntegrated from './pages/SugiDevLandingPageIntegrated';
import SugiDevPortfolioHomeFinal from './pages/SugiDevPortfolioHomeFinal';
import ServicesSugiDev from './pages/ServicesSugiDev';
import SugiDevWorkFinal from './pages/SugiDevWorkFinal';
import SugidevHeroLanding from './pages/SugidevHeroLanding';
import ButtonShowcaseComponentReference from './pages/ButtonShowcaseComponentReference';
import SugidevServicesProjects from './pages/SugidevServicesProjects';
import InsightsCleanBackground from './pages/InsightsCleanBackground';
import BadgeShowcaseComponentReference from './pages/BadgeShowcaseComponentReference';
import DevosTableComponentsReference from './pages/DevosTableComponentsReference';
import ContactCleanBackground from './pages/ContactCleanBackground';
import SugidevMarqueeAboutSection from './pages/SugidevMarqueeAboutSection';
import SugidevShowcaseExploreSection from './pages/SugidevShowcaseExploreSection';
import SugidevCollectionFooterSection from './pages/SugidevCollectionFooterSection';
import ProjectInquiryCleanBackground from './pages/ProjectInquiryCleanBackground';
import DevosEngineeringDashboard from './pages/DevosEngineeringDashboard';

export default function App() {
  return (
    <BrowserRouter>
    <StoreProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
        {/* Navigation Header for Multi-Screen Stitch Pages */}
        <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="font-bold text-sm tracking-wide text-white capitalize">liquid-glass-portfolio</span>
          </div>
          <nav className="flex items-center space-x-2 overflow-x-auto py-1">
            <Link to="/" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Atlas Portfolio Philosophy Extension</Link>
            <Link to="/sugi.dev-about-page" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Sugi.Dev About Page</Link>
            <Link to="/sugi.dev-landing-page-integrated" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Sugi.Dev Landing Page Integrated</Link>
            <Link to="/sugi.dev-portfolio-home-final" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Sugi.Dev Portfolio Home Final</Link>
            <Link to="/services-sugi.dev" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Services Sugi.Dev</Link>
            <Link to="/sugi.dev-work-final" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Sugi.Dev Work Final</Link>
            <Link to="/sugidev-hero-landing" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Sugidev Hero Landing</Link>
            <Link to="/button-showcase-component-reference" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Button Showcase Component Reference</Link>
            <Link to="/sugidev-services-projects" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Sugidev Services Projects</Link>
            <Link to="/insights-clean-background" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Insights Clean Background</Link>
            <Link to="/badge-showcase-component-reference" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Badge Showcase Component Reference</Link>
            <Link to="/devos-table-components-reference" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Devos Table Components Reference</Link>
            <Link to="/contact-clean-background" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Contact Clean Background</Link>
            <Link to="/sugidev-marquee-about-section" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Sugidev Marquee About Section</Link>
            <Link to="/sugidev-showcase-explore-section" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Sugidev Showcase Explore Section</Link>
            <Link to="/sugidev-collection-footer-section" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Sugidev Collection Footer Section</Link>
            <Link to="/project-inquiry-clean-background" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Project Inquiry Clean Background</Link>
            <Link to="/devos-engineering-dashboard" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Devos Engineering Dashboard</Link>
          </nav>
        </header>

        {/* Dynamic Routed Pages */}
        <main className="flex-1 w-full">
          <Routes>
          <Route path="/" element={<AtlasPortfolioPhilosophyExtension />} />
          <Route path="/sugi.dev-about-page" element={<SugiDevAboutPage />} />
          <Route path="/sugi.dev-landing-page-integrated" element={<SugiDevLandingPageIntegrated />} />
          <Route path="/sugi.dev-portfolio-home-final" element={<SugiDevPortfolioHomeFinal />} />
          <Route path="/services-sugi.dev" element={<ServicesSugiDev />} />
          <Route path="/sugi.dev-work-final" element={<SugiDevWorkFinal />} />
          <Route path="/sugidev-hero-landing" element={<SugidevHeroLanding />} />
          <Route path="/button-showcase-component-reference" element={<ButtonShowcaseComponentReference />} />
          <Route path="/sugidev-services-projects" element={<SugidevServicesProjects />} />
          <Route path="/insights-clean-background" element={<InsightsCleanBackground />} />
          <Route path="/badge-showcase-component-reference" element={<BadgeShowcaseComponentReference />} />
          <Route path="/devos-table-components-reference" element={<DevosTableComponentsReference />} />
          <Route path="/contact-clean-background" element={<ContactCleanBackground />} />
          <Route path="/sugidev-marquee-about-section" element={<SugidevMarqueeAboutSection />} />
          <Route path="/sugidev-showcase-explore-section" element={<SugidevShowcaseExploreSection />} />
          <Route path="/sugidev-collection-footer-section" element={<SugidevCollectionFooterSection />} />
          <Route path="/project-inquiry-clean-background" element={<ProjectInquiryCleanBackground />} />
          <Route path="/devos-engineering-dashboard" element={<DevosEngineeringDashboard />} />
          <Route path="*" element={<AtlasPortfolioPhilosophyExtension />} />
          </Routes>
        </main>
      </div>
        </StoreProvider>
</BrowserRouter>
  );
}
