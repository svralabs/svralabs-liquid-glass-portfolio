import {Globe as ArrowUpRight} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const workItems = [
  {
    title: 'Aster',
    description: 'A cross-platform component library and token pipeline adopted by four product teams, cutting UI build time in half.',
    category: 'Design system',
    year: '2026',
    image: 'https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg',
    reverse: false
  },
  {
    title: 'Kettle',
    description: 'A collaborative document editor with conflict-free sync, presence, and offline support built on CRDTs.',
    category: 'Realtime editor',
    year: '2025',
    image: 'https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg',
    reverse: true
  },
  {
    title: 'Nori',
    description: 'A zero-config toolkit that scaffolds, lints, and deploys projects with one command — 3k+ stars.',
    category: 'Developer CLI',
    year: '2024',
    image: 'https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg',
    reverse: false
  }
];

export default function WorkPage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  return (
    <div className="min-h-screen bg-black">
      <div className="fixed inset-0 z-0">
        <img
          alt=""
          className="h-full w-full object-cover"
          src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
        />
        <div className="absolute inset-0 bg-sheen"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-6 lg:px-8 lg:py-8">
        <nav className="flex items-center justify-between">
          <a className="flex items-center gap-2.5" href="/">
            <span className="liquid-glass-strong flex h-8 w-8 items-center justify-center rounded-lg">
              <span className="glass-content font-mono text-sm font-bold tracking-tighter text-white">s/</span>
            </span>
            <span className="font-mono text-lg font-medium tracking-tight text-white">sugi<span className="text-white/50">.dev</span></span>
          </a>
          <div className="flex items-center gap-3">
            <div className="liquid-glass hidden items-center gap-1 rounded-full px-2 py-1.5 sm:flex">
              <span className="glass-content flex items-center gap-1">
                <a className="rounded-full px-3 py-1 text-sm text-white/70 transition-colors hover:text-white" href="/">Home</a>
                <a className="rounded-full px-3 py-1 text-sm text-white/70 transition-colors hover:text-white" href="/services">Services</a>
                <a className="rounded-full px-3 py-1 text-sm text-white transition-colors hover:text-white" href="/work">Work</a>
                <a className="rounded-full px-3 py-1 text-sm text-white/70 transition-colors hover:text-white" href="/about">About</a>
              </span>
            </div>
            <a className="liquid-glass-strong flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white transition-transform hover:scale-105 active:scale-95" href="/contact">
              <span className="glass-content flex items-center gap-2">
                <span className="material-symbols-outlined">mail</span>Get in touch
              </span>
            </a>
          </div>
        </nav>

        <main className="mt-14">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">Selected work</p>
          <h1 className="mt-5 max-w-2xl text-4xl leading-tight tracking-[-0.03em] text-white lg:text-5xl">
            Things I've designed and <span className="font-mono italic text-white/70">shipped.</span>
          </h1>

          <div className="mt-12 flex flex-col gap-6">
            {workItems.map((item, index) => (
              <motion.article
                key={index}
                className={`liquid-glass flex flex-col ${item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} overflow-hidden rounded-[2rem]`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-56 w-full lg:h-auto lg:w-1/2">
                  <img
                    alt={`${item.title} preview`}
                    className="img-mono absolute inset-0 h-full w-full object-cover"
                    src={item.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="glass-content flex w-full flex-col justify-center p-8 lg:w-1/2">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-white/50">
                    {item.category} · {item.year}
                  </span>
                  <h2 className="mt-2 text-2xl font-medium text-white">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{item.description}</p>
                  <a
                    className="group mt-5 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
                    href="#"
                  >
                    View case study <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </main>

        <footer className="mt-20 pb-10">
          <p className="text-center font-mono text-[11px] text-white/40">© 2026 sugi.dev — built at 60fps.</p>
        </footer>
      </div>
    </div>
  );
}
