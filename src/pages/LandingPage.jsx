import { useState, useEffect } from 'react';

export default function LandingPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative min-h-screen bg-surface">
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
                <img className="w-full h-full object-cover monochrome-img" alt="A high-contrast monochrome photograph of a sleek, minimalist mobile application interface displayed on a futuristic device." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhKJ8GA6gUPX9De3pf9JGRq3MouDNMzRHH_eBp6X73ivb01-_G1c1XFFOfXmDqMimh5m2J4uObL5DnSn09dEQxaeyG8MqnWjhhCPGRQP4llhKDFvXWJzOaAkr63TXf-RTHWnHyrzCC3Sw4FEK_TK3L4Lax1gMtMOKby14aSi1smY_GAZ-uEIbmIJVn-CTPEyrwfLifMQjjISpTexS9h5MgTMdsPwM1cIkmqjUcgp09mVx72ix60LWn"/>
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
                  <img className="w-full h-full object-cover monochrome-img" alt="A minimalist architectural shot of a brutalist concrete building in Tokyo." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXvvN6jtzliRL1g2pehGK-rzIBEisWSvyiPD1x_J4-As87fmXsrXlWn2gj34HEWW9tElDfW1Y5DTtDf3yRrZd8KuP67iVgYGtUUvrhxJpjKQMm-qBXVo_ruIFVpYxj1MQTMv4BAHIkEW3xZj11S8KHOY-8e6ddVIKLL0ia1GPXh0-NvtJ9CvEDfgfSNcwu7VuCxsQtlUinEpdfvKnjudtMKMQjEwm6wECLbERfB5uPopS4YqMcB-QW"/>
                </div>
                <div className="p-8">
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full liquid-glass-strong font-code-sm text-code-sm text-primary">Kettle</span>
                    <span className="px-3 py-1 rounded-full bg-white/5 font-code-sm text-code-sm text-outline">E-commerce</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
