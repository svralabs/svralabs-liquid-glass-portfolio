import React, { useState } from 'react';
import Input from '../components/Input';
import Textarea from '../components/Textarea';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log('Form submitted:', data);

    setTimeout(() => {
      setIsSubmitting(false);
      e.target.reset();
    }, 1000);
  };

  return (
    <main className="pt-32 pb-section-gap-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <header className="mb-section-gap-sm">
        <div className="reveal-up">
          <span className="font-overline text-overline text-ember uppercase mb-stack-xs block">Availability: Q4 2024</span>
          <h1 className="kanit-black text-[15vw] md:text-[10vw] leading-[0.9] tracking-tighter text-on-surface uppercase italic">
            Let's<br/>Talk
          </h1>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        <aside className="lg:col-span-5 space-y-16 reveal-up" style={{ animationDelay: '0.2s' }}>
          <div>
            <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-stack-md">Direct Link</h3>
            <a className="group flex items-center text-[2rem] md:text-[2.5rem] font-kanit italic text-on-surface hover:text-ember transition-colors" href="mailto:hello@sugidev.tech">
              hello@sugidev.tech
              <span className="material-symbols-outlined ml-4 text-ember group-hover:translate-x-2 transition-transform duration-300">arrow_outward</span>
            </a>
          </div>

          <div>
            <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-6">How can I help?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Frontend Architecture', 'UI Design System', 'Full-stack Dev', 'Technical Audit'].map((service, index) => (
                <label key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-ink-soft border border-surface-variant/20 cursor-pointer hover:border-ember/40 transition-colors group">
                  <input
                    className="custom-checkbox w-5 h-5 rounded border-surface-variant/50 bg-background text-ember focus:ring-ember"
                    type="checkbox"
                  />
                  <span className="font-body-md text-on-surface group-hover:text-primary transition-colors">{service}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border border-surface-variant/20 grayscale hover:grayscale-0 transition-all duration-700">
            <img
              className="w-full h-full object-cover"
              data-alt="A moody, high-contrast black and white architectural photograph of a brutalist concrete building with sharp shadows and glowing ember-colored lights in the windows. The scene is shot during a dark, misty evening in a futuristic city like Tokyo or Berlin. The lighting is dramatic and cinematic, echoing the professional and technical sugidev brand identity."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPJW4ntn7cfq-NK6sXpOK-oljo0kpYwiqnmqHNP-pVkHHrhMRjEY7IaVUDdtyhboZF1Tosh1B4pQ7viLVlyz0CGSYynq5IcY4n_8d0TWhB3RooaWuy8j_pUZV4pOld2UrxEc4cyYM2eOfzUzEzgk7-HQaZCZxG6GpEJgVmvehATSOZYp3QbtcF0kP-ipxbvAxymPDhNa9QmlSxMq4xefBHR4mWUWhTBGHPRYL3QhKKsq9R8oUKowvI"
              alt="Architectural photograph"
            />
            <div className="absolute bottom-6 left-6 flex items-center space-x-2">
              <span className="material-symbols-outlined text-ember">location_on</span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest">Berlin, DE / Remote</span>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-7 bg-ink-soft p-margin-mobile md:p-12 rounded-lg border border-surface-variant/10 reveal-up" style={{ animationDelay: '0.4s' }}>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Input
                id="name"
                name="name"
                label="Full Name"
                placeholder="John Doe"
                required
              />
              <Input
                id="email"
                name="email"
                label="Email Address"
                type="email"
                placeholder="john@example.com"
                required
              />
            </div>

            <Input
              id="subject"
              name="subject"
              label="Subject / Project Title"
              placeholder="New Project Inquiry"
              required
            />

            <Textarea
              id="message"
              name="message"
              label="Your Message"
              placeholder="Tell me about your project..."
              required
            />

            <button
              type="submit"
              className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-nav-link text-nav-link uppercase inner-stroke hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
