import {Globe as ArrowUpRight} from 'lucide-react';
import Badge from './Badge';

export default function WorkItem({ project }) {
  return (
    <div className="liquid-glass rounded-[1.75rem] p-6">
      <div className="glass-content">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-white/70">folder</span>
            <p className="font-mono text-xs uppercase tracking-widest text-white/60">{project.title}</p>
          </div>
          <a className="text-xs text-white/50 transition-colors hover:text-white" href="#">
            View project
          </a>
        </div>
        <div className="mt-4 flex flex-col divide-y divide-white/10">
          <div className="group flex items-center justify-between py-2.5 transition-transform hover:translate-x-1">
            <span className="flex items-baseline gap-3">
              <span className="text-sm font-medium text-white">{project.description}</span>
            </span>
            <ArrowUpRight className="h-4 w-4 text-white/50 transition-colors group-hover:text-white" />
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <Badge key={index}>{tag}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
