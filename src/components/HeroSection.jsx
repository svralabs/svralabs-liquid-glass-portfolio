import React from 'react';

export default function HeroSection() {
  return (
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
  );
}
