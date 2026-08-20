import React from 'react';

export default function Marquee() {
  const items = [
    { text: 'UI/UX Design', icon: 'design_services' },
    { text: 'Frontend Development', icon: 'code' },
    { text: 'Product Strategy', icon: 'lightbulb' },
    { text: 'Performance Optimization', icon: 'speed' },
    { text: 'Accessibility', icon: 'accessibility' },
    { text: 'Motion Design', icon: 'animation' },
  ];

  return (
    <div className="py-12 overflow-hidden">
      <div className="flex gap-8 animate-marquee whitespace-nowrap">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full liquid-glass">
            <span className="material-symbols-outlined text-primary">{item.icon}</span>
            <span className="font-code-sm text-code-sm text-primary">{item.text}</span>
          </div>
        ))}
        {items.map((item, index) => (
          <div key={`duplicate-${index}`} className="flex items-center gap-2 px-4 py-2 rounded-full liquid-glass">
            <span className="material-symbols-outlined text-primary">{item.icon}</span>
            <span className="font-code-sm text-code-sm text-primary">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
