import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SugiDevAboutPage() {
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
<a className="rounded-full px-3 py-1 text-sm text-white/70 transition-colors hover:text-white" href="work.html">Work</a>
<a className="rounded-full px-3 py-1 text-sm text-white transition-colors hover:text-white" href="about.html">About</a>
</span>
</div>
<a className="liquid-glass-strong flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white transition-transform hover:scale-105 active:scale-95" href="contact.html">
<span className="glass-content flex items-center gap-2">
<i className="h-4 w-4" data-lucide="mail"></i>
            Get in touch
          </span>
</a>
</div>
</nav>

<main className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">

<div className="liquid-glass relative overflow-hidden rounded-[2rem] lg:col-span-5 lg:row-span-2 min-h-[320px]">
<img alt="Workspace" className="img-mono absolute inset-0 h-full w-full object-cover" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
<div className="glass-content absolute inset-0 flex flex-col justify-end p-7">
<p className="font-mono text-xs uppercase tracking-widest text-white/60">Based in</p>
<p className="mt-1 text-2xl font-medium text-white">Tokyo, Japan</p>
<p className="mt-1 text-xs text-white/50">Working across timezones</p>
</div>
</div>

<div className="liquid-glass-strong rounded-[2rem] p-8 lg:col-span-7">
<div className="glass-content">
<p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">About</p>
<h1 className="mt-4 text-3xl leading-snug tracking-[-0.03em] text-white lg:text-4xl">
            I build software that feels <span className="font-mono italic text-white/70">calm and quick.</span>
</h1>
<p className="mt-5 text-sm leading-relaxed text-white/60">
            I've spent the last six years shipping products across startups and studios — equally at home in a design file and a terminal. I care about the details users never notice: the frame that never drops, the state that never gets stuck, the API that just makes sense.
          </p>

<div className="mt-6 flex flex-wrap gap-2">
<span className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[11px] text-white/80">TypeScript</span>
<span className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[11px] text-white/80">React</span>
<span className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[11px] text-white/80">Node</span>
<span className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[11px] text-white/80">Go</span>
<span className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[11px] text-white/80">Rust</span>
<span className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[11px] text-white/80">Postgres</span>
<span className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[11px] text-white/80">Figma</span>
</div>
</div>
</div>

<div className="liquid-glass rounded-[2rem] p-8 lg:col-span-7">
<div className="glass-content">
<p className="font-mono text-xs uppercase tracking-widest text-white/60">Timeline</p>
<div className="mt-5 flex flex-col divide-y divide-white/10">
<div className="flex items-baseline gap-5 py-3">
<span className="font-mono text-sm text-white/40">2026</span>
<span className="text-sm text-white/85">Independent — product &amp; platform engineering</span>
</div>
<div className="flex items-baseline gap-5 py-3">
<span className="font-mono text-sm text-white/40">2023</span>
<span className="text-sm text-white/85">Senior engineer, realtime collaboration team</span>
</div>
<div className="flex items-baseline gap-5 py-3">
<span className="font-mono text-sm text-white/40">2020</span>
<span className="text-sm text-white/85">Frontend engineer, design systems</span>
</div>
<div className="flex items-baseline gap-5 py-3">
<span className="font-mono text-sm text-white/40">2018</span>
<span className="text-sm text-white/85">First commit, first startup</span>
</div>
</div>
</div>
</div>
</main>

<p className="mt-10 text-center font-mono text-[11px] text-white/40">© 2026 sugi.dev — built at 60fps.</p>
</div>


    </div>
  );
}
