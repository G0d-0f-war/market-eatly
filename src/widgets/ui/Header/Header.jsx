import React, { useState } from 'react';
import styles from './Header.module.scss';
import Navigation from '../../../features/ui/Navigation/Navigation';
import Logo from '../../../shared/ui/Logo/Logo';
import Button from '../../../shared/ui/Button/Button';
import Modal from '../../../features/ui/Navigation/Modal/Modal';

function Header(props) {
  const [modalActive, setModalActive] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Logo />
          <Navigation />

          <div className={styles.buttons}>

            <div>
            <Button primal={'primal'} >Log In</Button>
            </div>

            <div onClick={() => setModalActive(true)}>
            <Button onClick={() => setModalActive(true)}>Sign Up</Button>
            </div>
            
          </div>
        </div>
      <div className={styles.line}></div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}/>
    </header>

  );
}

export default Header;