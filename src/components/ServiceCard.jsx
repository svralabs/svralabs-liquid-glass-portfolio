import {Globe as ArrowUpRight} from 'lucide-react';

export default function ServiceCard({ number, icon, title, description }) {
  return (
    <a className="liquid-glass group flex items-start gap-5 rounded-3xl p-6 transition-transform hover:scale-[1.01]" href="contact.html">
      <span className="glass-content flex w-full items-start gap-5">
        <span className="font-mono text-sm text-white/40">{number}</span>
        <span className="flex-1">
          <span className="flex items-center gap-2.5">
            <span className="material-symbols-outlined h-4 w-4 text-white/70">{icon}</span>
            <span className="text-lg font-medium text-white">{title}</span>
          </span>
          <span className="mt-1.5 block text-sm leading-relaxed text-white/60">{description}</span>
        </span>
        <ArrowUpRight className="mt-1 h-4 w-4 flex-none text-white/40 transition-colors group-hover:text-white" />
      </span>
    </a>
  );
}
