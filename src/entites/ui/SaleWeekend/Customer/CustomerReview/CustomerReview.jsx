import React from 'react';
import styles from './CustomerReview.module.scss';
import pic from '../../../../../app/assets/img/review/pic.png';
import path from '../../../../../app/assets/img/review/path.svg';
import stars from '../../../../../app/assets/img/review/stars.svg';
function CustomerReview(props) {
  return (
    <div className={styles.block}>
      <div className={styles.items}>
        <div className={styles.information}>
          <div className={styles.profile}>
            <div className={styles.img}>
              <img src={pic} alt="" />
            </div>
            <div className={styles.about}>
              <div className={styles.name}>Alexander R.</div>
              <div className={styles.experience}>01 year with us </div>
            </div>
          </div>
          <div className={styles.symbol}>
            <img src={path} alt="" />
          </div>
        </div>
        <div className={styles.review}>
          <div className={styles.text}>
            “ Online invoice payment helps companies save time, are faster and save maximum effort
            for the clients and save maximum effort. Online invoice payment helps companies save
            time ”
          </div>
        </div>
        <div className={styles.stars}>
          <img src={stars} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CustomerReview;
