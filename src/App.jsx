import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import WorkPage from './pages/WorkPage';

function ScreenBar() {
  const loc = useLocation();
  const navs = [
    { path: '/', label: 'ServicesPage' },
    { path: '/contactpage', label: 'ContactPage' },
    { path: '/aboutpage', label: 'AboutPage' },
    { path: '/homepage', label: 'HomePage' },
    { path: '/landingpage', label: 'LandingPage' },
    { path: '/workpage', label: 'WorkPage' }
  ];

  return (
    <div className="fixed top-2 left-1/2 -translate-x-1/2 z-50 bg-slate-900/90 backdrop-blur-md border border-slate-700/60 rounded-full px-3 py-1.5 shadow-2xl flex items-center gap-1.5 overflow-x-auto max-w-[95vw]">
      <span className="text-[10px] font-bold text-violet-400 uppercase tracking-widest px-2 hidden sm:inline">Screens:</span>
      {navs.map((n) => {
        const active = loc.pathname === n.path;
        return (
          <Link
            key={n.path}
            to={n.path}
            className={`px-3 py-1 text-xs font-semibold rounded-full transition-all whitespace-nowrap ${
              active
                ? 'bg-violet-600 text-white shadow-md shadow-violet-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            {n.label}
          </Link>
        );
      })}
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <CartProvider>
          <ThemeProvider>
            <BrowserRouter>
              <ScreenBar />
              <div className="pt-10 min-h-screen">
                <Routes>
                  <Route path='/' element={<ServicesPage />} />
        <Route path='/contactpage' element={<ContactPage />} />
        <Route path='/aboutpage' element={<AboutPage />} />
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/landingpage' element={<LandingPage />} />
        <Route path='/workpage' element={<WorkPage />} />
                  <Route path="*" element={<ServicesPage />} />
                </Routes>
              </div>
            </BrowserRouter>
          </ThemeProvider>
        </CartProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}
