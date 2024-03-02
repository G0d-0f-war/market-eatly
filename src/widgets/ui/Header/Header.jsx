import React from 'react';
import styles from './Header.module.scss';
import Navigation from '../../../features/ui/Navigation/Navigation';
import Logo from '../../../shared/ui/Logo/Logo';
import Button from '../../../shared/ui/Button/Button';

function Header(props) {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Logo />
          <Navigation />
          <div className={styles.buttons}>
            <Button primal={'primal'}>Log In</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
