import React from 'react';
import styles from './Button.module.scss';

function Button({ children, primal, width, ...props }) {
  return (
    <button style={{ width: width }} {...props} className={primal ? styles.primal : styles.button}>
      <p className={styles.text}>{children}</p>
    </button>
  );
}

export default Button;
