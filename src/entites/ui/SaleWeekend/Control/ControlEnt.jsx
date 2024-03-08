import React from 'react';
import styles from './ControlEnt.module.scss';

function ControlEnt({ block, dashboard }) {
  return (
    <div className={styles.control}>
      <div className={styles.items}>
        <div className={styles.left}>
          <div className={styles.title}>
            Control <span>Purchases</span> Via Dashboard
          </div>
          {block}
        </div>
        <div className={styles.right}>{dashboard}</div>
      </div>
    </div>
  );
}

export default ControlEnt;
