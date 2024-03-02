import React from 'react';
import styles from './Navigation.module.scss';
import { Link } from 'react-router-dom';
function Navigation(props) {
  const links = ['Menu', 'Blog', 'Pricing', 'Contact'];
  return (
    <nav>
      <div className={styles.navbar}>
        <ul className={styles.menu}>
          {links.map((element, i) => (
            <li key={i} className={styles.item}>
              <Link to="/menu" className={styles.link}>
                {element}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
