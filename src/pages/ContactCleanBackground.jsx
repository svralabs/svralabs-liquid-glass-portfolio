import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactCleanBackground() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md">
<div className="flex justify-between items-center max-w-container-max mx-auto px-margin-desktop h-20">
<div className="font-h1 text-h1 text-ember tracking-tighter">sugidev</div>
<div className="hidden md:flex items-center space-x-12">
<a className="font-nav-link text-nav-link uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Work</a>
<a className="font-nav-link text-nav-link uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Services</a>
<a className="font-nav-link text-nav-link uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">About</a>
<a className="font-nav-link text-nav-link uppercase text-primary border-b border-primary pb-1" href="#">Contact</a>
</div>
<button className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-nav-link text-nav-link uppercase inner-stroke hover:scale-105 active:scale-95 transition-all duration-300">
                Hire Me
            </button>
</div>
</nav>
<main className="pt-32 pb-section-gap-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">

<header className="mb-section-gap-sm">
<div className="reveal-up">
<span className="font-overline text-overline text-ember uppercase mb-stack-xs block">Availability: Q4 2024</span>
<h1 className="kanit-black text-[15vw] md:text-[10vw] leading-[0.9] tracking-tighter text-on-surface uppercase italic">
                    Let's<br/>Talk
                </h1>
</div>
</header>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

<aside className="lg:col-span-5 space-y-16 reveal-up" style={{"animationDelay": "0.2s"}}>

<div>
<h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-stack-md">Direct Link</h3>
<a className="group flex items-center text-[2rem] md:text-[2.5rem] font-kanit italic text-on-surface hover:text-ember transition-colors" href="mailto:hello@sugidev.tech">
                        hello@sugidev.tech
                        <span className="material-symbols-outlined ml-4 text-ember group-hover:translate-x-2 transition-transform duration-300">arrow_outward</span>
</a>
</div>

<div>
<h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-6">How can I help?</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<label className="flex items-center space-x-4 p-4 rounded-xl bg-ink-soft border border-surface-variant/20 cursor-pointer hover:border-ember/40 transition-colors group">
<input className="custom-checkbox w-5 h-5 rounded border-surface-variant/50 bg-background text-ember focus:ring-ember" type="checkbox"/>
<span className="font-body-md text-on-surface group-hover:text-primary transition-colors">Frontend Architecture</span>
</label>
<label className="flex items-center space-x-4 p-4 rounded-xl bg-ink-soft border border-surface-variant/20 cursor-pointer hover:border-ember/40 transition-colors group">
<input className="custom-checkbox w-5 h-5 rounded border-surface-variant/50 bg-background text-ember focus:ring-ember" type="checkbox"/>
<span className="font-body-md text-on-surface group-hover:text-primary transition-colors">UI Design System</span>
</label>
<label className="flex items-center space-x-4 p-4 rounded-xl bg-ink-soft border border-surface-variant/20 cursor-pointer hover:border-ember/40 transition-colors group">
<input className="custom-checkbox w-5 h-5 rounded border-surface-variant/50 bg-background text-ember focus:ring-ember" type="checkbox"/>
<span className="font-body-md text-on-surface group-hover:text-primary transition-colors">Full-stack Dev</span>
</label>
<label className="flex items-center space-x-4 p-4 rounded-xl bg-ink-soft border border-surface-variant/20 cursor-pointer hover:border-ember/40 transition-colors group">
<input className="custom-checkbox w-5 h-5 rounded border-surface-variant/50 bg-background text-ember focus:ring-ember" type="checkbox"/>
<span className="font-body-md text-on-surface group-hover:text-primary transition-colors">Technical Audit</span>
</label>
</div>
</div>

<div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border border-surface-variant/20 grayscale hover:grayscale-0 transition-all duration-700">
<img className="w-full h-full object-cover" data-alt="A moody, high-contrast black and white architectural photograph of a brutalist concrete building with sharp shadows and glowing ember-colored lights in the windows. The scene is shot during a dark, misty evening in a futuristic city like Tokyo or Berlin. The lighting is dramatic and cinematic, echoing the professional and technical sugidev brand identity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPJW4ntn7cfq-NK6sXpOK-oljo0kpYwiqnmqHNP-pVkHHrhMRjEY7IaVUDdtyhboZF1Tosh1B4pQ7viLVlyz0CGSYynq5IcY4n_8d0TWhB3RooaWuy8j_pUZV4pOld2UrxEc4cyYM2eOfzUzEzgk7-HQaZCZxG6GpEJgVmvehATSOZYp3QbtcF0kP-ipxbvAxymPDhNa9QmlSxMq4xefBHR4mWUWhTBGHPRYL3QhKKsq9R8oUKowvI"/>
<div className="absolute bottom-6 left-6 flex items-center space-x-2">
<span className="material-symbols-outlined text-ember">location_on</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest">Berlin, DE / Remote</span>
</div>
</div>
</aside>

<div className="lg:col-span-7 bg-ink-soft p-margin-mobile md:p-12 rounded-lg border border-surface-variant/10 reveal-up" style={{"animationDelay": "0.4s"}}>
<form action="#" className="space-y-8" method="POST">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase block mb-3" htmlFor="name">Full Name</label>
<input className="w-full bg-background border-b-2 border-surface-variant/30 text-on-surface px-0 py-4 focus:outline-none focus:border-ember focus:ring-0 transition-all placeholder:text-surface-variant/40" id="name" name="name" placeholder="John Doe" required="" type="text"/>
</div>

<div className="group">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase block mb-3" htmlFor="email">Email Address</label>
<input className="w-full bg-background border-b-2 border-surface-variant/30 text-on-surface px-0 py-4 focus:outline-none focus:border-ember focus:ring-0 transition-all placeholder:text-surface-variant/40" id="email" name="email" placeholder="john@example.com" required="" type="email"/>
</div>
</div>

<div className="group">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase block mb-3" htmlFor="subject">Subject / Project Title</label>
<input className="w-full bg-background border-b-2 border-surface-variant/30 text-on-surface px-0 py-4 focus:outline-none focus:border-ember focus:ring-0 transition-all placeholder:text-surface-variant/40" id="subject" name="subject" placeholder="New Project Inquiry" type="text"/>
</div>

<div className="group">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase block mb-3" htmlFor="message">Tell me about it</label>
<textarea className="w-full bg-background border-b-2 border-surface-variant/30 text-on-surface px-0 py-4 focus:outline-none focus:border-ember focus:ring-0 transition-all resize-none placeholder:text-surface-variant/40" id="message" name="message" placeholder="What are we building together?" required="" rows="5"></textarea>
</div>

<div className="pt-4">
<button className="w-full bg-gradient-to-r from-ember to-ember-deep text-on-primary-fixed font-h1 text-h1 uppercase py-6 rounded-full inner-stroke hover:scale-[1.01] active:scale-95 transition-all duration-300 flex justify-center items-center group" type="submit">
                            Submit Inquiry
                            <span className="material-symbols-outlined ml-4 group-hover:translate-x-2 transition-transform">send</span>
</button>
<p className="text-center font-caption text-caption text-secondary/40 mt-6 uppercase">Typical response time: 24-48 hours</p>
</div>
</form>
</div>
</div>
</main>

<footer className="bg-ink border-t border-surface-variant/10 w-full py-section-gap-sm">
<div className="flex flex-col items-center justify-center space-y-stack-md max-w-container-max mx-auto px-margin-desktop">
<div className="font-h1 text-h1 text-ember">sugidev</div>
<div className="flex space-x-8">
<a className="font-body-md text-secondary hover:text-ember transition-colors duration-300" href="#">Github</a>
<a className="font-body-md text-secondary hover:text-ember transition-colors duration-300" href="#">LinkedIn</a>
<a className="font-body-md text-secondary hover:text-ember transition-colors duration-300" href="#">Twitter</a>
<a className="font-body-md text-secondary hover:text-ember transition-colors duration-300" href="#">Codepen</a>
</div>
<p className="font-body-md text-body-md text-secondary/50">© 2024 sugidev. Built with precision.</p>
</div>
</footer>



    </div>
  );
}
