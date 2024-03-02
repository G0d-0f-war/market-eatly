import React from 'react';
import styles from './Navigation.module.scss';

function Navigation(props) {
  const links = ['Menu', 'Blog', 'Pricing', 'Contact'];
  return (
    <nav>
      <div className={styles.navbar}>
        <ul className={styles.menu}>
          {links.map((element, i) => (
            <li key={i} className={styles.item}>
              <a href="#" className={styles.link}>
                {element}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
