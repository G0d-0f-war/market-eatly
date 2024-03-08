import React from 'react';
import ControlEnt from '../../../../entites/ui/SaleWeekend/Control/ControlEnt';
import ControlBlock from '../../../../features/ui/Navigation/Control/ControlBlock/ControlBlock';
import ControlDashBoard from '../../../../features/ui/Navigation/Control/ControlDashBoard/ControlDashBoard';

function Control(props) {
  return (
    <div className="container">
      <ControlEnt block={<ControlBlock />} dashboard={<ControlDashBoard />} />
    </div>
  );
}

export default Control;
