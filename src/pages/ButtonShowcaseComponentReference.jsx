import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ButtonShowcaseComponentReference() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-mist/10 flex justify-between items-center px-margin-desktop h-20 w-full">
<div className="font-h1 text-h1 tracking-tighter text-on-background">BUTTON_LABS</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-ember border-b border-ember pb-1 font-nav-link text-nav-link uppercase" href="#">COMPONENTS</a>
<a className="text-on-surface-variant hover:text-on-surface transition-colors font-nav-link text-nav-link uppercase" href="#">GUIDELINES</a>
<a className="text-on-surface-variant hover:text-on-surface transition-colors font-nav-link text-nav-link uppercase" href="#">STORYBOOK</a>
<a className="text-on-surface-variant hover:text-on-surface transition-colors font-nav-link text-nav-link uppercase" href="#">DOCS</a>
</div>
<button className="bg-ember text-white px-6 py-2 rounded-md font-nav-link text-nav-link uppercase ember-glow active:scale-95 transition-all">GET STARTED</button>
</nav>
<main className="pt-32 pb-section-gap-lg px-margin-desktop max-w-container-max mx-auto">

<header className="mb-24">
<p className="tech-label mb-4">SUGIDEV / DEVOS — COMPONENT CATALOGUE</p>
<h1 className="font-display-hero text-display-hero text-on-background uppercase">
                Button <br/> Showcase
            </h1>
<div className="flex items-center gap-4 mt-8">
<span className="w-12 h-[1px] bg-ember"></span>
<p className="text-mist/60 font-body-lg max-w-2xl">A comprehensive reference of the atomic button primitives. Engineered for tactile precision with the signature Tegas aesthetic.</p>
</div>
</header>

<section className="section-divider py-16">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
<div>
<h2 className="font-display-hero text-8xl text-ember opacity-20">01.</h2>
<h3 className="font-kanit text-2xl font-bold uppercase mt-[-2rem]">Primary Buttons</h3>
<p className="tech-label mt-4">CLASS: .btn-primary</p>
</div>
<div className="lg:col-span-3 flex flex-wrap items-end gap-12">
<div className="flex flex-col gap-4">
<span className="tech-label">Solid Ember</span>
<button className="bg-ember text-white px-8 py-4 rounded-md font-kanit font-bold uppercase tracking-wider ember-glow btn-transition hover:-translate-y-1 active:scale-95">
                            Action Primary
                        </button>
</div>
<div className="flex flex-col gap-4">
<span className="tech-label">With Icon</span>
<button className="bg-ember text-white px-8 py-4 rounded-md font-kanit font-bold uppercase tracking-wider flex items-center gap-3 ember-glow btn-transition hover:-translate-y-1 active:scale-95">
                            Launch Project
                            <span className="material-symbols-outlined text-lg">arrow_top_right</span>
</button>
</div>
<div className="flex flex-col gap-4">
<span className="tech-label">Leading Icon</span>
<button className="bg-ember text-white px-8 py-4 rounded-md font-kanit font-bold uppercase tracking-wider flex items-center gap-3 ember-glow btn-transition hover:-translate-y-1 active:scale-95">
<span className="material-symbols-outlined text-lg">map</span>
                            Optimize
                        </button>
</div>
</div>
</div>
</section>

<section className="section-divider py-16">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
<div>
<h2 className="font-display-hero text-8xl text-ember opacity-20">02.</h2>
<h3 className="font-kanit text-2xl font-bold uppercase mt-[-2rem]">Secondary &amp; Ghost</h3>
<p className="tech-label mt-4">CLASS: .btn-ink / .btn-ghost</p>
</div>
<div className="lg:col-span-3 flex flex-wrap items-end gap-12">
<div className="flex flex-col gap-4">
<span className="tech-label">Ink Soft Fill</span>
<button className="bg-ink-soft text-on-background px-8 py-4 rounded-md font-kanit font-bold uppercase tracking-wider border border-mist/10 btn-transition hover:bg-mist/10 active:scale-95">
                            Secondary Task
                        </button>
</div>
<div className="flex flex-col gap-4">
<span className="tech-label">Ghost / Transparent</span>
<button className="bg-transparent text-on-background px-8 py-4 rounded-md font-kanit font-bold uppercase tracking-wider border border-transparent hover:border-mist/20 hover:bg-mist/5 btn-transition active:scale-95">
                            Ghost Action
                        </button>
</div>
<div className="flex flex-col gap-4">
<span className="tech-label">Mist Contrast</span>
<button className="bg-mist text-background px-8 py-4 rounded-md font-kanit font-bold uppercase tracking-wider btn-transition hover:bg-white active:scale-95">
                            High Contrast
                        </button>
</div>
</div>
</div>
</section>

<section className="section-divider py-16">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
<div>
<h2 className="font-display-hero text-8xl text-ember opacity-20">03.</h2>
<h3 className="font-kanit text-2xl font-bold uppercase mt-[-2rem]">Outlined Variants</h3>
<p className="tech-label mt-4">CLASS: .btn-outline</p>
</div>
<div className="lg:col-span-3 flex flex-wrap items-end gap-12">
<div className="flex flex-col gap-4">
<span className="tech-label">Ember Stroke</span>
<button className="bg-transparent text-ember px-8 py-4 rounded-md font-kanit font-bold uppercase tracking-wider border-2 border-ember btn-transition hover:bg-ember hover:text-white active:scale-95">
                            Outline Ember
                        </button>
</div>
<div className="flex flex-col gap-4">
<span className="tech-label">Mist Stroke</span>
<button className="bg-transparent text-mist px-8 py-4 rounded-md font-kanit font-bold uppercase tracking-wider border-2 border-mist/30 btn-transition hover:border-mist hover:bg-mist/5 active:scale-95">
                            Outline Mist
                        </button>
</div>
</div>
</div>
</section>

<section className="section-divider py-16">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
<div>
<h2 className="font-display-hero text-8xl text-ember opacity-20">04.</h2>
<h3 className="font-kanit text-2xl font-bold uppercase mt-[-2rem]">Sizes &amp; Icons</h3>
<p className="tech-label mt-4">SCALE: SM / MD / LG</p>
</div>
<div className="lg:col-span-3">
<div className="flex flex-wrap items-center gap-12 mb-16">
<div className="flex flex-col gap-4">
<span className="tech-label">Large (64px)</span>
<button className="bg-ember text-white px-10 py-5 text-lg rounded-md font-kanit font-bold uppercase tracking-widest ember-glow">
                                Large Scale
                            </button>
</div>
<div className="flex flex-col gap-4">
<span className="tech-label">Medium (48px)</span>
<button className="bg-ember text-white px-8 py-3.5 rounded-md font-kanit font-bold uppercase tracking-wider ember-glow">
                                Default
                            </button>
</div>
<div className="flex flex-col gap-4">
<span className="tech-label">Small (36px)</span>
<button className="bg-ember text-white px-6 py-2 text-sm rounded-md font-kanit font-bold uppercase tracking-tight ember-glow">
                                Small Task
                            </button>
</div>
</div>
<div className="flex flex-wrap items-center gap-8">
<div className="flex flex-col gap-4">
<span className="tech-label">Icon Only (Circle Support)</span>
<div className="flex gap-4">
<button className="w-12 h-12 flex items-center justify-center bg-ink-soft border border-mist/10 text-ember rounded-md hover:border-ember transition-colors">
<span className="material-symbols-outlined">hls</span>
</button>
<button className="w-12 h-12 flex items-center justify-center bg-ink-soft border border-mist/10 text-mist rounded-md hover:border-mist transition-colors">
<span className="material-symbols-outlined">settings</span>
</button>
<button className="w-12 h-12 flex items-center justify-center bg-ember text-white rounded-md ember-glow">
<span className="material-symbols-outlined">share</span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
<div>
<h2 className="font-display-hero text-8xl text-ember opacity-20">05.</h2>
<h3 className="font-kanit text-2xl font-bold uppercase mt-[-2rem]">System States</h3>
<p className="tech-label mt-4">LOGIC: PSEUDO-CLASSES</p>
</div>
<div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
<div className="flex flex-col gap-4">
<span className="tech-label">Normal State</span>
<button className="bg-ember text-white px-8 py-4 rounded-md font-kanit font-bold uppercase tracking-wider">
                            Idle Component
                        </button>
</div>
<div className="flex flex-col gap-4">
<span className="tech-label">Hover Simulation</span>
<button className="bg-ember text-white px-8 py-4 rounded-md font-kanit font-bold uppercase tracking-wider -translate-y-1 scale-[1.02] shadow-[0_10px_30px_rgba(255,90,31,0.4)]">
                            Hover State
                        </button>
</div>
<div className="flex flex-col gap-4">
<span className="tech-label">Active / Pressed</span>
<button className="bg-ember-deep text-white px-8 py-4 rounded-md font-kanit font-bold uppercase tracking-wider scale-95 opacity-90">
                            Active State
                        </button>
</div>
<div className="flex flex-col gap-4">
<span className="tech-label">Disabled / Locked</span>
<button className="bg-surface-container-highest/50 text-on-surface-variant/30 px-8 py-4 rounded-md font-kanit font-bold uppercase tracking-wider cursor-not-allowed border border-mist/5" disabled="">
                            Locked Component
                        </button>
</div>
<div className="flex flex-col gap-4 md:col-span-2">
<span className="tech-label">Loading State</span>
<button className="bg-ember text-white px-8 py-4 rounded-md font-kanit font-bold uppercase tracking-wider flex items-center justify-center gap-3 w-full max-w-xs relative overflow-hidden">
<svg className="animate-spin h-5 w-5 text-white" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
<path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
</svg>
                            Syncing Data...
                        </button>
</div>
</div>
</div>
</section>
</main>

<footer className="w-full py-section-gap-sm border-t border-mist/10 bg-background flex flex-col md:flex-row justify-between items-center px-margin-desktop gap-stack-md">
<div className="font-h1 text-h1 text-on-background">BUTTON_LABS</div>
<div className="text-on-surface-variant font-caption text-caption uppercase tracking-widest text-center md:text-left">
            © 2024 TECHNICAL PORTFOLIO SUITE. ENGINEERED FOR PRECISION.
        </div>
<div className="flex gap-8">
<a className="text-on-surface-variant hover:text-ember transition-colors font-caption text-caption uppercase" href="#">PRIVACY</a>
<a className="text-on-surface-variant hover:text-ember transition-colors font-caption text-caption uppercase" href="#">LICENSE</a>
<a className="text-on-surface-variant hover:text-ember transition-colors font-caption text-caption uppercase" href="#">CONTRIBUTE</a>
<a className="text-on-surface-variant hover:text-ember transition-colors font-caption text-caption uppercase" href="#">CHANGELOG</a>
</div>
</footer>

<div className="fixed inset-0 pointer-events-none z-[60] opacity-[0.03]" id="grain"></div>



    </div>
  );
}
