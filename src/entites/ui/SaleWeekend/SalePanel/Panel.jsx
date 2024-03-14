import styles from './SalePanel.module.scss'
import pizza from '../../../../app/assets/img/sale/Pizza.svg'
import donat from '../../../../app/assets/img/sale/Doughnat.png'
import ice from '../../../../app/assets/img/sale/Ice.png'
import hotDog from '../../../../app/assets/img/sale/Hotdog (1).png'
import PriceSale from '../../../../features/ui/Navigation/PriceCategory/PriceSale';
// import Button from '../../../../shared/ui/Button/Button';
export default function SalePanel () { 
        return ( 
            <div className={styles.SalePanel}>
                <div className={styles.SalePanelOne}>
                <div className={styles.category}>Category</div>
                <div className={styles.food}>

                <button className={styles.pizza}>
                    <img src={pizza} alt="" className={styles.foodtext}/>Pizza<img/>
                </button>
                <button className={styles.asian}>
                    <img src={hotDog} alt="" className={styles.foodtext}/>Asian<img/>
                </button>
                <button className={styles.donat}>
                    <img src={donat} alt="" className={styles.foodtext}/>Donat<img/>
                </button>
                <button className={styles.ice}>
                    <img src={ice} alt="" className={styles.foodtext}/>Ice<img/>
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