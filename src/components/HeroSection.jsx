import React from 'react';

export default function HeroSection() {
  const stats = [
    { label: 'Experience', value: '6+ Years', description: 'Shipping Excellence' },
    { label: 'Output', value: '40+ Projects', description: 'Concept to Scale' },
    { label: 'Base', value: 'Tokyo', description: 'GMT+9' },
  ];

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
        {stats.map((stat, index) => (
          <div key={index} className={`flex flex-col items-center ${index > 0 ? 'border-x border-white/10' : ''}`}>
            <span className="font-code-label text-code-label text-outline uppercase mb-2">{stat.label}</span>
            <span className="font-headline-md text-headline-md text-primary">{stat.value}</span>
            <span className="font-code-sm text-code-sm text-on-surface-variant mt-1">{stat.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
