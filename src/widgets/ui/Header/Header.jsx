import React, { useState } from 'react';
import styles from './Header.module.scss';
import Navigation from '../../../features/ui/Navigation/Navigation';
import Logo from '../../../shared/ui/Logo/Logo';
import Button from '../../../shared/ui/Button/Button';
import Modal from '../../../features/ui/Navigation/Modal/Modal';
import Input from '../../../features/ui/Navigation/Inputs/Input';
import AuthForm from '../../../entites/ui/SaleWeekend/AuthForm/AuthFrom';
import SocialButton from '../../../features/ui/Navigation/SocialButton/SocialButton';
import goole from '../../../app/assets/img/modal/G.png';
import apple from '../../../app/assets/img/modal/path4.png';
function Header(props) {
  const [modalActive, setModalActive] = useState(false);
  const inputs = [
    { placeholder: 'FULL NAME', type: 'text', reg: true },
    { placeholder: 'EMAIL', type: 'email', reg: true },
    { placeholder: 'PASSWORD', type: 'password', reg: true },
  ];
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Logo />
          <Navigation />

          <div className={styles.buttons}>
            <Button primal={'primal'}>Log In</Button>
            <Button onClick={() => setModalActive(true)}>Sign Up</Button>
          </div>
        </div>
        <div className={styles.line}></div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <AuthForm
          google={<SocialButton img={goole} />}
          apple={<SocialButton img={apple} />}
          input={inputs.map((item) => (
            <Input placeholder={item.placeholder} type={item.type} reg={item.reg} />
          ))}
          signUp={<Button width={'382.44px'}>SIGN UP</Button>}
        />
      </Modal>
    </header>
  );
}

export default Header;
