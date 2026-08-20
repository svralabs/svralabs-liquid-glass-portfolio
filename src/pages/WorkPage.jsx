import React from 'react';
import styles from './WorkPage.module.css';
import {Globe as ArrowUpRight} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Aster',
    description: 'A cross-platform component library and token pipeline adopted by four product teams, cutting UI build time in half.',
    category: 'Design system',
    year: '2026',
    image: 'https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg',
    reverse: false
  },
  {
    id: 2,
    title: 'Kettle',
    description: 'A collaborative document editor with conflict-free sync, presence, and offline support built on CRDTs.',
    category: 'Realtime editor',
    year: '2025',
    image: 'https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg',
    reverse: true
  },
  {
    id: 3,
    title: 'Nori',
    description: 'A zero-config toolkit that scaffolds, lints, and deploys projects with one command — 3k+ stars.',
    category: 'Developer CLI',
    year: '2024',
    image: 'https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg',
    reverse: false
  }
];

export default function WorkPage() {
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
              <span className={styles.glassContent}>s/</span>
            </span>
            <span className={styles.logoText}>sugi<span className={styles.logoDomain}>.dev</span></span>
          </a>
          <div className={styles.navActions}>
            <div className={styles.navLinks}>
              <span className={styles.glassContent}>
                <a className={styles.navLink} href="hero.html">Home</a>
                <a className={styles.navLink} href="services.html">Services</a>
                <a className={`${styles.navLink} ${styles.active}`} href="work.html">Work</a>
                <a className={styles.navLink} href="about.html">About</a>
              </span>
            </div>
            <a className={styles.contactButton} href="contact.html">
              <span className={styles.glassContent}>
                <span className="material-symbols-outlined">mail</span>Get in touch
              </span>
            </a>
          </div>
        </nav>
        <main className={styles.main}>
          <p className={styles.subtitle}>Selected work</p>
          <h1 className={styles.title}>Things I've designed and <span className={styles.titleItalic}>shipped.</span></h1>
          <div className={styles.projects}>
            {projects.map(project => (
              <article key={project.id} className={`${styles.project} ${project.reverse ? styles.projectReverse : ''}`}>
                <div className={styles.projectImage}>
                  <img alt={`${project.title} preview`} className={styles.imgMono} src={project.image} />
                  <div className={styles.imageGradient}></div>
                </div>
                <div className={`${styles.glassContent} ${styles.projectContent}`}>
                  <span className={styles.projectCategory}>{project.category} · {project.year}</span>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <a className={styles.projectLink} href="#">
                    View case study <ArrowUpRight className={styles.projectLinkIcon} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </main>
        <footer className={styles.footer}>
          <p className={styles.footerText}>© 2026 sugi.dev — built at 60fps.</p>
        </footer>
      </div>
    </div>
  );
}
