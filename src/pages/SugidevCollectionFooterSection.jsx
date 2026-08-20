import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SugidevCollectionFooterSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<section className="relative w-full bg-ink text-mist flex flex-col z-30" id="collection">

<div className="relative z-10 px-8 md:px-16 pt-32 md:pt-48 mb-16 flex flex-col xl:flex-row justify-between gap-10">

<h2 className="text-[1.8rem] md:text-[3rem] lg:text-[3.8rem] xl:text-[4rem] leading-[1.15] font-medium tracking-tight text-mist max-w-4xl" data-reveal="" data-y="30">
          Shipped from years of
          <span className="inline-flex gap-2 md:gap-3 align-middle mx-2 md:mx-4 -translate-y-[4px]">
<span className="flex w-10 h-10 md:w-14 md:h-14 items-center justify-center rounded-full border border-mist/25 bg-ink-soft text-mist/50 transition-colors hover:bg-mist hover:text-ink hover:border-mist">
<i className="w-[22px] h-[22px]" data-lucide="code"></i>
</span>
<span className="flex w-10 h-10 md:w-14 md:h-14 items-center justify-center rounded-full border border-mist/25 bg-ink-soft text-mist/50 transition-colors hover:bg-mist hover:text-ink hover:border-mist">
<i className="w-[22px] h-[22px]" data-lucide="zap"></i>
</span>
<span className="flex w-10 h-10 md:w-14 md:h-14 items-center justify-center rounded-full border border-mist/25 bg-ink-soft text-mist/50 transition-colors hover:bg-mist hover:text-ink hover:border-mist">
<i className="w-[22px] h-[22px]" data-lucide="layout-dashboard"></i>
</span>
</span>
          curiosity &amp; code.
        </h2>

<div className="xl:text-right xl:max-w-xs" data-delay="0.1" data-reveal="" data-y="30">
<p className="text-[9px] md:text-[10px] tracking-widest text-mist/40 uppercase mb-6 leading-relaxed">
            We don't just ship features<br/>we craft experiences worth remembering
          </p>
<div className="flex flex-wrap xl:justify-end gap-2">
<span className="rounded-full border border-mist/25 px-5 py-2 text-[9px] tracking-widest uppercase text-mist/70 transition-colors hover:bg-mist hover:text-ink hover:border-mist">Fast</span>
<span className="rounded-full border border-mist/25 px-5 py-2 text-[9px] tracking-widest uppercase text-mist/70 transition-colors hover:bg-mist hover:text-ink hover:border-mist">Accessible</span>
<span className="rounded-full border border-mist/25 px-5 py-2 text-[9px] tracking-widest uppercase text-mist/70 transition-colors hover:bg-mist hover:text-ink hover:border-mist">Polished</span>
</div>
</div>
</div>

<div className="relative z-10 h-px bg-mist/15"></div>

<div className="relative z-10 flex flex-col md:flex-row">

<div className="md:w-[35%] border-b md:border-b-0 md:border-r border-mist/15 min-h-[400px] md:min-h-[500px] flex flex-col">
<div className="p-8 text-mist/40 text-xl tracking-[0.3em]">∗∗∗</div>
<div className="relative flex-1">
<img alt="Chapter Preview" className="absolute inset-0 m-auto w-[80%] h-[80%] object-contain mix-blend-lighten" data-chap-img=""/>
</div>

<div className="p-8 flex items-end gap-1 text-[10px] tracking-widest uppercase">
<span className="text-[#888]" data-counter="">03</span>
<span className="text-[#333]">/</span>
<span className="text-[#888]" data-total="">05</span>
</div>
</div>

<div className="md:w-[65%] flex flex-col">
<div className="border-b border-mist/15 p-8 flex items-center justify-between text-[10px] tracking-widest uppercase text-mist/40">
<span>Design with intent. Build with soul.</span>
<span className="text-ember" data-chap-label="">Chapter 03</span>
</div>
<ul className="flex-1" data-chap-list="">

</ul>
</div>
</div>

<div className="relative z-10 h-px bg-mist/15"></div>
<div className="relative z-10 px-8 py-8 text-[10px] tracking-widest uppercase text-mist/50 bg-ink">
        Building for the modern web
      </div>
</section>


<footer className="relative bg-ink px-5 sm:px-8 md:px-10 pt-24 sm:pt-28 md:pt-36 pb-10" id="contact">
<div className="max-w-6xl mx-auto">
<p className="text-mist/40 font-medium uppercase tracking-[0.3em] text-xs sm:text-sm mb-6" data-reveal="" data-y="40">
          (Got a project?)
        </p>

<a className="group block hero-heading font-black uppercase leading-[0.9] tracking-tight" data-delay="0.1" data-reveal="" data-y="40" href="mailto:hello@sugidev.studio" style={{"fontSize": "clamp(2.5rem, 11vw, 150px)"}}>
          Let's build<br/>
<span className="inline-flex items-center gap-3 sm:gap-6">
            something 
            <i className="w-[0.7em] h-[0.7em] text-ember transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" data-lucide="arrow-up-right"></i>
</span>
</a>

<a className="inline-block mt-8 text-mist text-lg sm:text-2xl md:text-3xl font-light lowercase tracking-tight border-b border-mist/30 pb-1 transition-colors hover:border-ember hover:text-ember" data-delay="0.2" data-reveal="" data-y="30" href="mailto:hello@sugidev.studio">
          hello@sugidev.studio
        </a>
</div>

<div className="max-w-6xl mx-auto mt-20 sm:mt-28 md:mt-36 pt-8 border-t border-mist/10 flex flex-col sm:flex-row gap-6 sm:gap-4 items-start sm:items-center justify-between">
<span className="text-mist/40 text-xs sm:text-sm uppercase tracking-widest">
          © 2026 sugidev° — Frontend Developer
        </span>
<div className="flex flex-wrap gap-x-6 gap-y-2">
<a className="text-mist/60 text-xs sm:text-sm uppercase tracking-widest transition-colors hover:text-ember" href="#">GitHub</a>
<a className="text-mist/60 text-xs sm:text-sm uppercase tracking-widest transition-colors hover:text-ember" href="#">LinkedIn</a>
<a className="text-mist/60 text-xs sm:text-sm uppercase tracking-widest transition-colors hover:text-ember" href="#">X / Twitter</a>
<a className="text-mist/60 text-xs sm:text-sm uppercase tracking-widest transition-colors hover:text-ember" href="#">CodePen</a>
</div>
<a className="text-mist/40 text-xs sm:text-sm uppercase tracking-widest transition-colors hover:text-mist" href="#top">
          Back to top ↑
        </a>
</div>
</footer>






    </div>
  );
}
