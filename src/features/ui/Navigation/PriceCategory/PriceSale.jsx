import styles from './PriceSale.module.scss'
export default function PriceSale () { 
    return ( 
        <div className={styles.range}>
            <p className={styles.PriceText}>Price</p>
            <input type="range" min={0} max={1000} className={styles.Inputrange} />
            <div className={styles.price}>
                <div>$0</div>
                <div>$25</div>
                <div>$50</div>
                <div>$100</div>
                <div>$500</div>
                <div>$1000</div>
            </div>
        </div>
    )
};