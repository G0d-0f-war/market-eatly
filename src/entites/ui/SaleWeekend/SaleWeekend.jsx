import styles from './SaleWeekend.module.scss';
import WeekendSale from '../../../app/assets/img/sale/bgkImg.png';
import FoodImg from '../../../app/assets/img/sale/Food Image.png';
import Lines from '../../../app/assets/img/sale/Illustration 01.svg';
export default function SaleWeekend() {
  return (
    <div className={styles.banner}>
      <div className={styles.img}>
        <img src={WeekendSale} alt="" />
      </div>
      <div className={styles.lines}>
        <img src={Lines} alt="" />
      </div>
      <div className={styles.title}>
        50% OFF <br /> <p>WEEKENDS</p>
      </div>
      <div className={styles.FoodImg}>
        <img src={FoodImg} alt="" />
      </div>
    </div>
  );
}
