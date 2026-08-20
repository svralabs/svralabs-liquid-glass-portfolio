import React from 'react';
import HeroSection from '../components/HeroSection';
import Marquee from '../components/Marquee';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen">
      <div className="ambient-drift"></div>
      <div className="fixed inset-0 pointer-events-none mesh-gradient"></div>

      <header className="fixed top-6 left-1/2 -translate-x-1/2 w-fit rounded-full backdrop-blur-xl bg-white/5 border border-white/15 flex items-center gap-8 px-6 py-3 z-50">
        <div className="font-code-label text-code-label font-bold tracking-tighter text-primary">SUGI</div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="font-body-sm text-body-sm text-primary font-bold transition-all duration-300 hover:bg-white/10 px-3 py-1 rounded-full" href="#work">Work</a>
          <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors hover:bg-white/10 px-3 py-1 rounded-full" href="#tech">Tech</a>
          <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors hover:bg-white/10 px-3 py-1 rounded-full" href="#lab">Lab</a>
          <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors hover:bg-white/10 px-3 py-1 rounded-full" href="#about">About</a>
        </nav>
        <button className="font-body-sm text-body-sm px-4 py-1.5 rounded-full bg-primary text-on-primary font-medium active:scale-95 transition-transform">Get in touch</button>
      </header>

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <HeroSection />
        <Marquee />
      </main>
    </div>
  );
}
