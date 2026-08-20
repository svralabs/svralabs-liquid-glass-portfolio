import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SugidevMarqueeAboutSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md bg-ink/80 border-b border-white/5">
<a className="text-ember font-black text-2xl tracking-tighter hover:opacity-80 transition-opacity" href="/">sugidev</a>
<nav className="hidden md:flex items-center gap-8">
<a className="nav-link" href="#work">Work</a>
<a className="nav-link" href="#services">Services</a>
<a className="nav-link text-ember" href="#about">About</a>
<a className="nav-link" href="#contact">Contact</a>
</nav>
<a className="hidden md:inline-flex items-center justify-center px-6 py-2 rounded-full border border-white/20 text-sm font-medium uppercase tracking-widest hover:border-ember hover:text-ember transition-colors" href="#contact">
        Let's Build
      </a>
<button className="md:hidden text-mist hover:text-ember">
<i data-lucide="menu"></i>
</button>
</header>


<main className="flex-grow pt-24 relative">
<div className="glow-bg"></div>

<section className="relative z-10 pt-16 sm:pt-24 pb-10 overflow-hidden">
<div className="flex items-center justify-between gap-4 px-6 md:px-12 mb-10 sm:mb-14">
<span className="text-mist/50 text-xs sm:text-sm font-medium uppercase tracking-[0.3em]">Tech Stack</span>
<span className="text-mist/50 text-xs sm:text-sm font-medium uppercase tracking-[0.3em]">Tools &amp; Tech</span>
</div>
<div className="edge-fade flex flex-col gap-3 overflow-hidden">
<div className="marquee-row anim-left" data-row="1"></div>
<div className="marquee-row anim-right" data-row="2"></div>
</div>
</section>


<section className="relative z-10 min-h-[80vh] flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 py-20 overflow-hidden" id="about">
<div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24 w-full max-w-5xl">
<div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
<h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center" data-reveal="" data-y="40" style={{"fontSize": "clamp(3rem, 12vw, 120px)"}}>About me</h2>
<p className="text-mist font-medium text-center leading-relaxed max-w-3xl" data-animtext="" style={{"fontSize": "clamp(1.125rem, 2.5vw, 1.75rem)"}}></p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 sm:gap-x-24 mt-8" data-delay="0.1" data-reveal="" data-y="24">
<div className="flex flex-col items-center">
<span className="heading-ember font-black leading-none" style={{"fontSize": "clamp(2.5rem, 5vw, 4rem)"}}>3+</span>
<span className="mt-2 text-mist/60 text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">Years with React</span>
</div>
<div className="flex flex-col items-center">
<span className="heading-ember font-black leading-none" style={{"fontSize": "clamp(2.5rem, 5vw, 4rem)"}}>80+</span>
<span className="mt-2 text-mist/60 text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">Projects shipped</span>
</div>
<div className="flex flex-col items-center">
<span className="heading-ember font-black leading-none" style={{"fontSize": "clamp(2.5rem, 5vw, 4rem)"}}>30+</span>
<span className="mt-2 text-mist/60 text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">Happy clients</span>
</div>
</div>
</div>
<a className="group inline-flex items-center gap-2 rounded-full text-white font-medium uppercase tracking-[0.2em] px-8 py-4 text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(255,90,31,0.7)]" href="#contact" style={{"background": "linear-gradient(135deg, #ff8a4c 0%, #ff5a1f 48%, #c2410c 100%)", "shadow": "0 8px 30px -8px rgba(255,90,31,0.55), inset 0 1px 0 rgba(255,255,255,0.35), inset 0 0 0 1px rgba(255,255,255,0.12)"}}>
            Contact Me
            <i className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
</div>
</section>

</main>


<footer className="relative z-10 border-t border-white/5 py-8 mt-auto">
<div className="px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
<a className="text-white font-bold text-xl tracking-tight" href="/">sugidev</a>
<div className="flex items-center gap-6">
<a className="text-xs uppercase tracking-widest text-mist/60 hover:text-white transition-colors" href="#">Github</a>
<a className="text-xs uppercase tracking-widest text-mist/60 hover:text-white transition-colors" href="#">Linkedin</a>
<a className="text-xs uppercase tracking-widest text-mist/60 hover:text-white transition-colors" href="#">Source</a>
</div>
<p className="text-xs uppercase tracking-widest text-mist/40">
          © 2024 SUGIDEV. BUILT WITH PRECISION.
        </p>
</div>
</footer>







    </div>
  );
}
