import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <a className="group flex items-center justify-between py-2.5 transition-transform hover:translate-x-1" href={project.link}>
      <span className="flex items-baseline gap-3">
        <span className="text-sm font-medium text-white">{project.title}</span>
        <span className="text-xs text-white/50">{project.description}</span>
      </span>
      <span className="material-symbols-outlined h-4 w-4 text-white/50 transition-colors group-hover:text-white">arrow_upward</span>
    </a>
  );
}
