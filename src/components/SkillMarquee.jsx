import { useEffect, useRef } from 'react';

export default function SkillMarquee({ skills }) {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let animationId;

    const scrollMarquee = () => {
      if (marquee) {
        marquee.scrollLeft += 1;
        if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
          marquee.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scrollMarquee);
    };

    animationId = requestAnimationFrame(scrollMarquee);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div ref={marqueeRef} className="inline-block animate-marquee">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="inline-block rounded-full bg-white/10 px-2.5 py-1 font-mono text-[11px] text-white/80 mx-1"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
