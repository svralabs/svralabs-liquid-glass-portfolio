import React from 'react';
import styles from './ServicesPage.module.css';

const services = [
  {
    id: 1,
    number: '01',
    icon: 'boxes',
    title: 'Product engineering',
    description: 'Full-stack web apps built end to end, from data model to pixel.',
  },
  {
    id: 2,
    number: '02',
    icon: 'component',
    title: 'Design systems',
    description: 'Component libraries and tokens teams actually keep using.',
  },
  {
    id: 3,
    number: '03',
    icon: 'gauge',
    title: 'Performance audits',
    description: 'Find what\'s slow, fix it, and prove the win with numbers.',
  },
  {
    id: 4,
    number: '04',
    icon: 'zap',
    title: 'Prototyping',
    description: 'Validate ideas fast with real, interactive code — not slides.',
  },
];

export default function ServicesPage() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <img alt="" className={styles.bgPhoto} src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg" />
        <div className={styles.bgSheen}></div>
        <div className={styles.bgGradient}></div>
      </div>
      <div className={styles.content}>
        <nav className={styles.nav}>
          <a className={styles.logo} href="hero.html">
            <span className={styles.logoIcon}>
              <span className={styles.logoText}>s/</span>
            </span>
            <span className={styles.logoText}>sugi<span className={styles.logoSubText}>.dev</span></span>
          </a>
          <div className={styles.navActions}>
            <div className={styles.navLinks}>
              <span className={styles.navLinkGroup}>
                <a className={styles.navLink} href="hero.html">Home</a>
                <a className={`${styles.navLink} ${styles.active}`} href="services.html">Services</a>
                <a className={styles.navLink} href="work.html">Work</a>
                <a className={styles.navLink} href="about.html">About</a>
              </span>
            </div>
            <a className={styles.contactButton} href="contact.html">
              <span className={styles.contactButtonContent}>
                <span className="material-symbols-outlined">mail</span>Get in touch
              </span>
            </a>
          </div>
        </nav>
        <main className={styles.main}>
          <div className={styles.intro}>
            <p className={styles.introTag}>What I do</p>
            <h1 className={styles.introTitle}>Services built around <span className={styles.introHighlight}>shipping.</span></h1>
            <p className={styles.introDescription}>Focused engagements, clear scope, and code your team can maintain long after I'm gone.</p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <a key={service.id} className={styles.serviceCard} href="contact.html">
                <span className={styles.serviceCardContent}>
                  <span className={styles.serviceNumber}>{service.number}</span>
                  <span className={styles.serviceDetails}>
                    <span className={styles.serviceTitle}>
                      <span className="material-symbols-outlined">{service.icon}</span>
                      <span className={styles.serviceTitleText}>{service.title}</span>
                    </span>
                    <span className={styles.serviceDescription}>{service.description}</span>
                  </span>
                  <span className="material-symbols-outlined">arrow_up_right</span>
                </span>
              </a>
            ))}
          </div>
        </main>
        <p className={styles.footer}>© 2026 sugi.dev — built at 60fps.</p>
      </div>
    </div>
  );
}
