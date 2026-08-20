import React from 'react';

export default function ShowcaseCard({ project }) {
  return (
    <div className="group relative liquid-glass rounded-[1.75rem] overflow-hidden flex flex-col aspect-[4/5] md:aspect-auto">
      <div className="h-[400px] w-full overflow-hidden">
        <img
          className="w-full h-full object-cover monochrome-img"
          src={project.image}
          alt={project.alt}
        />
      </div>
      <div className="p-8 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full ${index === 0 ? 'liquid-glass-strong' : 'bg-white/5'} font-code-sm text-code-sm ${index === 0 ? 'text-primary' : 'text-outline'}`}
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-headline-md text-headline-md text-primary mb-2">{project.title}</h3>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant">{project.description}</p>
      </div>
    </div>
  );
}
