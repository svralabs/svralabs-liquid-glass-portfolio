import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SugidevShowcaseExploreSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<section className="relative w-full min-h-screen flex flex-col overflow-hidden" id="showcase">

<header className="relative z-20 pt-6 px-6 md:px-16">

<div aria-label="sugidev" className="text-mega font-black lowercase tracking-tight w-full flex items-end justify-center" data-wordmark=""></div>

<nav className="flex justify-between items-start mt-8 text-[10px] md:text-[11px] tracking-[0.2em] uppercase">

<div className="w-[15%] text-mist leading-relaxed" data-reveal="" data-y="20">
<p>React</p>
<p>TypeScript</p>
<p>Web</p>
</div>

<div className="hidden md:flex w-[5%] justify-center pt-1" data-reveal="" data-y="20">
<i className="w-3.5 h-3.5 text-mist/40" data-lucide="arrow-right"></i>
</div>

<p className="flex-1 md:flex-none md:w-[30%] text-mist/70 leading-relaxed" data-reveal="" data-y="20">
            Building fast, accessible and delightful web interfaces with React, TypeScript and a love for detail.
          </p>

<div className="hidden md:flex w-[5%] justify-center pt-1" data-reveal="" data-y="20">
<i className="w-3.5 h-3.5 text-mist/40" data-lucide="arrow-right"></i>
</div>

<ul className="hidden md:block w-[15%] text-mist space-y-1" data-reveal="" data-y="20">
<li><a className="transition-colors hover:text-ember" href="#projects">Work</a></li>
<li><a className="transition-colors hover:text-ember" href="#services">Services</a></li>
<li><a className="transition-colors hover:text-ember" href="#about">About</a></li>
<li><a className="transition-colors hover:text-ember" href="#contact">Contact</a></li>
</ul>

<button aria-label="Toggle menu" className="group relative z-[60] md:hidden flex flex-col gap-[6px] pt-1" data-burger="" type="button">
<span className="h-[1.5px] bg-mist transition-all duration-300 w-8 group-hover:w-6" data-bar="1"></span>
<span className="h-[1.5px] bg-mist transition-all duration-300 w-8 group-hover:w-10" data-bar="2"></span>
</button>
</nav>
</header>


<div className="hidden relative z-30 bg-ink border-b border-mist/10 shadow-xl px-6 py-8" data-menu="">
<ul className="space-y-6 text-sm tracking-[0.2em] uppercase text-mist">
<li><a className="hover:text-ember" href="#projects">Work</a></li>
<li><a className="hover:text-ember" href="#services">Services</a></li>
<li><a className="hover:text-ember" href="#about">About</a></li>
<li><a className="hover:text-ember" href="#contact">Contact</a></li>
</ul>
</div>


<main className="relative z-10 flex-1 flex justify-between items-start px-10 md:px-16 pb-24 md:pb-32">

<div className="mt-16 sm:mt-20 md:mt-24 max-w-sm">
<div className="flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-mist/50" data-reveal="" data-y="20">
<span>01</span>
<span className="h-px w-12 bg-mist/25"></span>
<span>Intro</span>
</div>
<h1 className="mt-5 text-[3rem] md:text-[4.5rem] font-black tracking-tight leading-[0.95] uppercase text-mist" data-reveal="" data-y="20">
            Built <span className="text-ember">for</span> the web
          </h1>
<p className="mt-5 max-w-xs text-sm md:text-[15px] text-mist/60 leading-relaxed" data-reveal="" data-y="20">
            Browse interfaces engineered for speed, accessibility and detail — built to be remembered.
          </p>
<div className="mt-8" data-reveal="" data-y="20">
<a className="group relative inline-flex items-center gap-3 overflow-hidden rounded-md border border-ember/60 bg-ink-soft px-6 py-3.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_rgba(255,90,31,0.5)] active:translate-y-0 active:shadow-none" href="#collection">
<span className="absolute inset-0 -translate-x-[101%] bg-ember transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0"></span>
<i className="relative z-10 w-[18px] h-[18px] text-mist transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12 group-hover:-translate-y-1 group-hover:text-ink" data-lucide="sparkles"></i>
<span className="relative z-10 text-[15px] font-medium text-mist transition-colors duration-300 group-hover:text-ink">View Work</span>
</a>
</div>
</div>

<aside className="hidden md:flex flex-col gap-8 w-[200px] mt-16 md:mt-24" data-delay="0.2" data-reveal="" data-y="20">
<div>
<p className="text-[10px] font-bold tracking-widest uppercase text-mist">Featured Project</p>
<p className="mt-2 text-[12px] text-mist/60 leading-[1.6]">Nextlevel Dashboard<br/>Client · 2025</p>
</div>
<div className="flex flex-col gap-4">
<div>
<p className="text-[10px] tracking-widest uppercase text-mist/50">Projects</p>
<p className="text-[13px] font-medium text-mist">80+</p>
</div>
<div>
<p className="text-[10px] tracking-widest uppercase text-mist/50">Experience</p>
<p className="text-[13px] font-medium text-mist">3 yrs</p>
</div>
</div>
<a className="group flex items-center gap-3" href="#collection">
<span className="flex w-10 h-10 items-center justify-center rounded-full border border-mist/40 transition-colors group-hover:border-ember group-hover:bg-ember">
<i className="w-4 h-4 text-mist transition-colors group-hover:text-ink" data-lucide="plus"></i>
</span>
<span className="text-[10px] tracking-widest uppercase font-bold text-mist">View Details</span>
</a>
</aside>
</main>

</section>


<section className="relative w-full min-h-[75vh] md:min-h-screen bg-paper text-paper-ink flex flex-col items-center pt-24 md:pt-32 pb-0 z-20 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]" id="explore">
<div className="w-full flex flex-col items-center max-w-7xl mx-auto">
<p className="text-[10px] md:text-[11px] tracking-[0.2em] mb-12" data-reveal="" data-y="20">
<span className="text-paper-ink/50">[ 02 ]</span> <span className="text-paper-ink font-bold uppercase">What I Do</span>
</p>
<h2 className="px-6 text-center text-[2.2rem] md:text-[3.5rem] lg:text-[4.2rem] leading-[1.1] font-medium tracking-tight text-paper-ink max-w-[1000px]" data-reveal="" data-y="40">
          Turning bold ideas into fast, accessible web<br className="hidden md:block"/> interfaces that refuse to blend in.
        </h2>

<div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-12 mb-10 md:mb-24 px-6" data-pills=""></div>
<div className="min-h-[60px] md:min-h-[120px]"></div>
</div>

<footer className="hidden md:flex absolute bottom-0 inset-x-0 justify-between px-8 md:px-16 pb-8 md:pb-12 pointer-events-none text-[10px] tracking-widest uppercase text-paper-ink/50 font-medium">
<span>We don't just write code.</span>
<span>Sugidev © 2026</span>
</footer>
</section>







    </div>
  );
}
