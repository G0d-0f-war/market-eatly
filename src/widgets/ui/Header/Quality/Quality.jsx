import React from 'react';
import QualityEnt from '../../../../entites/ui/SaleWeekend/Quality/QualityEnt';
import styles from './Quality.module.scss';
function Quality(props) {
  return (
    <div className="container">
      <QualityEnt />
      <div className={styles.line}></div>
    </div>
  );
}

export default Quality;
