import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AtlasPortfolioPhilosophyExtension() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<main className="min-h-screen" style={{"backgroundColor": "var(--color-bg)"}}>

<div className="w-full h-screen flex items-center justify-center p-3 md:p-5">

<section className="relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden flex flex-col items-center group">


<img alt="Modern building corner with dark glass windows" className="absolute inset-0 w-full h-full object-cover object-center z-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY9j-qkt3jxDAWreIOqfRau1e5qiyvY1X2QJJrDesnbJW8363INHAy3pgt-6k3f3IG899HImhA15HjziDjsnyCt4UBrrcdGNldYWF4BkOjEAO4GvZssh0prOnjqxmYXJEI3Vki6Yh3h8ShHGQ7F--wmNXW35onNIoQGpbhFRxpJpaEqtXK9J6A1YMiru8NjLwOF9sK2gLKoWyVV-wKY_ykAld2gXA4hSnulS-DOLmAWJLrBXIlUkJ8pQ"/>
<div className="absolute inset-0 z-[5]" style={{"background": "linear-gradient(200deg, rgba(10,10,9,0.75) 0%, rgba(10,10,9,0.4) 50%, rgba(10,10,9,0.82) 100%)"}}></div>

<div className="relative z-10 w-full h-full flex flex-col items-center">

<nav className="flex items-center justify-between py-6 px-6 md:px-10 w-full" data-purpose="primary-navigation">
<span className="text-2xl" style={{"fontFamily": "var(--font-display)", "color": "var(--color-heading)", "letterSpacing": "0.08em"}}>ATLAS</span>
<ul className="hidden md:flex items-center gap-8 text-sm" style={{"color": "rgba(237,234,227,0.8)"}}>
<li className="cursor-pointer hover:opacity-70 transition-opacity">Projects</li>
<li className="cursor-pointer hover:opacity-70 transition-opacity">Studio</li>
<li className="cursor-pointer hover:opacity-70 transition-opacity">Contact</li>
</ul>
<button className="btn-hover flex items-center rounded-full pl-4 pr-2 py-1.5 gap-2 text-sm" style={{"backgroundColor": "var(--color-accent)", "color": "#1C1808"}}>
<span>Enquire</span>
<div className="p-1 rounded-full flex items-center justify-center" style={{"backgroundColor": "rgba(28,24,8,0.15)"}}>
<i className="w-3.5 h-3.5" data-lucide="arrow-up-right"></i>
</div>
</button>
</nav>


<div className="w-full flex flex-col items-center pt-10 px-6 text-center max-w-3xl" data-purpose="hero-copy">

<div className="anim-badge flex items-center gap-2 px-4 py-2 rounded-full mb-4 w-fit" style={{"backgroundColor": "var(--color-card-glass)", "backdropFilter": "blur(10px)", "border": "1px solid var(--color-border)"}}>
<i className="w-4 h-4" data-lucide="triangle" style={{"color": "var(--color-accent)"}}></i>
<span className="text-sm" style={{"color": "var(--color-heading)"}}>Portfolio 2026</span>
</div>
<h1 className="anim-h1 text-4xl sm:text-5xl md:text-6xl lg:text-[78px] mb-3 tracking-tight leading-[1.05]" style={{"fontFamily": "var(--font-display)", "fontWeight": "400", "color": "var(--color-heading)"}}>
              Spaces designed to<br className="hidden sm:block"/> outlast trend
            </h1>
<p className="anim-p text-sm sm:text-base md:text-lg leading-relaxed max-w-xl" style={{"color": "var(--color-text)"}}>
              A studio working across residential, civic and commercial architecture — built on proportion, material honesty and light.
            </p>
</div>


<div className="anim-left absolute bottom-28 right-4 left-auto md:left-6 md:right-auto md:bottom-6 lg:bottom-10 lg:left-10 p-3 md:p-4 lg:p-5 rounded-[1.2rem] md:rounded-[1.5rem] lg:rounded-[2.2rem] flex flex-col gap-2 lg:gap-3 min-w-[150px] w-fit" data-purpose="portfolio-status" style={{"backgroundColor": "var(--color-card-glass)", "backdropFilter": "blur(20px)", "border": "1px solid var(--color-border)"}}>
<div className="flex flex-col">
<span className="text-2xl md:text-3xl tracking-tight" style={{"fontFamily": "var(--font-display)", "color": "var(--color-heading)"}}>48</span>
<span className="text-[10px] md:text-[12px] uppercase tracking-wider" style={{"color": "rgba(237,234,227,0.5)"}}>Completed Works</span>
</div>
<button className="btn-hover flex items-center rounded-full pl-1.5 pr-4 py-1.5 gap-2 self-start" style={{"backgroundColor": "var(--color-heading)", "color": "#1C1808"}}>
<div className="p-1 rounded-full flex items-center justify-center" style={{"backgroundColor": "rgba(28,24,8,0.1)"}}>
<i className="w-3.5 h-3.5" data-lucide="arrow-up-right"></i>
</div>
<span className="text-sm">View portfolio</span>
</button>
</div>



<div className="anim-corner absolute top-0 right-0 p-3 pb-5 pl-8 sm:p-4 sm:pb-6 sm:pl-10 md:p-6 md:pb-8 md:pl-14 rounded-bl-[1.5rem] sm:rounded-bl-[2rem] md:rounded-bl-[3.5rem] flex items-center gap-3 sm:gap-4 md:gap-6" data-purpose="latest-work-widget" style={{"backgroundColor": "var(--color-bg)"}}>

<div className="absolute -bottom-[1.5rem] sm:-bottom-[2rem] md:-bottom-[3.5rem] right-0 w-[1.5rem] sm:w-[2rem] md:w-[3.5rem] h-[1.5rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none">
<svg fill="none" height="100%" viewbox="0 0 56 56" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M56 0V56C56 25.0721 30.9279 0 0 0H56Z" fill="var(--color-bg)"></path>
</svg>
</div>

<div className="absolute top-0 -left-[1.5rem] sm:-left-[2rem] md:-left-[3.5rem] w-[1.5rem] sm:w-[2rem] md:w-[3.5rem] h-[1.5rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none">
<svg fill="none" height="100%" viewbox="0 0 56 56" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M56 0H0C30.9279 0 56 25.0721 56 56V0Z" fill="var(--color-bg)"></path>
</svg>
</div>
<div className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center" style={{"backgroundColor": "rgba(201,162,39,0.1)", "border": "1px solid rgba(201,162,39,0.3)"}}>
<i data-lucide="arrow-up-right" style={{"color": "var(--color-accent)"}}></i>
</div>
<div className="flex flex-col">
<span className="text-[16px] md:text-[20px]" style={{"fontFamily": "var(--font-display)", "color": "var(--color-heading)"}}>Latest work</span>
<div className="flex items-center gap-1 cursor-pointer transition-colors" style={{"color": "rgba(237,234,227,0.5)"}}>
<span className="text-[12px] md:text-[15px]">Meridian House</span>
<i className="w-3.5 h-3.5" data-lucide="chevron-right"></i>
</div>
</div>
</div>

</div>
</section>
</div>

<section className="relative w-full max-w-[1536px] mx-auto px-6 md:px-10 py-20 md:py-32">
<div className="flex flex-col gap-12">
<div className="flex justify-between items-end">
<h2 className="text-4xl md:text-6xl anim-badge" style={{"fontFamily": "var(--font-display)", "color": "var(--color-heading)"}}>Featured Projects</h2>
<button className="btn-hover text-sm uppercase tracking-widest pb-2 border-b border-[var(--color-accent)]" style={{"color": "var(--color-accent)"}}>View All</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

<div className="group cursor-pointer anim-badge">
<div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] md:rounded-[3rem] mb-6">
<img alt="The Obsidian Villa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTtAYW7RW5ikp-jfaieV9s_Kwn_Ge797NGv_MPIxXl_5umZuitQAkKyJAg7a_9ofFsFf7osccVf1Jd28FrFHGeM3QXN-bD5jnyIpe35k2UyDj4nUUu4KPBgxqlS9jfaEIOJfyHv9e9m0agy9nqNURvPdAlNgDcamIG65Mtxfddz-sAvH2PYFArJ1VTODfWglOytGnOl3sgkl0fLJ47KexYk6cl9Ae9R067e-D1tLoDiiLocmQa5me7Hw"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
</div>
<h3 className="text-2xl md:text-3xl mb-1" style={{"fontFamily": "var(--font-display)", "color": "var(--color-heading)"}}>The Obsidian Villa</h3>
<p className="text-sm uppercase tracking-wider" style={{"color": "rgba(237,234,227,0.5)"}}>Residential, 2024</p>
</div>

<div className="group cursor-pointer anim-badge" style={{"animationDelay": "0.2s"}}>
<div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] md:rounded-[3rem] mb-6 md:mt-20">
<img alt="Ethereal Civic Center" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkQCIcaFCR-W-OdZZeDG8J0VY7MkvUkIsatpmyHOGem_KbVQKr-5P-5hSpgSew-ZDV7l0k11aVF9y2LcauU3zLCgvjUISO72vMRu_p6lA9bNj-6nSeRyGaOz7rHKI5FxsprVmnynBOag10d8z9o7C6N2ap6C3X_FIZktSLf2eV7gI_82jC1VVyaBpz8oYuLCB1d0xetYzzKI_MgtfGSWYktX5OilgvPetkbZ6m0gj3Im-PVpwIeC2ogA"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
</div>
<h3 className="text-2xl md:text-3xl mb-1" style={{"fontFamily": "var(--font-display)", "color": "var(--color-heading)"}}>Ethereal Civic Center</h3>
<p className="text-sm uppercase tracking-wider" style={{"color": "rgba(237,234,227,0.5)"}}>Public Space, 2025</p>
</div>
</div>
</div>
</section>


<section className="relative w-full max-w-[1536px] mx-auto px-6 md:px-10 py-20 md:py-32">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="anim-left">
<div className="relative rounded-[1.5rem] md:rounded-[3rem] overflow-hidden aspect-square lg:aspect-[4/5]">
<img alt="Architectural Detail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSHVItYT7KCl9KoJcimDo5nhqo3NsHTHcamrSyiIiPb0cun519bGdrRmt3JwQyvoss2pwU7cUNOXCzJKP5l0oJNWTaNoADXUUWk2tf1YuEwAPCxKxvAI7kJxQoI2nT8_-UcwY7L2dATLEo1woXGWNdscnOpjTkXQ95UdWLphcgstvCV_FwktUuLJICQG7VVOea8_aDs2XgMdZH0MG8yg_Zn6GpIjrCfa_76wIX2vI4UOIFGOvp9nSi0w"/>
</div>
</div>
<div className="flex flex-col gap-8 lg:pl-12 anim-badge">
<h2 className="text-4xl md:text-6xl lg:text-7xl leading-tight" style={{"fontFamily": "var(--font-display)", "color": "var(--color-heading)"}}>
        Built on proportion, material honesty, and light.
      </h2>
<p className="text-lg leading-relaxed" style={{"color": "var(--color-text)"}}>
        We believe that architecture should transcend the ephemeral nature of trends. Our studio focuses on the fundamental elements of space—how light interacts with raw materials, how proportions create a sense of belonging, and how structure can endure for generations. Every project is a dialogue between the site's history and its future potential.
      </p>
<div className="w-20 h-px" style={{"backgroundColor": "var(--color-accent)"}}></div>
</div>
</div>
</section>


<section className="relative w-full max-w-[1536px] mx-auto px-6 md:px-10 py-20 md:py-32">
<div className="text-center mb-16 anim-badge">
<h2 className="text-4xl md:text-6xl mb-4" style={{"fontFamily": "var(--font-display)", "color": "var(--color-heading)"}}>Our Services</h2>
<p className="text-sm uppercase tracking-[0.2em]" style={{"color": "var(--color-accent)"}}>Expertise across scales</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="anim-badge p-8 md:p-10 rounded-[2rem] flex flex-col gap-6" style={{"backgroundColor": "var(--color-card-glass)", "backdropFilter": "blur(10px)", "border": "1px solid var(--color-border)"}}>
<div className="w-12 h-12 rounded-full flex items-center justify-center" style={{"backgroundColor": "rgba(201,162,39,0.1)", "border": "1px solid rgba(201,162,39,0.3)"}}>
<i data-lucide="home" style={{"color": "var(--color-accent)"}}></i>
</div>
<h3 className="text-2xl" style={{"fontFamily": "var(--font-display)", "color": "var(--color-heading)"}}>Residential</h3>
<p className="text-sm leading-relaxed" style={{"color": "var(--color-text)"}}>Bespoke living environments tailored to individual lifestyles, focusing on intimacy and flow.</p>
</div>

<div className="anim-badge p-8 md:p-10 rounded-[2rem] flex flex-col gap-6" style={{"backgroundColor": "var(--color-card-glass)", "backdropFilter": "blur(10px)", "border": "1px solid var(--color-border)", "animationDelay": "0.1s"}}>
<div className="w-12 h-12 rounded-full flex items-center justify-center" style={{"backgroundColor": "rgba(201,162,39,0.1)", "border": "1px solid rgba(201,162,39,0.3)"}}>
<i data-lucide="building-2" style={{"color": "var(--color-accent)"}}></i>
</div>
<h3 className="text-2xl" style={{"fontFamily": "var(--font-display)", "color": "var(--color-heading)"}}>Commercial</h3>
<p className="text-sm leading-relaxed" style={{"color": "var(--color-text)"}}>Dynamic workspaces and retail environments that foster productivity and brand identity.</p>
</div>

<div className="anim-badge p-8 md:p-10 rounded-[2rem] flex flex-col gap-6" style={{"backgroundColor": "var(--color-card-glass)", "backdropFilter": "blur(10px)", "border": "1px solid var(--color-border)", "animationDelay": "0.2s"}}>
<div className="w-12 h-12 rounded-full flex items-center justify-center" style={{"backgroundColor": "rgba(201,162,39,0.1)", "border": "1px solid rgba(201,162,39,0.3)"}}>
<i data-lucide="landmark" style={{"color": "var(--color-accent)"}}></i>
</div>
<h3 className="text-2xl" style={{"fontFamily": "var(--font-display)", "color": "var(--color-heading)"}}>Civic</h3>
<p className="text-sm leading-relaxed" style={{"color": "var(--color-text)"}}>Public institutions and community spaces designed to inspire and serve the collective good.</p>
</div>
</div>
</section>
</main>




    </div>
  );
}
