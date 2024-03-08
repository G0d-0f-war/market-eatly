import bigKing from '../../../../app/assets/img/bigKing/Image (13).png';
import star from '../../../../app/assets/img/bigKing/Star.png';
import styles from './bigKing.module.scss';
import Favorites from '../../../../shared/ui/Favorites/Favorites';
import favorites from '../../../../app/assets/img/bigKing/Bookmark.png'
export default function Bigking () { 
    
    
    
    
    return ( 
        <div className={styles.block}>
        <div className={styles.image}>
          <img src={bigKing} alt="" />
        </div>

        <div className={styles.items}>
          <div className={styles.items__title}>The Chicken King</div>

              <div className={styles.information}>
                <div className={styles.time}>24min •</div>

                <div className={styles.raiting}>
                  <img src={star} alt="" />
                  <div className={styles.raiting__text}>4.8</div>
                </div>
              </div>
            <div className={styles.favorite}>
                {/* <img src={favorites} alt="" /> */}
                <Favorites width="60" height="60" />
            </div>
        </div>
      </div>
    )
};