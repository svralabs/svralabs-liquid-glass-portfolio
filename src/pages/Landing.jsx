import React from 'react';
import HeroSection from '../components/HeroSection';
import Marquee from '../components/Marquee';
import ShowcaseCard from '../components/ShowcaseCard';

const projects = [
  {
    id: 1,
    title: 'The future of wealth management.',
    description: 'Full-stack development and system architecture for a premium asset tracking platform.',
    tags: ['Aster', 'Fintech'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhKJ8GA6gUPX9De3pf9JGRq3MouDNMzRHH_eBp6X73ivb01-_G1c1XFFOfXmDqMimh5m2J4uObL5DnSn09dEQxaeyG8MqnWjhhCPGRQP4llhKDFvXWJzOaAkr63TXf-RTHWnHyrzCC3Sw4FEK_TK3L4Lax1gMtMOKby14aSi1smY_GAZ-uEIbmIJVn-CTPEyrwfLifMQjjISpTexS9h5MgTMdsPwM1cIkmqjUcgp09mVx72ix60LWn',
    alt: 'A high-contrast monochrome photograph of a sleek, minimalist mobile application interface displayed on a futuristic device.'
  },
  {
    id: 2,
    title: 'Tokyo Brutalist',
    description: 'Architectural photography series capturing the raw beauty of Tokyo\'s concrete jungle.',
    tags: ['Kettle', 'Photography'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXvvN6jtzliRL1g2pehGK-rzIBEisWSvyiPD1x_J4-As87fmXsrXlWn2gj34HEWW9tElDfW1Y5DTtDf3yRrZd8KuP67iVgYGtUUvrhxJpjKQMm-qBXVo_ruIFVpYxj1MQTMv4BAHIkEW3xZj11S8KHOY-8e6ddVIKLL0ia1GPXh0-NvtJ9CvEDfgfSNcwu7VuCxsQtlUinEpdfvKnjudtMKMQjEwm6wECLbERfB5uPopS4YqMcB-QW',
    alt: 'A minimalist architectural shot of a brutalist concrete building in Tokyo, captured in black and white.'
  }
];

export default function Landing() {
  return (
    <div className="relative min-h-screen">
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
        <HeroSection />

        <Marquee />

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
            {projects.map((project) => (
              <ShowcaseCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
