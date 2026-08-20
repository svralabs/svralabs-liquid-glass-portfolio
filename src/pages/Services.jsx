import ServiceCard from '../components/ServiceCard';
import servicesData from '../data/services.json';

export default function Services() {
  return (
    <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-6 lg:px-8 lg:py-8">
      <main className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">What I do</p>
          <h1 className="mt-5 text-4xl leading-tight tracking-[-0.03em] text-white lg:text-5xl">Services built around <span className="font-mono italic text-white/70">shipping.</span></h1>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">Focused engagements, clear scope, and code your team can maintain long after I'm gone.</p>
        </div>
        <div className="flex flex-col gap-4 lg:col-span-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </main>
      <p className="mt-10 text-center font-mono text-[11px] text-white/40">© 2026 sugi.dev — built at 60fps.</p>
    </div>
  );
}
