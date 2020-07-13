import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <a
            href="https://news.ycombinator.com/newsguidelines.html"
            className={styles.navItemLink}
            rel="nofollow noopener noreferrer"
          >
            Guidelines
          </a>
        </li>
        <li className={styles.navItem}>
          <a
            href="https://news.ycombinator.com/newsfaq.html"
            className={styles.navItemLink}
            rel="nofollow noopener noreferrer"
          >
            FAQ
          </a>
        </li>
        <li className={styles.navItem}>
          <a
            href="mailto:hn@ycombinator.com"
            className={styles.navItemLink}
            rel="nofollow noopener noreferrer"
          >
            Support
          </a>
        </li>
        <li className={styles.navItem}>
          <a
            href="https://github.com/HackerNews/API"
            className={styles.navItemLink}
            rel="nofollow noopener noreferrer"
          >
            API
          </a>
        </li>
        <li className={styles.navItem}>
          <a
            href="https://news.ycombinator.com/security.html"
            className={styles.navItemLink}
            rel="nofollow noopener noreferrer"
          >
            Security
          </a>
        </li>
        <li className={styles.navItem}>
          <a
            href="https://news.ycombinator.com/lists"
            className={styles.navItemLink}
            rel="nofollow noopener noreferrer"
          >
            Lists
          </a>
        </li>
        <li className={styles.navItem}>
          <a
            href="https://news.ycombinator.com/bookmarklet.html"
            className={styles.navItemLink}
            rel="nofollow noopener noreferrer"
          >
            Bookmarklet
          </a>
        </li>
        <li className={styles.navItem}>
          <a
            href="https://www.ycombinator.com/legal/ className={styles.navItemLink}"
            className={styles.navItemLink}
            rel="nofollow noopener noreferrer"
          >
            Legal
          </a>
        </li>
        <li className={styles.navItem}>
          <a
            href="https://www.ycombinator.com/apply/ className={styles.navItemLink}"
            className={styles.navItemLink}
            rel="nofollow noopener noreferrer"
          >
            Apply to YC
          </a>
        </li>
        <li className={styles.navItem}>
          <a
            href="mailto:hn@ycombinator.com"
            className={styles.navItemLink}
            rel="nofollow noopener noreferrer"
          >
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
