import {Globe as ArrowUpRight} from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="liquid-glass relative overflow-hidden rounded-[1.75rem] group">
      <img
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover"
        src={project.imageUrl}
        style={{ filter: 'grayscale(1) contrast(1.05) brightness(0.7)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
      <div className="glass-content absolute inset-0 flex flex-col justify-end p-6">
        <div className="flex items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-widest text-white/60">{project.title}</p>
          <ArrowUpRight className="h-4 w-4 text-white/50 transition-colors group-hover:text-white" />
        </div>
        <p className="mt-1 text-lg font-medium text-white">{project.description}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span key={index} className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[11px] text-white/80">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
