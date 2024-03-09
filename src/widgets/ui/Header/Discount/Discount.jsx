import React from 'react';
import DiscountEnt from '../../../../entites/ui/SaleWeekend/Discount/DiscountEnt';
import InputPole from '../../../../features/ui/Navigation/InputPole/InputPole';
import Button from '../../../../shared/ui/Button/Button';
function Discount(props) {
  return (
    <div className="container">
      <DiscountEnt>
        <InputPole placeholder="Enter Your Email Address">
          <Button>Subscribe</Button>
        </InputPole>
      </DiscountEnt>
    </div>
  );
}

export default Discount;
