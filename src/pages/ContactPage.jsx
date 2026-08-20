import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  };

  const services = [
    'Frontend Architecture',
    'UI Design System',
    'Full-stack Dev',
    'Technical Audit'
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Globe', url: 'https://twitter.com' },
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'Dribbble', url: 'https://dribbble.com' }
  ];

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
              {services.map((service, index) => (
                <label key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-ink-soft border border-surface-variant/20 cursor-pointer hover:border-ember/40 transition-colors group">
                  <input className="custom-checkbox w-5 h-5 rounded border-surface-variant/50 bg-background text-ember focus:ring-ember" type="checkbox" />
                  <span className="font-body-md text-on-surface group-hover:text-primary transition-colors">{service}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border border-surface-variant/20 grayscale hover:grayscale-0 transition-all duration-700">
            <img className="w-full h-full object-cover" alt="A moody, high-contrast black and white architectural photograph" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPJW4ntn7cfq-NK6sXpOK-oljo0kpYwiqnmqHNP-pVkHHrhMRjEY7IaVUDdtyhboZF1Tosh1B4pQ7viLVlyz0CGSYynq5IcY4n_8d0TWhB3RooaWuy8j_pUZV4pOld2UrxEc4cyYM2eOfzUzEzgk7-HQaZCZxG6GpEJgVmvehATSOZYp3QbtcF0kP-ipxbvAxymPDhNa9QmlSxMq4xefBHR4mWUWhTBGHPRYL3QhKKsq9R8oUKowvI" />
            <div className="absolute bottom-6 left-6 flex items-center space-x-2">
              <span className="material-symbols-outlined text-ember">location_on</span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest">Berlin, DE / Remote</span>
            </div>
          </div>

          <div>
            <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-6">Connect</h3>
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} className="text-on-surface hover:text-ember transition-colors">
                  <span className="material-symbols-outlined">{link.name.toLowerCase()}</span>
                </a>
              ))}
            </div>
          </div>
        </aside>

        <div className="lg:col-span-7 bg-ink-soft p-margin-mobile md:p-12 rounded-lg border border-surface-variant/10 reveal-up" style={{ animationDelay: '0.4s' }}>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label className="font-label-sm text-label-sm text-on-surface-variant uppercase block mb-3" htmlFor="name">Full Name</label>
                <input
                  className="w-full bg-background border-b-2 border-surface-variant/30 text-on-surface px-0 py-4 focus:outline-none focus:border-ember focus:ring-0 transition-all placeholder:text-surface-variant/40"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <p className="text-error text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="group">
                <label className="font-label-sm text-label-sm text-on-surface-variant uppercase block mb-3" htmlFor="email">Email Address</label>
                <input
                  className="w-full bg-background border-b-2 border-surface-variant/30 text-on-surface px-0 py-4 focus:outline-none focus:border-ember focus:ring-0 transition-all placeholder:text-surface-variant/40"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p className="text-error text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="group">
              <label className="font-label-sm text-label-sm text-on-surface-variant uppercase block mb-3" htmlFor="subject">Subject / Project Title</label>
              <input
                className="w-full bg-background border-b-2 border-surface-variant/30 text-on-surface px-0 py-4 focus:outline-none focus:border-ember focus:ring-0 transition-all placeholder:text-surface-variant/40"
                id="subject"
                name="subject"
                placeholder="New Project Inquiry"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              {errors.subject && <p className="text-error text-sm mt-1">{errors.subject}</p>}
            </div>

            <div className="group">
              <label className="font-label-sm text-label-sm text-on-surface-variant uppercase block mb-3" htmlFor="message">Message</label>
              <textarea
                className="w-full bg-background border-b-2 border-surface-variant/30 text-on-surface px-0 py-4 focus:outline-none focus:border-ember focus:ring-0 transition-all placeholder:text-surface-variant/40 min-h-[150px]"
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
              {errors.message && <p className="text-error text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-nav-link text-nav-link uppercase inner-stroke hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
