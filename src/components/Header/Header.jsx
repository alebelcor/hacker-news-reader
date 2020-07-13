import React from 'react';

import routes from 'src/utils/routes-helper';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={`${styles.navItem} ${styles.noSeparator}`}>
            <a href={routes('index')} className={styles.navItemLink}>
              <img
                src={`${process.env.PUBLIC_URL}/y18.gif`}
                width="18"
                height="18"
                className={styles.logo}
                role="presentation"
                alt=""
              />
              <span className="sr-only">Go to Homepage</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href={routes('topStories')}
              className={`${styles.navItemLink} ${styles.navItemLinkActive}`}
            >
              <span aria-hidden="true">Top</span>
              <span className="sr-only">Go to top stories</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="https://news.ycombinator.com/newest"
              className={styles.navItemLink}
              rel="nofollow noopener noreferrer"
            >
              <span aria-hidden="true">New</span>
              <span className="sr-only">Go to newest stories</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="https://news.ycombinator.com/best"
              className={styles.navItemLink}
              rel="nofollow noopener noreferrer"
            >
              <span aria-hidden="true">Best</span>
              <span className="sr-only">Go to best stories</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="https://news.ycombinator.com/submit"
              className={styles.navItemLink}
              rel="nofollow noopener noreferrer"
            >
              <span aria-hidden="true">Submit</span>
              <span className="sr-only">Submit a story</span>
            </a>
          </li>
          <li className={`${styles.navItem} ${styles.noSeparator}`}>
            <a
              href="#0"
              className={`${styles.navItemLink} ${styles.more}`}
              rel="nofollow noopener noreferrer"
              onClick={(e) => e.preventDefault()}
            >
              More
            </a>
          </li>
          <li className={`${styles.navItem} ${styles.noSeparator} ${styles.moveRight}`}>
            <a
              href="https://news.ycombinator.com/login?goto=news"
              className={styles.navItemLink}
              rel="nofollow noopener noreferrer"
            >
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
