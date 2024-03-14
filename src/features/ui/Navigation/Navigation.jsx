import React from 'react';
import styles from './Navigation.module.scss';
import { Link } from 'react-router-dom';
function Navigation(props) {
  const links = [{name: 'Menu', path: "/menu"}, {name: 'Blog', path: '/blog'}, {name: 'Pricing', path: '/pricing'}, {name: 'Contact', path: '/contact'}];
  return (
    <nav>
      <div className={styles.navbar}>
        <ul className={styles.menu}>
          {links.map((element, i) => (
            <li key={i} className={styles.item}>
              <Link to={element.path} className={styles.link}>
                {element.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
