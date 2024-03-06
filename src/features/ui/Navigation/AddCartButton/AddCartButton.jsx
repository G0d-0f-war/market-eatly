import React from 'react';
import plus from '../../../../app/assets/img/dishes/plus.svg';
import styles from './AddCartButton.module.scss';
function AddCartButton(props) {
  return (
    <a className={styles.button} href="">
      <img src={plus} alt="" />
    </a>
  );
}

export default AddCartButton;
