import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const links = [
    { name: 'Components', href: '#' },
    { name: 'Guidelines', href: '#' },
    { name: 'Storybook', href: '#' },
    { name: 'Docs', href: '#' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: 'github', href: '#' },
    { name: 'Globe', icon: 'twitter', href: '#' },
    { name: 'LinkedIn', icon: 'linkedin', href: '#' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>BUTTON_LABS</div>
        <nav className={styles.nav}>
          {links.map((link) => (
            <a key={link.name} href={link.href} className={styles.link}>
              {link.name}
            </a>
          ))}
        </nav>
        <div className={styles.social}>
          {socialLinks.map((social) => (
            <a key={social.name} href={social.href} className={styles.socialLink}>
              <span className="material-symbols-outlined">{social.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
