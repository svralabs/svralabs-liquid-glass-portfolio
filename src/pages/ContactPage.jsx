import React, { useState } from 'react';
import styles from './ContactPage.module.css';

const services = [
  'Frontend Architecture',
  'UI Design System',
  'Full-stack Dev',
  'Technical Audit'
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.revealUp}>
          <span className={styles.overline}>Availability: Q4 2024</span>
          <h1 className={styles.heroTitle}>
            Let's<br/>Talk
          </h1>
        </div>
      </header>

      <div className={styles.grid}>
        <aside className={styles.aside}>
          <div>
            <h3 className={styles.sectionTitle}>Direct Link</h3>
            <a className={styles.emailLink} href="mailto:hello@sugidev.tech">
              hello@sugidev.tech
              <span className="material-symbols-outlined">arrow_outward</span>
            </a>
          </div>

          <div>
            <h3 className={styles.sectionTitle}>How can I help?</h3>
            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <label key={index} className={styles.serviceItem}>
                  <input
                    className={styles.customCheckbox}
                    type="checkbox"
                  />
                  <span className={styles.serviceText}>{service}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.imageContainer}>
            <img
              className={styles.locationImage}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPJW4ntn7cfq-NK6sXpOK-oljo0kpYwiqnmqHNP-pVkHHrhMRjEY7IaVUDdtyhboZF1Tosh1B4pQ7viLVlyz0CGSYynq5IcY4n_8d0TWhB3RooaWuy8j_pUZV4pOld2UrxEc4cyYM2eOfzUzEzgk7-HQaZCZxG6GpEJgVmvehATSOZYp3QbtcF0kP-ipxbvAxymPDhNa9QmlSxMq4xefBHR4mWUWhTBGHPRYL3QhKKsq9R8oUKowvI"
              alt="Architectural photograph"
            />
            <div className={styles.locationTag}>
              <span className="material-symbols-outlined">location_on</span>
              <span className={styles.locationText}>Berlin, DE / Remote</span>
            </div>
          </div>
        </aside>

        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={styles.input}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>Subject / Project Title</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="New Project Inquiry"
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className={styles.textarea}
                rows="5"
                required
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
