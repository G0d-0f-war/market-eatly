import React from 'react';
import styles from './ControlDashBoard.module.scss';
import icon from '../../../../../app/assets/img/control/icon.svg';
function ControlDashBoard(props) {
  return (
    <div className={styles.dashboard}>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.title}>Purchases</div>
          <form>
            <select className={styles.select} id="fruits" name="fruits">
              <option value="This month">This month</option>
              <option value="october">October</option>
            </select>
          </form>
        </div>
        <div className={styles.block}>
          <div className={styles.obertka}>
            <div className={styles.items}>
              <div className={styles.content}>
                <div className={styles.img}>
                  <img src={icon} alt="" />
                </div>
                <div className={styles.information}>
                  <div className={styles.information__title}>Expense</div>
                  <div className={styles.information__text}>Increased By 10%</div>
                </div>
              </div>

              <div className={styles.price}>$409.00</div>
            </div>
            <div className={styles.value}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ControlDashBoard;
