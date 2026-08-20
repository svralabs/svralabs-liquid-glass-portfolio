import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ServicesSugiDev() {
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
<a className="rounded-full px-3 py-1 text-sm text-white transition-colors hover:text-white" href="services.html">Services</a>
<a className="rounded-full px-3 py-1 text-sm text-white/70 transition-colors hover:text-white" href="work.html">Work</a>
<a className="rounded-full px-3 py-1 text-sm text-white/70 transition-colors hover:text-white" href="about.html">About</a>
</span>
</div>
<a className="liquid-glass-strong flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white transition-transform hover:scale-105 active:scale-95" href="contact.html">
<span className="glass-content flex items-center gap-2"><i className="h-4 w-4" data-lucide="mail"></i>Get in touch</span>
</a>
</div>
</nav>
<main className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
<div className="lg:col-span-4">
<p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">What I do</p>
<h1 className="mt-5 text-4xl leading-tight tracking-[-0.03em] text-white lg:text-5xl">Services built around <span className="font-mono italic text-white/70">shipping.</span></h1>
<p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">Focused engagements, clear scope, and code your team can maintain long after I'm gone.</p>
</div>
<div className="flex flex-col gap-4 lg:col-span-8">
<a className="liquid-glass group flex items-start gap-5 rounded-3xl p-6 transition-transform hover:scale-[1.01]" href="contact.html">
<span className="glass-content flex w-full items-start gap-5">
<span className="font-mono text-sm text-white/40">01</span>
<span className="flex-1">
<span className="flex items-center gap-2.5">
<i className="h-4 w-4 text-white/70" data-lucide="boxes"></i>
<span className="text-lg font-medium text-white">Product engineering</span>
</span>
<span className="mt-1.5 block text-sm leading-relaxed text-white/60">Full-stack web apps built end to end, from data model to pixel.</span>
</span>
<i className="mt-1 h-4 w-4 flex-none text-white/40 transition-colors group-hover:text-white" data-lucide="arrow-up-right"></i>
</span>
</a>
<a className="liquid-glass group flex items-start gap-5 rounded-3xl p-6 transition-transform hover:scale-[1.01]" href="contact.html">
<span className="glass-content flex w-full items-start gap-5">
<span className="font-mono text-sm text-white/40">02</span>
<span className="flex-1">
<span className="flex items-center gap-2.5">
<i className="h-4 w-4 text-white/70" data-lucide="component"></i>
<span className="text-lg font-medium text-white">Design systems</span>
</span>
<span className="mt-1.5 block text-sm leading-relaxed text-white/60">Component libraries and tokens teams actually keep using.</span>
</span>
<i className="mt-1 h-4 w-4 flex-none text-white/40 transition-colors group-hover:text-white" data-lucide="arrow-up-right"></i>
</span>
</a>
<a className="liquid-glass group flex items-start gap-5 rounded-3xl p-6 transition-transform hover:scale-[1.01]" href="contact.html">
<span className="glass-content flex w-full items-start gap-5">
<span className="font-mono text-sm text-white/40">03</span>
<span className="flex-1">
<span className="flex items-center gap-2.5">
<i className="h-4 w-4 text-white/70" data-lucide="gauge"></i>
<span className="text-lg font-medium text-white">Performance audits</span>
</span>
<span className="mt-1.5 block text-sm leading-relaxed text-white/60">Find what's slow, fix it, and prove the win with numbers.</span>
</span>
<i className="mt-1 h-4 w-4 flex-none text-white/40 transition-colors group-hover:text-white" data-lucide="arrow-up-right"></i>
</span>
</a>
<a className="liquid-glass group flex items-start gap-5 rounded-3xl p-6 transition-transform hover:scale-[1.01]" href="contact.html">
<span className="glass-content flex w-full items-start gap-5">
<span className="font-mono text-sm text-white/40">04</span>
<span className="flex-1">
<span className="flex items-center gap-2.5">
<i className="h-4 w-4 text-white/70" data-lucide="zap"></i>
<span className="text-lg font-medium text-white">Prototyping</span>
</span>
<span className="mt-1.5 block text-sm leading-relaxed text-white/60">Validate ideas fast with real, interactive code — not slides.</span>
</span>
<i className="mt-1 h-4 w-4 flex-none text-white/40 transition-colors group-hover:text-white" data-lucide="arrow-up-right"></i>
</span>
</a>
</div>
</main>
<p className="mt-10 text-center font-mono text-[11px] text-white/40">© 2026 sugi.dev — built at 60fps.</p>
</div>


    </div>
  );
}
