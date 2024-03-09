import React from 'react';
import styles from './InputPole.module.scss';
function InputPole({ placeholder, children, ...props }) {
  return (
    <form>
      <input type="text" placeholder={placeholder} className={styles.search} />
      <div className={styles.btn}>{children}</div>
    </form>
  );
}

export default InputPole;
