import React from 'react';
import ControlEnt from '../../../../entites/ui/SaleWeekend/Control/ControlEnt';
import ControlBlock from '../../../../features/ui/Navigation/Control/ControlBlock/ControlBlock';
import ControlDashBoard from '../../../../features/ui/Navigation/Control/ControlDashBoard/ControlDashBoard';
import styles from './Control.module.scss';
function Control(props) {
  return (
    <div className="container">
      <ControlEnt block={<ControlBlock />} dashboard={<ControlDashBoard />} />
      <div className={styles.line}></div>
    </div>
  );
}

export default Control;
