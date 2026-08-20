import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function InsightsCleanBackground() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md">
<div className="flex justify-between items-center max-w-container-max mx-auto px-margin-desktop h-20">
<a className="font-h1 text-h1 text-ember tracking-tighter" href="/">sugidev</a>
<div className="hidden md:flex items-center space-x-8">
<a className="font-nav-link text-nav-link uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Work</a>
<a className="font-nav-link text-nav-link uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Services</a>
<a className="font-nav-link text-nav-link uppercase text-primary border-b border-primary pb-1" href="#">Insights</a>
<a className="font-nav-link text-nav-link uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">About</a>
<a className="font-nav-link text-nav-link uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Contact</a>
</div>
<button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-nav-link uppercase ember-glow hover:scale-105 active:scale-95 transition-all">
                Hire Me
            </button>
</div>
</nav>
<main className="relative pt-32">

<section className="max-w-container-max mx-auto px-margin-desktop mb-section-gap-sm relative">
<div className="flex flex-col">
<span className="font-overline text-overline text-ember mb-4 block">KNOWLEDGE BASE</span>
<h1 className="kanit-title text-[15vw] md:text-[20vw] uppercase text-on-surface select-none">
                    INSIGHTS
                </h1>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md mt-stack-md border-t border-surface-variant/20 pt-8">
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                    Deep dives into engineering, architectural patterns, and the future of human-computer interaction. Precision-crafted thoughts for the modern developer.
                </p>
<div className="flex justify-start md:justify-end items-end">
<div className="flex space-x-4">
<div className="flex items-center space-x-2 bg-ink-soft border border-surface-variant/10 px-4 py-2 rounded-full">
<span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
<span className="font-label-sm text-label-sm text-on-surface">32 ARTICLES</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-container-max mx-auto px-margin-desktop mb-section-gap-lg">
<div className="flex flex-col">

<a className="chapter-item group relative py-12 border-b border-surface-variant/20 flex items-center justify-between transition-all duration-500 hover:px-8" href="#">
<div className="flex items-baseline space-x-12 z-10">
<span className="font-display-hero-mobile text-display-hero-mobile text-ember/20 group-hover:text-ember transition-colors duration-500">01</span>
<div className="flex flex-col">
<h2 className="font-h1 text-h1 md:text-5xl group-hover:text-ember transition-colors duration-500">Optimizing React Performance</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">Beyond memoization: Strategies for enterprise-scale architecture.</p>
</div>
</div>
<div className="hidden md:flex flex-col items-end z-10">
<span className="font-label-sm text-label-sm text-on-surface-variant">ENGINEERING</span>
<span className="font-caption text-caption text-secondary/40 mt-1 uppercase">12 MIN READ</span>
</div>

<div className="hover-image pointer-events-none opacity-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-52 overflow-hidden rounded-lg transition-all duration-500 scale-75 z-20">
<img className="w-full h-full object-cover" data-alt="A macro close-up of a high-tech circuit board with neon ember light trails flowing through digital pathways. The background is a deep charcoal ink-black, creating a high-contrast industrial tech aesthetic. The lighting is moody and directional, highlighting the metallic textures of the capacitors and processors." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb34s6W21ni4cEvdwC5zsut4rvo5v5pZCj-MOFb2RqL7jR3weUJpoYImWNy5y0DWpmfKPX4Y8_WLA5iomdD_jYCwigikqqasgl46pXE_CP81FjPa8B8H0a0TE2EL6FFU85zZLpKCQ4KkvozhnJT2oTtq7cu4CNR-MWYubHZWIe0i4CMEoEaziHH-P2iKAlw3PXChK97s-m3yeVO78zAaLGj-WrJoN77HQjG02aMR_WYLLw70tlQBvK"/>
</div>
</a>

<a className="chapter-item group relative py-12 border-b border-surface-variant/20 flex items-center justify-between transition-all duration-500 hover:px-8" href="#">
<div className="flex items-baseline space-x-12 z-10">
<span className="font-display-hero-mobile text-display-hero-mobile text-ember/20 group-hover:text-ember transition-colors duration-500">02</span>
<div className="flex flex-col">
<h2 className="font-h1 text-h1 md:text-5xl group-hover:text-ember transition-colors duration-500">The Future of CSS: Container Queries</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">A paradigm shift from viewport-driven to context-driven design.</p>
</div>
</div>
<div className="hidden md:flex flex-col items-end z-10">
<span className="font-label-sm text-label-sm text-on-surface-variant">FRONTEND</span>
<span className="font-caption text-caption text-secondary/40 mt-1 uppercase">08 MIN READ</span>
</div>
<div className="hover-image pointer-events-none opacity-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-52 overflow-hidden rounded-lg transition-all duration-500 scale-75 z-20">
<img className="w-full h-full object-cover" data-alt="A minimalist abstract 3D render of layered translucent glass panels reflecting vibrant ember orange and deep ink black gradients. The composition uses geometric brutalist-lite structures that create a sense of digital depth and organizational precision. Soft volumetric lighting pierces through the glass layers." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSEmV1obuvnPgnNuzpj_NvmNJhN0J12vnTbzdgOGdynCsFGemXns74jsbo0-Es0-VWYZRXxY696S0ukJ2NchDYrV_HXkQqauDIMCQI5MC1MWFY36mTe4qI4D5bZijnO7GNExB5_eMx2LxFNkWEWcTafjl6tBVV7DzX3XVrtAbT5LkwllAP9ZwjbEJYUIt3LA-A5wrTrmrfRWooPSP6ZsEo_ES16OSK09glYLod9z4UNcr3duLjLtk1"/>
</div>
</a>

<a className="chapter-item group relative py-12 border-b border-surface-variant/20 flex items-center justify-between transition-all duration-500 hover:px-8" href="#">
<div className="flex items-baseline space-x-12 z-10">
<span className="font-display-hero-mobile text-display-hero-mobile text-ember/20 group-hover:text-ember transition-colors duration-500">03</span>
<div className="flex flex-col">
<h2 className="font-h1 text-h1 md:text-5xl group-hover:text-ember transition-colors duration-500">Rust for JavaScript Developers</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">Bridging the gap between the web and systems programming.</p>
</div>
</div>
<div className="hidden md:flex flex-col items-end z-10">
<span className="font-label-sm text-label-sm text-on-surface-variant">SYSTEMS</span>
<span className="font-caption text-caption text-secondary/40 mt-1 uppercase">15 MIN READ</span>
</div>
<div className="hover-image pointer-events-none opacity-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-52 overflow-hidden rounded-lg transition-all duration-500 scale-75 z-20">
<img className="w-full h-full object-cover" data-alt="Close-up of molten metal cooling down into a structured lattice, glowing with intense ember heat against a dark, volcanic rock background. The texture is rough and industrial, representing the strength and safety of low-level systems programming. Deep blacks and fiery oranges dominate the palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUdiS_bi0LIyKWyhVQf36RQwPzTr05HI65AcRuDPilAj5p5JbENcWkVMfocf5TbmZcQXkX-kjON6-GaCnQ5twE_oBIvmrbAzvUn6EZFkx_deYS-_hoUWv4ZPZsQl9z8rSLff5UxTDGE8-Xxv1LtAoMo2OlgKK4t6Yo0Ok_kvo7N1XFzKgAu3C1h3qRPddYcZim06pb0s1mi9JEem-fZq-SPyQaxNLWKX03zr5MAPCCpwTkvfuPc2U_"/>
</div>
</a>

<a className="chapter-item group relative py-12 border-b border-surface-variant/20 flex items-center justify-between transition-all duration-500 hover:px-8" href="#">
<div className="flex items-baseline space-x-12 z-10">
<span className="font-display-hero-mobile text-display-hero-mobile text-ember/20 group-hover:text-ember transition-colors duration-500">04</span>
<div className="flex flex-col">
<h2 className="font-h1 text-h1 md:text-5xl group-hover:text-ember transition-colors duration-500">Generative UI with WebGL</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">Crafting immersive experiences using custom fragment shaders.</p>
</div>
</div>
<div className="hidden md:flex flex-col items-end z-10">
<span className="font-label-sm text-label-sm text-on-surface-variant">GRAPHICS</span>
<span className="font-caption text-caption text-secondary/40 mt-1 uppercase">10 MIN READ</span>
</div>
<div className="hover-image pointer-events-none opacity-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-52 overflow-hidden rounded-lg transition-all duration-500 scale-75 z-20">
<img className="w-full h-full object-cover" data-alt="A swirling nebula of digital particles in ember and gold tones flowing across a dark ink-black void. The particles form fluid, organic shapes that feel mathematical and generative. High-end cinematic lighting with a soft bloom effect and a grainy, tactile texture overlay." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7PDoT3tkduVdPHB97wu0QyoZ4kM1627zcxYhP_RQ9tfvBiId8eUN0aohOgvC74sViUvZo6iGfYpWyY4a2qtbiC6frZFa3-0B90XQ6JnNWpKlG85hYKXYC_dKjB4uBXzQIj3h8doJQWA-D2mK8KliFOH1OBYz78cCSB-Wjb1cxtEmppWfJEAEOSCp42tRBg93f3NWi32_nQvF09lo4gUvJ6YhMwcGG3SlGG-UrdW6aoMNJtgWm5v8-"/>
</div>
</a>
</div>
</section>

<section className="max-w-container-max mx-auto px-margin-desktop mb-section-gap-lg">
<div className="bg-ink-soft rounded-lg p-margin-desktop md:p-section-gap-sm relative overflow-hidden group">

<div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
<span className="font-overline text-overline text-ember mb-6">STAY UPDATED</span>
<h2 className="font-h1 text-4xl md:text-6xl mb-8">Curated thoughts, delivered monthly.</h2>
<div className="w-full flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
<input className="flex-1 bg-background/50 border border-surface-variant/20 rounded-full px-8 py-4 focus:outline-none focus:border-ember transition-colors font-body-md" placeholder="YOUR EMAIL ADDRESS" type="email"/>
<button className="bg-primary-container text-on-primary-container px-10 py-4 rounded-full font-nav-link uppercase ember-glow hover:scale-105 active:scale-95 transition-all">
                            Join the Index
                        </button>
</div>
<p className="font-caption text-caption text-on-surface-variant/60 mt-6 uppercase">No spam. Just high-density technical insights.</p>
</div>
</div>
</section>
</main>

<footer className="bg-ink w-full py-section-gap-sm">
<div className="flex flex-col items-center justify-center space-y-stack-md max-w-container-max mx-auto px-margin-desktop border-t border-surface-variant/10 pt-16">
<div className="font-h1 text-h1 text-ember">sugidev</div>
<div className="flex space-x-8">
<a className="font-body-md text-body-md text-secondary hover:text-ember transition-colors duration-300" href="#">Github</a>
<a className="font-body-md text-body-md text-secondary hover:text-ember transition-colors duration-300" href="#">LinkedIn</a>
<a className="font-body-md text-body-md text-secondary hover:text-ember transition-colors duration-300" href="#">Twitter</a>
<a className="font-body-md text-body-md text-secondary hover:text-ember transition-colors duration-300" href="#">Codepen</a>
</div>
<p className="font-body-md text-body-md text-on-surface-variant/40 mt-8">
                © 2024 sugidev. Built with precision.
            </p>
</div>
</footer>


    </div>
  );
}
