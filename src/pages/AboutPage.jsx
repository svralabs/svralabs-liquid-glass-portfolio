import React from 'react';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  const skills = ['TypeScript', 'React', 'Node', 'Go', 'Rust', 'Postgres', 'Palette'];
  const timelineItems = [
    { year: '2026', text: 'Independent — product & platform engineering' },
    { year: '2023', text: 'Senior engineer, realtime collaboration team' },
    { year: '2020', text: 'Frontend engineer, design systems' },
    { year: '2018', text: 'First commit, first startup' }
  ];

  return (
    <div className={styles.pageContainer}>
      {/* Background */}
      <div className={styles.background}>
        <img alt="" className={styles.bgPhoto} src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg" />
        <div className={styles.bgSheen}></div>
        <div className={styles.bgGradient}></div>
      </div>

      {/* Content */}
      <div className={styles.contentContainer}>
        {/* Navigation */}
        <nav className={styles.nav}>
          <a className={styles.navLink} href="hero.html">
            <span className={styles.navLogo}>
              <span className={styles.navLogoText}>s/</span>
            </span>
            <span className={styles.navBrand}>sugi<span className={styles.navBrandSuffix}>.dev</span></span>
          </a>
          <div className={styles.navItems}>
            <div className={styles.navMenu}>
              <span className={styles.navMenuLinks}>
                <a className={styles.navMenuLink} href="hero.html">Home</a>
                <a className={styles.navMenuLink} href="services.html">Services</a>
                <a className={styles.navMenuLink} href="work.html">Work</a>
                <a className={`${styles.navMenuLink} ${styles.navMenuLinkActive}`} href="about.html">About</a>
              </span>
            </div>
            <a className={styles.navContact} href="contact.html">
              <span className={styles.navContactContent}>
                <span className="material-symbols-outlined">mail</span>
                Get in touch
              </span>
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <main className={styles.mainContent}>
          {/* Image Column */}
          <div className={styles.imageColumn}>
            <img alt="Workspace" className={styles.imageColumnImg} src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg" />
            <div className={styles.imageColumnGradient}></div>
            <div className={styles.imageColumnContent}>
              <p className={styles.imageColumnLabel}>Based in</p>
              <p className={styles.imageColumnTitle}>Tokyo, Japan</p>
              <p className={styles.imageColumnSubtitle}>Working across timezones</p>
            </div>
          </div>

          {/* About Column */}
          <div className={styles.aboutColumn}>
            <div className={styles.aboutColumnContent}>
              <p className={styles.aboutColumnLabel}>About</p>
              <h1 className={styles.aboutColumnTitle}>
                I build software that feels <span className={styles.aboutColumnTitleEmphasis}>calm and quick.</span>
              </h1>
              <p className={styles.aboutColumnText}>
                I've spent the last six years shipping products across startups and studios — equally at home in a design file and a terminal. I care about the details users never notice: the frame that never drops, the state that never gets stuck, the API that just makes sense.
              </p>
              {/* Skills Tags */}
              <div className={styles.skillsTags}>
                {skills.map((skill, index) => (
                  <span key={index} className={styles.skillTag}>{skill}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline Column */}
          <div className={styles.timelineColumn}>
            <div className={styles.timelineColumnContent}>
              <p className={styles.timelineColumnLabel}>Timeline</p>
              <div className={styles.timelineItems}>
                {timelineItems.map((item, index) => (
                  <div key={index} className={styles.timelineItem}>
                    <span className={styles.timelineItemYear}>{item.year}</span>
                    <span className={styles.timelineItemText}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <p className={styles.footer}>© 2026 sugi.dev — built at 60fps.</p>
      </div>
    </div>
  );
};

export default AboutPage;
