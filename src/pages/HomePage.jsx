import {Globe as ArrowUpRight, Folder, Globe as Terminal} from 'lucide-react';

const projects = [
  { title: 'Aster', description: 'Design system & component library', tags: ['React', 'TypeScript', 'CSS'] },
  { title: 'Liquid Glass', description: 'UI component library', tags: ['Vue', 'Sass', 'JavaScript'] },
  { title: 'Portfolio', description: 'Personal website', tags: ['Next.js', 'Tailwind', 'Framer Motion'] },
  { title: 'Dashboard', description: 'Analytics platform', tags: ['Angular', 'Material UI', 'D3.js'] },
  { title: 'E-commerce', description: 'Online store', tags: ['Shopify', 'Liquid', 'JavaScript'] },
  { title: 'Mobile App', description: 'Cross-platform application', tags: ['React Native', 'Redux', 'Firebase'] },
];

const tags = ['React', 'TypeScript', 'Vue', 'Sass', 'JavaScript', 'Next.js', 'Tailwind', 'Framer Motion', 'Angular', 'Material UI', 'D3.js', 'Shopify', 'Liquid', 'React Native', 'Redux', 'Firebase'];

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background */}
      <div className="fixed inset-0 z-0 bg-black">
        <img
          alt=""
          className="bg-photo h-full w-full object-cover"
          src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
        />
        <div className="bg-sheen absolute inset-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-6 lg:px-8 lg:py-8">
        {/* Navigation */}
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="liquid-glass-strong flex h-8 w-8 items-center justify-center rounded-lg">
              <span className="glass-content font-mono text-sm font-bold tracking-tighter text-white">s/</span>
            </span>
            <span className="font-mono text-lg font-medium tracking-tight text-white">sugi<span className="text-white/50">.dev</span></span>
          </div>
          <div className="flex items-center gap-3">
            <div className="liquid-glass hidden items-center gap-1 rounded-full px-2 py-1.5 sm:flex">
              <span className="glass-content flex items-center gap-1">
                <a className="rounded-full px-3 py-1 text-sm text-white/80 transition-colors hover:text-white" href="#work">Work</a>
                <a className="rounded-full px-3 py-1 text-sm text-white/80 transition-colors hover:text-white" href="#writing">Writing</a>
                <a className="rounded-full px-3 py-1 text-sm text-white/80 transition-colors hover:text-white" href="#about">About</a>
              </span>
            </div>
            <button className="liquid-glass-strong flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white transition-transform hover:scale-105 active:scale-95">
              <span className="glass-content flex items-center gap-2">
                <span className="material-symbols-outlined">mail</span>
                Get in touch
              </span>
            </button>
          </div>
        </nav>

        {/* Portfolio Grid */}
        <div className="mt-6 grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[200px]">
          {/* Hero Card */}
          <div className="liquid-glass-strong flex flex-col justify-between rounded-[1.75rem] p-7 md:col-span-2 lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-1">
            <div className="glass-content flex h-full flex-col justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-white/50">Software Engineer · Tokyo</p>
                <h1 className="mt-5 text-4xl leading-[1.08] tracking-[-0.03em] text-white lg:text-5xl">
                  Full-stack engineer building
                  <span className="font-mono italic text-white/70">for the web.</span>
                </h1>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60">
                  I'm Sugi. I ship performant interfaces and reliable systems — from first sketch to production — with an eye for detail and speed.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a className="liquid-glass flex items-center gap-2 rounded-full py-2 pl-2 pr-5 text-sm text-white transition-transform hover:scale-105 active:scale-95" href="#work">
                  <span className="glass-content flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                    View work
                  </span>
                </a>
                <a className="rounded-full px-4 py-2 text-sm text-white/70 transition-colors hover:text-white" href="#">Download résumé</a>
              </div>
            </div>
          </div>

          {/* Visual Card */}
          <div className="liquid-glass relative overflow-hidden rounded-[1.75rem] lg:col-start-3 lg:row-start-1 lg:row-span-2">
            <img
              alt="Editor with source code"
              className="absolute inset-0 h-full w-full object-cover"
              src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
              style={{ filter: 'grayscale(1) contrast(1.05) brightness(0.7)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
            <div className="glass-content absolute inset-0 flex flex-col justify-end p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-white/60">Currently</p>
              <p className="mt-1 text-lg font-medium text-white">Shipping design systems</p>
              <p className="mt-1 text-xs text-white/50">TypeScript · Go · Postgres</p>
            </div>
          </div>

          {/* Status Card */}
          <div className="liquid-glass flex flex-col justify-between rounded-[1.75rem] p-6 lg:col-start-4 lg:row-start-1">
            <div className="glass-content flex h-full flex-col justify-between">
              <div className="flex items-center gap-2.5">
                <span className="pulse-dot flex h-2.5 w-2.5 rounded-full bg-white"></span>
                <span className="font-mono text-xs uppercase tracking-widest text-white/60">Available</span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">Open to new projects</p>
                <p className="mt-1 text-xs text-white/50">Booking from Aug 2026</p>
              </div>
            </div>
          </div>

          {/* Stack Card */}
          <div className="liquid-glass rounded-[1.75rem] p-6 lg:col-start-4 lg:row-start-2">
            <div className="glass-content">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-white/70" />
                <p className="font-mono text-xs uppercase tracking-widest text-white/60">Stack</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[11px] text-white/80">TypeScript</span>
                <span className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[11px] text-white/80">React</span>
                <span className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[11px] text-white/80">Node</span>
                <span className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[11px] text-white/80">Go</span>
                <span className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[11px] text-white/80">Postgres</span>
              </div>
            </div>
          </div>

          {/* Work Card */}
          <div className="liquid-glass rounded-[1.75rem] p-6 md:col-span-2 lg:col-span-2 lg:col-start-1 lg:row-start-3" id="work">
            <div className="glass-content">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Folder className="h-4 w-4 text-white/70" />
                  <p className="font-mono text-xs uppercase tracking-widest text-white/60">Selected work</p>
                </div>
                <a className="text-xs text-white/50 transition-colors hover:text-white" href="#">All projects</a>
              </div>
              <div className="mt-4 flex flex-col divide-y divide-white/10">
                {projects.map((project, index) => (
                  <a key={index} className="group flex items-center justify-between py-2.5 transition-transform hover:translate-x-1" href="#">
                    <span className="flex items-baseline gap-3">
                      <span className="text-sm font-medium text-white">{project.title}</span>
                      <span className="text-xs text-white/50">{project.description}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-white/50 transition-colors group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <button
              key={index}
              className="liquid-glass rounded-full px-3 py-1 text-sm text-white/80 transition-colors hover:text-white hover:bg-white/10"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
