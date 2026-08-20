import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Sugi.devLandingPageIntegrated() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      
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

<section className="min-h-screen flex flex-col items-center justify-center pt-32 text-center">
<div className="mb-6 py-1 px-3 rounded-full border border-white/10 bg-white/5 inline-block">
<span className="font-code-sm text-code-sm uppercase tracking-widest text-outline">Available for Select Engagements</span>
</div>
<h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-8 max-w-4xl mx-auto">
                Design-minded <br/>
<span className="text-on-surface-variant">engineer.</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
                Specializing in high-performance digital interfaces that bridge the gap between human intuition and technical excellence.
            </p>
<div className="flex gap-4">
<a className="px-8 py-4 rounded-full bg-primary text-on-primary font-medium hover:opacity-90 transition-opacity" href="#work">View Portfolio</a>
<a className="px-8 py-4 rounded-full liquid-glass text-primary font-medium hover:bg-white/10 transition-all" href="#about">My Philosophy</a>
</div>

<div className="mt-24 w-full max-w-4xl grid grid-cols-2 md:grid-cols-3 gap-8 py-10 liquid-glass rounded-[1.75rem]">
<div className="flex flex-col items-center">
<span className="font-code-label text-code-label text-outline uppercase mb-2">Experience</span>
<span className="font-headline-md text-headline-md text-primary">6+ Years</span>
<span className="font-code-sm text-code-sm text-on-surface-variant mt-1">Shipping Excellence</span>
</div>
<div className="flex flex-col items-center border-x border-white/10">
<span className="font-code-label text-code-label text-outline uppercase mb-2">Output</span>
<span className="font-headline-md text-headline-md text-primary">40+ Projects</span>
<span className="font-code-sm text-code-sm text-on-surface-variant mt-1">Concept to Scale</span>
</div>
<div className="flex flex-col items-center col-span-2 md:col-span-1">
<span className="font-code-label text-code-label text-outline uppercase mb-2">Base</span>
<span className="font-headline-md text-headline-md text-primary">Tokyo</span>
<span className="font-code-sm text-code-sm text-on-surface-variant mt-1">GMT+9</span>
</div>
</div>
</section>

<section className="py-section-gap" id="work">
<div className="flex justify-between items-end mb-16">
<div>
<span className="font-code-label text-code-label text-outline uppercase tracking-widest mb-4 block">Archive 01</span>
<h2 className="font-headline-md text-headline-md text-primary">Selected Work</h2>
</div>
<a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary flex items-center gap-2 transition-colors" href="#">
                    View all projects <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">

<div className="group relative liquid-glass rounded-[1.75rem] overflow-hidden flex flex-col aspect-[4/5] md:aspect-auto">
<div className="h-[400px] w-full overflow-hidden">
<img className="w-full h-full object-cover monochrome-img" data-alt="A high-contrast monochrome photograph of a sleek, minimalist mobile application interface displayed on a futuristic device. The interface features elegant typography and spacious layouts, set against a dark, moody studio background with subtle lens flares and sharp highlights reflecting off the glass screen. The overall aesthetic is professional, clean, and technologically advanced." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhKJ8GA6gUPX9De3pf9JGRq3MouDNMzRHH_eBp6X73ivb01-_G1c1XFFOfXmDqMimh5m2J4uObL5DnSn09dEQxaeyG8MqnWjhhCPGRQP4llhKDFvXWJzOaAkr63TXf-RTHWnHyrzCC3Sw4FEK_TK3L4Lax1gMtMOKby14aSi1smY_GAZ-uEIbmIJVn-CTPEyrwfLifMQjjISpTexS9h5MgTMdsPwM1cIkmqjUcgp09mVx72ix60LWn"/>
</div>
<div className="p-8 flex flex-col justify-between flex-grow">
<div>
<div className="flex gap-2 mb-4">
<span className="px-3 py-1 rounded-full liquid-glass-strong font-code-sm text-code-sm text-primary">Aster</span>
<span className="px-3 py-1 rounded-full bg-white/5 font-code-sm text-code-sm text-outline">Fintech</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2">The future of wealth management.</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Full-stack development and system architecture for a premium asset tracking platform.</p>
</div>
</div>

<div className="flex flex-col gap-gutter">

<div className="group liquid-glass rounded-[1.75rem] overflow-hidden flex flex-col h-full">
<div className="h-[300px] w-full overflow-hidden">
<img className="w-full h-full object-cover monochrome-img" data-alt="A minimalist architectural shot of a brutalist concrete building in Tokyo, captured in black and white. The lighting is harsh and direct, creating deep shadows and bright white surfaces. The composition emphasizes geometric precision and structural integrity, aligning with the liquid glass and sophisticated engineering brand personality. No people are present, focusing entirely on the interplay of light and form." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXvvN6jtzliRL1g2pehGK-rzIBEisWSvyiPD1x_J4-As87fmXsrXlWn2gj34HEWW9tElDfW1Y5DTtDf3yRrZd8KuP67iVgYGtUUvrhxJpjKQMm-qBXVo_ruIFVpYxj1MQTMv4BAHIkEW3xZj11S8KHOY-8e6ddVIKLL0ia1GPXh0-NvtJ9CvEDfgfSNcwu7VuCxsQtlUinEpdfvKnjudtMKMQjEwm6wECLbERfB5uPopS4YqMcB-QW"/>
</div>
<div className="p-8">
<div className="flex gap-2 mb-4">
<span className="px-3 py-1 rounded-full liquid-glass-strong font-code-sm text-code-sm text-primary">Kettle</span>
<span className="px-3 py-1 rounded-full bg-white/5 font-code-sm text-code-sm text-outline">E-commerce</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-4">Artisanal commerce refined.</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Performance-first marketplace built with Next.js and custom Sanity CMS integration.</p>
</div>
</div>

<div className="group liquid-glass rounded-[1.75rem] overflow-hidden flex flex-col">
<div className="p-8 flex flex-col justify-between h-full">
<div>
<div className="flex gap-2 mb-4">
<span className="px-3 py-1 rounded-full liquid-glass-strong font-code-sm text-code-sm text-primary">Nori</span>
<span className="px-3 py-1 rounded-full bg-white/5 font-code-sm text-code-sm text-outline">AI Tools</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2">Intelligent content workflow.</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Optimizing creative throughput using generative models and sleek UX patterns.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-section-gap" id="tech">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
<div className="lg:col-span-4">
<span className="font-code-label text-code-label text-outline uppercase tracking-widest mb-4 block">Capabilities</span>
<h2 className="font-headline-md text-headline-md text-primary mb-6">Built for precision.</h2>
<p className="text-on-surface-variant">My stack is chosen for its ability to deliver uncompromising performance and absolute reliability.</p>
</div>
<div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-8 liquid-glass rounded-[1.75rem] hover:bg-white/10 transition-colors">
<div className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-white/5">
<span className="material-symbols-outlined text-primary text-2xl">code</span>
</div>
<h4 className="font-body-lg text-body-lg font-bold text-primary mb-2">TypeScript</h4>
<p className="text-body-sm text-on-surface-variant">Type-safe architecture for enterprise-grade scalability and developer confidence.</p>
</div>
<div className="p-8 liquid-glass rounded-[1.75rem] hover:bg-white/10 transition-colors">
<div className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-white/5">
<span className="material-symbols-outlined text-primary text-2xl">view_quilt</span>
</div>
<h4 className="font-body-lg text-body-lg font-bold text-primary mb-2">React / Next.js</h4>
<p className="text-body-sm text-on-surface-variant">Crafting seamless, interactive user journeys with the latest web standards.</p>
</div>
<div className="p-8 liquid-glass rounded-[1.75rem] hover:bg-white/10 transition-colors">
<div className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-white/5">
<span className="material-symbols-outlined text-primary text-2xl">database</span>
</div>
<h4 className="font-body-lg text-body-lg font-bold text-primary mb-2">PostgreSQL</h4>
<p className="text-body-sm text-on-surface-variant">Complex data modeling and relational integrity at the core of every product.</p>
</div>
<div className="p-8 liquid-glass rounded-[1.75rem] hover:bg-white/10 transition-colors">
<div className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-white/5">
<span className="material-symbols-outlined text-primary text-2xl">speed</span>
</div>
<h4 className="font-body-lg text-body-lg font-bold text-primary mb-2">Performance Optimization</h4>
<p className="text-body-sm text-on-surface-variant">Meticulous profiling and fine-tuning to achieve sub-second load times.</p>
</div>
</div>
</div>
</section>

<section className="py-section-gap" id="about">
<div className="liquid-glass rounded-[2rem] p-8 md:p-16 relative overflow-hidden">
<div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">

</div>
<div className="max-w-3xl relative z-10">
<span className="font-code-label text-code-label text-outline uppercase tracking-widest mb-6 block">Philosophy</span>
<h2 className="font-headline-md text-headline-md text-primary mb-8">Calm and quick.</h2>
<p className="text-on-surface mb-8 leading-relaxed">
                        I believe that great engineering should be invisible. It’s the silence between the notes that makes the music. My approach combines a calm, methodical problem-solving mindset with the speed of modern delivery cycles.
                    </p>

<div className="space-y-8 mt-12 border-l border-white/10 pl-8">
<div className="relative">
<div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
<span className="font-code-sm text-code-sm text-outline mb-1 block">2022 — PRESENT</span>
<h4 className="font-body-lg text-body-lg font-bold text-primary">Senior Product Engineer</h4>
<p className="text-body-sm text-on-surface-variant">Architecting scalable platforms for high-growth tech firms in Tokyo and San Francisco.</p>
</div>
<div className="relative">
<div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-white/20 ring-4 ring-background"></div>
<span className="font-code-sm text-code-sm text-outline mb-1 block">2019 — 2022</span>
<h4 className="font-body-lg text-body-lg font-bold text-primary">Freelance Design Engineer</h4>
<p className="text-body-sm text-on-surface-variant">Bridging the design-to-code gap for boutique agencies and early-stage startups.</p>
</div>
<div className="relative">
<div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-white/10 ring-4 ring-background"></div>
<span className="font-code-sm text-code-sm text-outline mb-1 block">2018</span>
<h4 className="font-body-lg text-body-lg font-bold text-primary">Software Engineer Graduate</h4>
<p className="text-body-sm text-on-surface-variant">Focused on algorithmic efficiency and modern web architecture.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-section-gap text-center">
<div className="max-w-2xl mx-auto">
<h2 className="font-headline-md text-headline-md text-primary mb-8">Ready to engineer something remarkable?</h2>
<p className="text-on-surface-variant mb-12">I'm currently accepting new projects for Q3 2024. Let's discuss how we can elevate your technical vision.</p>
<div className="inline-flex flex-col sm:flex-row gap-4">
<button className="liquid-glass-strong px-12 py-5 rounded-full text-primary font-bold text-lg hover:bg-white/15 transition-all active:scale-95">Start a Conversation</button>
<button className="px-12 py-5 rounded-full bg-white/5 border border-white/10 text-outline font-medium hover:text-primary hover:border-white/20 transition-all">Download CV</button>
</div>
</div>
</section>
</main>

<footer className="w-full py-20 opacity-50">
<div className="max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-8">
<div className="font-code-label text-code-label text-primary">SUGI</div>
<div className="font-code-sm text-code-sm text-secondary">
                © 2024 SUGI — Engineered with Precision
            </div>
<div className="flex gap-8">
<a className="font-code-sm text-code-sm text-outline hover:text-primary transition-colors" href="#">Github</a>
<a className="font-code-sm text-code-sm text-outline hover:text-primary transition-colors" href="#">LinkedIn</a>
<a className="font-code-sm text-code-sm text-outline hover:text-primary transition-colors" href="#">Source</a>
</div>
</div>
</footer>


    </div>
  );
}
