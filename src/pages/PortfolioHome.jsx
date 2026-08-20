import { useState } from 'react';
import {Globe as ArrowUpRight, Folder, Globe as Terminal, Mail} from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';

export default function PortfolioHome() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(project =>
        project.tags.includes(activeFilter)
      );

  const allTags = [...new Set(projectsData.flatMap(project => project.tags))];

  return (
    <div className="relative min-h-screen">
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
        {/* Nav */}
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
                <Mail className="h-4 w-4" />
                Get in touch
              </span>
            </button>
          </div>
        </nav>

        {/* Bento Grid */}
        <div className="mt-6 grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[200px]">
          {/* Hero */}
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

          {/* Visual card */}
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

          {/* Status card */}
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

          {/* Stack card */}
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

          {/* Work card */}
          <div className="liquid-glass rounded-[1.75rem] p-6 md:col-span-2 lg:col-span-2 lg:col-start-1 lg:row-start-3" id="work">
            <div className="glass-content">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Folder className="h-4 w-4 text-white/70" />
                  <p className="font-mono text-xs uppercase tracking-widest text-white/60">Selected work</p>
                </div>
                <a className="text-xs text-white/50 transition-colors hover:text-white" href="#">All projects</a>
              </div>

              {/* Filter tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  className={`rounded-full px-3 py-1 text-xs ${activeFilter === 'All' ? 'bg-white/15 text-white' : 'bg-white/10 text-white/80'}`}
                  onClick={() => setActiveFilter('All')}
                >
                  All
                </button>
                {allTags.map((tag, index) => (
                  <button
                    key={index}
                    className={`rounded-full px-3 py-1 text-xs ${activeFilter === tag ? 'bg-white/15 text-white' : 'bg-white/10 text-white/80'}`}
                    onClick={() => setActiveFilter(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Project grid */}
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
