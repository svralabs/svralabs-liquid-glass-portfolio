export default function InsightSection({ insights }) {
  return (
    <div className="mt-12 liquid-glass rounded-[2rem] p-8">
      <div className="glass-content">
        <h2 className="text-2xl font-medium text-white">Project Insights</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((insight, index) => (
            <div key={index} className="flex flex-col">
              <span className="font-mono text-[11px] uppercase tracking-widest text-white/50">{insight.category}</span>
              <h3 className="mt-2 text-xl font-medium text-white">{insight.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{insight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
