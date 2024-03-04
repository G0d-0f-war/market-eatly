import styles from './SalePanel.module.scss'
import pizza from '../../../../app/assets/img/sale/Pizza.svg'

import PriceSale from '../../../../features/ui/Navigation/PriceCategory/PriceSale';
// import Button from '../../../../shared/ui/Button/Button';
export default function SalePanel () { 
        return ( 
            <div className={styles.SalePanel}>
                <div className={styles.SalePanelOne}>
                <div className={styles.category}>Category</div>
                <div className={styles.food}>

                <button className={styles.foodbutton}>
                    <img src={pizza} alt="" className={styles.foodtext}/>Pizza<img/>
                </button>
                </div>
              
                <div className={styles.sortBy}>

                    <p>Sort By</p>

                    <div className={styles.allSortBy}>

                    <div className={styles.sort}>
                        Recomended
                        Most Popular
                    </div>

                    <select className={styles.sortbyDelivery}>
                        <option value="">Fast delivery</option> 
                        <option value="">Pickup</option> 
                    </select>
                    </div>
                </div>
                    <PriceSale />
                    {/* <Button>Button</Button> */}
                    <button className={styles.buttonApply}>Apply</button>
                </div>
            </div>
        )
    };  