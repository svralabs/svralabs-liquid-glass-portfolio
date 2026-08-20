import { useState } from 'react';

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'design', label: 'Design' },
  { id: 'development', label: 'Development' },
  { id: 'product', label: 'Product' },
];

export default function FilterTabs() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="mt-8 flex gap-3">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`liquid-glass-strong rounded-full px-4 py-2 text-sm transition-colors ${
            activeTab === tab.id ? 'text-white' : 'text-white/50 hover:text-white'
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          <span className="glass-content">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
