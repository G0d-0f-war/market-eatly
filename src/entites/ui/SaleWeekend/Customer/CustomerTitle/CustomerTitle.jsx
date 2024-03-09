import React from 'react';
import styles from './CustomerTitle.module.scss';
function CustomerTitle(props) {
  return (
    <div className={styles.title}>
      Customer <span>Say</span>
    </div>
  );
}

export default CustomerTitle;
