import React, { useState } from 'react';
import styles from './PortfolioHome.module.css';

const projects = [
  {
    id: 1,
    title: 'Aster',
    description: 'Design system & component library',
    category: 'Design',
    image: 'https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg',
  },
  {
    id: 2,
    title: 'Liquid Glass',
    description: 'UI component library',
    category: 'Development',
    image: 'https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg',
  },
  {
    id: 3,
    title: 'Neon',
    description: 'Data visualization tool',
    category: 'Design',
    image: 'https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg',
  },
  {
    id: 4,
    title: 'Quantum',
    description: 'Machine learning platform',
    category: 'Development',
    image: 'https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg',
  },
  {
    id: 5,
    title: 'Pulse',
    description: 'Health monitoring app',
    category: 'Design',
    image: 'https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg',
  },
  {
    id: 6,
    title: 'Echo',
    description: 'Communication platform',
    category: 'Development',
    image: 'https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg',
  },
];

const categories = ['All', 'Design', 'Development'];

export default function PortfolioHome() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <img alt="" className={styles.bgPhoto} src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg" />
        <div className={styles.bgSheen}></div>
        <div className={styles.bgGradient}></div>
      </div>

      <div className={styles.content}>
        <nav className={styles.nav}>
          <div className={styles.navLeft}>
            <span className={styles.logo}>
              <span className={styles.logoContent}>s/</span>
            </span>
            <span className={styles.siteName}>sugi<span className={styles.siteSuffix}>.dev</span></span>
          </div>
          <div className={styles.navRight}>
            <div className={styles.navLinks}>
              <span className={styles.navLinksContent}>
                <a className={styles.navLink} href="#work">Work</a>
                <a className={styles.navLink} href="#writing">Writing</a>
                <a className={styles.navLink} href="#about">About</a>
              </span>
            </div>
            <button className={styles.contactButton}>
              <span className={styles.contactButtonContent}>
                <span className="material-symbols-outlined">mail</span>
                Get in touch
              </span>
            </button>
          </div>
        </nav>

        <div className={styles.bentoGrid}>
          <div className={styles.heroCard}>
            <div className={styles.heroContent}>
              <div>
                <p className={styles.heroSubtitle}>Software Engineer · Tokyo</p>
                <h1 className={styles.heroTitle}>
                  Full-stack engineer building
                  <span className={styles.heroTitleItalic}>for the web.</span>
                </h1>
                <p className={styles.heroDescription}>
                  I'm Sugi. I ship performant interfaces and reliable systems — from first sketch to production — with an eye for detail and speed.
                </p>
              </div>
              <div className={styles.heroActions}>
                <a className={styles.viewWorkButton} href="#work">
                  <span className={styles.viewWorkButtonContent}>
                    <span className={styles.viewWorkIcon}>
                      <span className="material-symbols-outlined">arrow_up_right</span>
                    </span>
                    View work
                  </span>
                </a>
                <a className={styles.resumeLink} href="#">Download résumé</a>
              </div>
            </div>
          </div>

          <div className={styles.visualCard}>
            <img alt="Editor with source code" className={styles.visualImage} src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg" style={{ filter: 'grayscale(1) contrast(1.05) brightness(0.7)' }} />
            <div className={styles.visualGradient}></div>
            <div className={styles.visualContent}>
              <p className={styles.visualSubtitle}>Currently</p>
              <p className={styles.visualTitle}>Shipping design systems</p>
              <p className={styles.visualDescription}>TypeScript · Go · Postgres</p>
            </div>
          </div>

          <div className={styles.statusCard}>
            <div className={styles.statusContent}>
              <div className={styles.statusHeader}>
                <span className={styles.pulseDot}></span>
                <span className={styles.statusSubtitle}>Available</span>
              </div>
              <div>
                <p className={styles.statusTitle}>Open to new projects</p>
                <p className={styles.statusDescription}>Booking from Aug 2026</p>
              </div>
            </div>
          </div>

          <div className={styles.stackCard}>
            <div className={styles.stackContent}>
              <div className={styles.stackHeader}>
                <span className="material-symbols-outlined">terminal</span>
                <p className={styles.stackSubtitle}>Stack</p>
              </div>
              <div className={styles.stackTags}>
                <span className={styles.stackTag}>TypeScript</span>
                <span className={styles.stackTag}>React</span>
                <span className={styles.stackTag}>Node</span>
                <span className={styles.stackTag}>Go</span>
                <span className={styles.stackTag}>Postgres</span>
              </div>
            </div>
          </div>

          <div className={styles.workCard} id="work">
            <div className={styles.workContent}>
              <div className={styles.workHeader}>
                <div className={styles.workHeaderLeft}>
                  <span className="material-symbols-outlined">folder</span>
                  <p className={styles.workSubtitle}>Selected work</p>
                </div>
                <a className={styles.workAllLink} href="#">All projects</a>
              </div>

              <div className={styles.filterTabs}>
                {categories.map(category => (
                  <button
                    key={category}
                    className={`${styles.filterTab} ${activeCategory === category ? styles.activeFilterTab : ''}`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className={styles.projectGrid}>
                {currentProjects.map(project => (
                  <div key={project.id} className={styles.projectCard}>
                    <img src={project.image} alt={project.title} className={styles.projectImage} />
                    <div className={styles.projectContent}>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <p className={styles.projectDescription}>{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.pagination}>
                {Array.from({ length: Math.ceil(filteredProjects.length / projectsPerPage) }, (_, i) => (
                  <button
                    key={i + 1}
                    className={`${styles.pageButton} ${currentPage === i + 1 ? styles.activePageButton : ''}`}
                    onClick={() => paginate(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
