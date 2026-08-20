import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Sugi.devWorkFinal() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      
<div className="fixed inset-0 z-0 bg-black">
<img alt="" className="bg-photo h-full w-full object-cover" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"/>
<div className="bg-sheen absolute inset-0"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
</div>
<div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-6 lg:px-8 lg:py-8">
<nav className="flex items-center justify-between">
<a className="flex items-center gap-2.5" href="hero.html">
<span className="liquid-glass-strong flex h-8 w-8 items-center justify-center rounded-lg">
<span className="glass-content font-mono text-sm font-bold tracking-tighter text-white">s/</span>
</span>
<span className="font-mono text-lg font-medium tracking-tight text-white">sugi<span className="text-white/50">.dev</span></span>
</a>
<div className="flex items-center gap-3">
<div className="liquid-glass hidden items-center gap-1 rounded-full px-2 py-1.5 sm:flex">
<span className="glass-content flex items-center gap-1">
<a className="rounded-full px-3 py-1 text-sm text-white/70 transition-colors hover:text-white" href="hero.html">Home</a>
<a className="rounded-full px-3 py-1 text-sm text-white/70 transition-colors hover:text-white" href="services.html">Services</a>
<a className="rounded-full px-3 py-1 text-sm text-white transition-colors hover:text-white" href="work.html">Work</a>
<a className="rounded-full px-3 py-1 text-sm text-white/70 transition-colors hover:text-white" href="about.html">About</a>
</span>
</div>
<a className="liquid-glass-strong flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white transition-transform hover:scale-105 active:scale-95" href="contact.html">
<span className="glass-content flex items-center gap-2"><i className="h-4 w-4" data-lucide="mail"></i>Get in touch</span>
</a>
</div>
</nav>
<main className="mt-14">
<p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">Selected work</p>
<h1 className="mt-5 max-w-2xl text-4xl leading-tight tracking-[-0.03em] text-white lg:text-5xl">Things I've designed and <span className="font-mono italic text-white/70">shipped.</span></h1>
<div className="mt-12 flex flex-col gap-6">
<article className="liquid-glass flex flex-col lg:flex-row overflow-hidden rounded-[2rem]">
<div className="relative h-56 w-full lg:h-auto lg:w-1/2">
<img alt="Aster preview" className="img-mono absolute inset-0 h-full w-full object-cover" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>
<div className="glass-content flex w-full flex-col justify-center p-8 lg:w-1/2">
<span className="font-mono text-[11px] uppercase tracking-widest text-white/50">Design system · 2026</span>
<h2 className="mt-2 text-2xl font-medium text-white">Aster</h2>
<p className="mt-3 text-sm leading-relaxed text-white/60">A cross-platform component library and token pipeline adopted by four product teams, cutting UI build time in half.</p>
<a className="group mt-5 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white" href="#">
              View case study <i className="h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-up-right"></i>
</a>
</div>
</article>
<article className="liquid-glass flex flex-col lg:flex-row-reverse overflow-hidden rounded-[2rem]">
<div className="relative h-56 w-full lg:h-auto lg:w-1/2">
<img alt="Kettle preview" className="img-mono absolute inset-0 h-full w-full object-cover" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>
<div className="glass-content flex w-full flex-col justify-center p-8 lg:w-1/2">
<span className="font-mono text-[11px] uppercase tracking-widest text-white/50">Realtime editor · 2025</span>
<h2 className="mt-2 text-2xl font-medium text-white">Kettle</h2>
<p className="mt-3 text-sm leading-relaxed text-white/60">A collaborative document editor with conflict-free sync, presence, and offline support built on CRDTs.</p>
<a className="group mt-5 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white" href="#">
              View case study <i className="h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-up-right"></i>
</a>
</div>
</article>
<article className="liquid-glass flex flex-col lg:flex-row overflow-hidden rounded-[2rem]">
<div className="relative h-56 w-full lg:h-auto lg:w-1/2">
<img alt="Nori preview" className="img-mono absolute inset-0 h-full w-full object-cover" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>
<div className="glass-content flex w-full flex-col justify-center p-8 lg:w-1/2">
<span className="font-mono text-[11px] uppercase tracking-widest text-white/50">Developer CLI · 2024</span>
<h2 className="mt-2 text-2xl font-medium text-white">Nori</h2>
<p className="mt-3 text-sm leading-relaxed text-white/60">A zero-config toolkit that scaffolds, lints, and deploys projects with one command — 3k+ stars.</p>
<a className="group mt-5 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white" href="#">
              View case study <i className="h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-up-right"></i>
</a>
</div>
</article>
</div>
</main>
<footer className="mt-20 pb-10">
<p className="text-center font-mono text-[11px] text-white/40">© 2026 sugi.dev — built at 60fps.</p>
</footer>
</div>


    </div>
  );
}
