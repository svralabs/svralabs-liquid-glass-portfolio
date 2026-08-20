import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import TimelineItem from '../components/TimelineItem';
import workData from '../data/work.json';

export default function Work() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(workData);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <div className="fixed inset-0 z-0 bg-black">
        <img
          alt=""
          className="bg-photo h-full w-full object-cover"
          src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
        />
        <div className="bg-sheen absolute inset-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-6 lg:px-8 lg:py-8">
        <nav className="flex items-center justify-between">
          <Link className="flex items-center gap-2.5" to="/">
            <span className="liquid-glass-strong flex h-8 w-8 items-center justify-center rounded-lg">
              <span className="glass-content font-mono text-sm font-bold tracking-tighter text-white">s/</span>
            </span>
            <span className="font-mono text-lg font-medium tracking-tight text-white">
              sugi<span className="text-white/50">.dev</span>
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="liquid-glass hidden items-center gap-1 rounded-full px-2 py-1.5 sm:flex">
              <span className="glass-content flex items-center gap-1">
                <Link className="rounded-full px-3 py-1 text-sm text-white/70 transition-colors hover:text-white" to="/">
                  Home
                </Link>
                <Link className="rounded-full px-3 py-1 text-sm text-white/70 transition-colors hover:text-white" to="/services">
                  Services
                </Link>
                <Link className="rounded-full px-3 py-1 text-sm text-white transition-colors hover:text-white" to="/work">
                  Work
                </Link>
                <Link className="rounded-full px-3 py-1 text-sm text-white/70 transition-colors hover:text-white" to="/about">
                  About
                </Link>
              </span>
            </div>
            <Link
              className="liquid-glass-strong flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white transition-transform hover:scale-105 active:scale-95"
              to="/contact"
            >
              <span className="glass-content flex items-center gap-2">
                <Mail className="h-4 w-4" />Get in touch
              </span>
            </Link>
          </div>
        </nav>
        <main className="mt-14">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">Selected work</p>
          <h1 className="mt-5 max-w-2xl text-4xl leading-tight tracking-[-0.03em] text-white lg:text-5xl">
            Things I've designed and <span className="font-mono italic text-white/70">shipped.</span>
          </h1>
          <div className="mt-12 flex flex-col gap-6">
            {items.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
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
