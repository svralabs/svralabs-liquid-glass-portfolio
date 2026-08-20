import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProjectGallery from '../components/ProjectGallery';
import InsightSection from '../components/InsightSection';
import portfolioData from '../data/portfolio.json';

export default function WorkDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const foundProject = portfolioData.projects.find(p => p.id === id);
    if (!foundProject) {
      navigate('/404');
    } else {
      setProject(foundProject);
    }
  }, [id, navigate]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-0 bg-black">
      <img alt="" className="bg-photo h-full w-full object-cover" src={project.backgroundImage} />
      <div className="bg-sheen absolute inset-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>

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
              <span className="glass-content flex items-center gap-2"><span className="material-symbols-outlined">mail</span>Get in touch</span>
            </a>
          </div>
        </nav>

        <main className="mt-14">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">Selected work</p>
          <h1 className="mt-5 max-w-2xl text-4xl leading-tight tracking-[-0.03em] text-white lg:text-5xl">{project.title}</h1>

          <ProjectGallery images={project.galleryImages} />

          <InsightSection insights={project.insights} />
        </main>

        <footer className="mt-20 pb-10">
          <p className="text-center font-mono text-[11px] text-white/40">© 2026 sugi.dev — built at 60fps.</p>
        </footer>
      </div>
    </div>
  );
}
