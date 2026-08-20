import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SugidevHeroLanding() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-mist/10">
<div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">

<a className="font-display-hero text-h1 text-ember tracking-tighter" href="#">
                sugidev
            </a>

<div className="hidden md:flex gap-stack-md items-center">
<a className="font-nav-link text-nav-link uppercase text-on-surface-variant hover:text-ember transition-all duration-300" href="#">Work</a>
<a className="font-nav-link text-nav-link uppercase text-on-surface-variant hover:text-ember transition-all duration-300" href="#">Services</a>
<a className="font-nav-link text-nav-link uppercase text-on-surface-variant hover:text-ember transition-all duration-300" href="#">About</a>
<a className="font-nav-link text-nav-link uppercase text-on-surface-variant hover:text-ember transition-all duration-300" href="#">Contact</a>
</div>

<a className="btn-ember bg-primary-container text-ink font-nav-link text-nav-link uppercase px-6 py-2 rounded-full hidden md:inline-flex items-center justify-center" href="#">
                Let's Build
            </a>

<button className="md:hidden text-on-surface">
<span className="material-symbols-outlined text-3xl">menu</span>
</button>
</div>
</nav>

<main className="flex-grow pt-24 pb-section-gap-sm md:pb-section-gap-lg flex flex-col justify-center overflow-x-hidden relative">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full text-center relative z-10 flex flex-col items-center">

<div className="glass-pill rounded-full px-4 py-2 flex items-center gap-2 mb-stack-md w-fit mx-auto">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
</span>
<span className="font-overline text-overline text-mist uppercase tracking-widest">Available for work</span>
</div>

<div className="w-full relative py-8 md:py-16">

<div className="mb-4 text-mist/60 font-label-sm text-label-sm uppercase flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">location_on</span>
                    Based in Tokyo, JP
                </div>

<div className="marquee-container text-surface-bright/20 font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero uppercase">
<div className="marquee-content">
                        HI, I'M SUGIDEV • FRONTEND ENGINEER • HI, I'M SUGIDEV • FRONTEND ENGINEER • HI, I'M SUGIDEV • FRONTEND ENGINEER • 
                    </div>
</div>

<h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface mix-blend-difference pointer-events-none uppercase">
                    Hi, I'm <span className="text-ember">sugidev</span>
</h1>
</div>

<p className="font-body-lg text-body-lg text-mist/70 max-w-2xl mx-auto mt-stack-md text-center">
                Crafting high-performance, visually striking digital experiences. Specializing in modern web architectures and fluid user interfaces.
            </p>

<div className="mt-section-gap-sm">
<a className="btn-ember bg-gradient-to-r from-ember to-ember-deep text-ink font-nav-link text-nav-link uppercase px-8 py-4 rounded-full inline-flex items-center gap-2 text-lg" href="#contact">
                    Contact Me
                    <span className="material-symbols-outlined text-xl">arrow_forward</span>
</a>
</div>
</div>
</main>

<footer className="w-full relative bottom-0 bg-ink border-t border-mist/10 mt-auto">
<div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-12 gap-stack-md max-w-container-max mx-auto">

<div className="font-h1 text-h1 text-on-surface">
                sugidev
            </div>

<div className="font-caption text-caption uppercase text-on-surface-variant text-center">
                © 2024 sugidev. Built with precision.
            </div>

<div className="flex gap-4 items-center">
<a className="font-caption text-caption uppercase text-on-surface-variant hover:text-primary transition-colors hover:opacity-80 transition-opacity" href="#">Github</a>
<a className="font-caption text-caption uppercase text-on-surface-variant hover:text-primary transition-colors hover:opacity-80 transition-opacity" href="#">LinkedIn</a>
<a className="font-caption text-caption uppercase text-on-surface-variant hover:text-primary transition-colors hover:opacity-80 transition-opacity" href="#">Source</a>
</div>
</div>
</footer>

    </div>
  );
}
