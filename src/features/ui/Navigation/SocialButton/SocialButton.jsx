import React from 'react';
import styles from './SocialButton.module.scss';
function SocialButton({ img }) {
  return (
    <button className={styles.button}>
      <img src={img} alt="" />
    </button>
  );
}

export default SocialButton;
