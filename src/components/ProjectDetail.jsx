import {Globe as ArrowUpRight} from 'lucide-react';

export default function ProjectDetail({ project }) {
  return (
    <article className={`liquid-glass flex flex-col ${project.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} overflow-hidden rounded-[2rem]`}>
      <div className="relative h-56 w-full lg:h-auto lg:w-1/2">
        <img
          alt={`${project.title} preview`}
          className="img-mono absolute inset-0 h-full w-full object-cover"
          src={project.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="glass-content flex w-full flex-col justify-center p-8 lg:w-1/2">
        <span className="font-mono text-[11px] uppercase tracking-widest text-white/50">{project.category} · {project.year}</span>
        <h2 className="mt-2 text-2xl font-medium text-white">{project.title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-white/60">{project.description}</p>
        <a className="group mt-5 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white" href="#">
          View case study <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </article>
  );
}
