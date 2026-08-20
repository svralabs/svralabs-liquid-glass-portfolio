import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Sugi's work is exceptional. The attention to detail and the smooth user experience he creates are unmatched.",
      author: "Alex Johnson",
      role: "CEO, TechCorp"
    },
    {
      text: "I've never seen a developer work so efficiently. The code is clean, the performance is outstanding.",
      author: "Maria Garcia",
      role: "CTO, Innovatech"
    },
    {
      text: "Sugi transformed our product. The results speak for themselves. Highly recommended.",
      author: "James Wilson",
      role: "Founder, StartupX"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    { name: "TypeScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node", level: 80 },
    { name: "Go", level: 75 },
    { name: "Rust", level: 70 },
    { name: "Postgres", level: 85 },
    { name: "Palette", level: 75 }
  ];

  return (
    <div className="relative min-h-screen bg-black">
      {/* Background */}
      <div className="fixed inset-0 z-0 bg-black">
        <img
          alt=""
          className="bg-photo h-full w-full object-cover"
          src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
        />
        <div className="bg-sheen absolute inset-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-6 lg:px-8 lg:py-8">
        {/* Navigation */}
        <nav className="flex items-center justify-between">
          <a className="flex items-center gap-2.5" href="/">
            <span className="liquid-glass-strong flex h-8 w-8 items-center justify-center rounded-lg">
              <span className="glass-content font-mono text-sm font-bold tracking-tighter text-white">s/</span>
            </span>
            <span className="font-mono text-lg font-medium tracking-tight text-white">sugi<span className="text-white/50">.dev</span></span>
          </a>
          <div className="flex items-center gap-3">
            <div className="liquid-glass hidden items-center gap-1 rounded-full px-2 py-1.5 sm:flex">
              <span className="glass-content flex items-center gap-1">
                <a className="rounded-full px-3 py-1 text-sm text-white/70 transition-colors hover:text-white" href="/">Home</a>
                <a className="rounded-full px-3 py-1 text-sm text-white/70 transition-colors hover:text-white" href="/services">Services</a>
                <a className="rounded-full px-3 py-1 text-sm text-white/70 transition-colors hover:text-white" href="/work">Work</a>
                <a className="rounded-full px-3 py-1 text-sm text-white transition-colors hover:text-white" href="/about">About</a>
              </span>
            </div>
            <a className="liquid-glass-strong flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white transition-transform hover:scale-105 active:scale-95" href="/contact">
              <span className="glass-content flex items-center gap-2">
                <span className="material-symbols-outlined h-4 w-4">mail</span>
                Get in touch
              </span>
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <main className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Image Column */}
          <div className="liquid-glass relative overflow-hidden rounded-[2rem] lg:col-span-5 lg:row-span-2 min-h-[320px]">
            <img
              alt="Workspace"
              className="img-mono absolute inset-0 h-full w-full object-cover"
              src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
            <div className="glass-content absolute inset-0 flex flex-col justify-end p-7">
              <p className="font-mono text-xs uppercase tracking-widest text-white/60">Based in</p>
              <p className="mt-1 text-2xl font-medium text-white">Tokyo, Japan</p>
              <p className="mt-1 text-xs text-white/50">Working across timezones</p>
            </div>
          </div>

          {/* About Column */}
          <div className="liquid-glass-strong rounded-[2rem] p-8 lg:col-span-7">
            <div className="glass-content">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">About</p>
              <h1 className="mt-4 text-3xl leading-snug tracking-[-0.03em] text-white lg:text-4xl">
                I build software that feels <span className="font-mono italic text-white/70">calm and quick.</span>
              </h1>
              <p className="mt-5 text-sm leading-relaxed text-white/60">
                I've spent the last six years shipping products across startups and studios — equally at home in a design file and a terminal. I care about the details users never notice: the frame that never drops, the state that never gets stuck, the API that just makes sense.
              </p>
              {/* Skills Chart */}
              <div className="mt-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="mb-2">
                    <div className="flex justify-between text-xs text-white/60">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-white/30"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials Column */}
          <div className="liquid-glass rounded-[2rem] p-8 lg:col-span-7">
            <div className="glass-content">
              <p className="font-mono text-xs uppercase tracking-widest text-white/60">Testimonials</p>
              <div className="mt-5">
                <div className="text-sm text-white/85">
                  "{testimonials[currentTestimonial].text}"
                </div>
                <div className="mt-3 text-xs text-white/60">
                  - {testimonials[currentTestimonial].author}, {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <p className="mt-10 text-center font-mono text-[11px] text-white/40">© 2026 sugi.dev — built at 60fps.</p>
      </div>

      {/* Marquee */}
      <div className="fixed bottom-0 left-0 right-0 z-20 overflow-hidden whitespace-nowrap bg-black/80 py-2">
        <div className="animate-marquee inline-block">
          <span className="mx-4 text-sm font-medium text-white">Available for freelance work</span>
          <span className="mx-4 text-sm font-medium text-white">Available for freelance work</span>
          <span className="mx-4 text-sm font-medium text-white">Available for freelance work</span>
        </div>
      </div>
    </div>
  );
}
