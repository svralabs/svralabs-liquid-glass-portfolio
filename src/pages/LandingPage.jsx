import React from 'react';
import styles from './LandingPage.module.css';

const navItems = [
  { name: 'Work', href: '#work', active: true },
  { name: 'Tech', href: '#tech', active: false },
  { name: 'Lab', href: '#lab', active: false },
  { name: 'About', href: '#about', active: false },
];

const stats = [
  { label: 'Experience', value: '6+ Years', description: 'Shipping Excellence' },
  { label: 'Output', value: '40+ Projects', description: 'Concept to Scale' },
  { label: 'Base', value: 'Tokyo', description: 'GMT+9' },
];

export default function LandingPage() {
  return (
    <div className="relative min-h-screen">
      <div className={styles.ambientDrift} />
      <div className={styles.meshGradient} />

      <header className={styles.header}>
        <div className="font-code-label text-code-label font-bold tracking-tighter text-primary">SUGI</div>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`${styles.navLink} ${item.active ? styles.navLinkActive : ''}`}
            >
              {item.name}
            </a>
          ))}
        </nav>
        <button className={styles.ctaButton}>Get in touch</button>
      </header>

      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.statusBadge}>
            <span className={styles.statusText}>Available for Select Engagements</span>
          </div>
          <h1 className={styles.headline}>
            Design-minded <br />
            <span className="text-on-surface-variant">engineer.</span>
          </h1>
          <p className={styles.subheadline}>
            Specializing in high-performance digital interfaces that bridge the gap between human intuition and technical excellence.
          </p>
          <div className={styles.buttonGroup}>
            <a href="#work" className={styles.primaryButton}>View Portfolio</a>
            <a href="#about" className={styles.secondaryButton}>My Philosophy</a>
          </div>

          <div className={styles.statsContainer}>
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`${styles.statItem} ${index === 1 ? styles.borderX : ''}`}
              >
                <span className={styles.statLabel}>{stat.label}</span>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statDescription}>{stat.description}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
