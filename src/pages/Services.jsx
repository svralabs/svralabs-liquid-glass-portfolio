import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';

const services = [
  {
    number: '01',
    icon: 'boxes',
    title: 'Product engineering',
    description: 'Full-stack web apps built end to end, from data model to pixel.'
  },
  {
    number: '02',
    icon: 'component',
    title: 'Design systems',
    description: 'Component libraries and tokens teams actually keep using.'
  },
  {
    number: '03',
    icon: 'gauge',
    title: 'Performance audits',
    description: 'Find what\'s slow, fix it, and prove the win with numbers.'
  },
  {
    number: '04',
    icon: 'zap',
    title: 'Prototyping',
    description: 'Validate ideas fast with real, interactive code — not slides.'
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-black">
      <div className="fixed inset-0 z-0 bg-black">
        <img alt="" className="bg-photo h-full w-full object-cover" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg" />
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
                <a className="rounded-full px-3 py-1 text-sm text-white transition-colors hover:text-white" href="services.html">Services</a>
                <a className="rounded-full px-3 py-1 text-sm text-white/70 transition-colors hover:text-white" href="work.html">Work</a>
                <a className="rounded-full px-3 py-1 text-sm text-white/70 transition-colors hover:text-white" href="about.html">About</a>
              </span>
            </div>
            <a className="liquid-glass-strong flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white transition-transform hover:scale-105 active:scale-95" href="contact.html">
              <span className="glass-content flex items-center gap-2"><span className="material-symbols-outlined h-4 w-4">mail</span>Get in touch</span>
            </a>
          </div>
        </nav>
        <main className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">What I do</p>
            <h1 className="mt-5 text-4xl leading-tight tracking-[-0.03em] text-white lg:text-5xl">Services built around <span className="font-mono italic text-white/70">shipping.</span></h1>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">Focused engagements, clear scope, and code your team can maintain long after I'm gone.</p>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </main>
        <div className="mt-10 lg:col-span-12">
          <ContactForm />
        </div>
        <p className="mt-10 text-center font-mono text-[11px] text-white/40">© 2026 sugi.dev — built at 60fps.</p>
      </div>
    </div>
  );
}
