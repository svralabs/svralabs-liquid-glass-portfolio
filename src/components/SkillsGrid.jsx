import React from 'react';

export default function SkillsGrid() {
  const skills = [
    'TypeScript', 'React', 'Node', 'Go', 'Rust', 'Postgres', 'Palette'
  ];

  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span key={index} className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[11px] text-white/80">
          {skill}
        </span>
      ))}
    </div>
  );
}
