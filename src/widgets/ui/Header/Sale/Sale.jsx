import SaleWeekend from "../../../../entites/ui/SaleWeekend/SaleWeekend";
import styles from './Sale.module.scss'
import Input from "../../../../shared/ui/Inputs/input";
import ButtonInput from "../../../../features/ui/Navigation/ButtonInputs/buttonInput";
export default function Sale () { 
return ( 
        
    <div className="container">
        <div className={styles.wrapper}>
            <div className={styles.item}>
                <div className={styles.left}>
                    <SaleWeekend />
                    <Input />
        <ButtonInput />
                    </div>
                <div className={styles.right}></div>
            </div>
        </div>

    </div>
    )
}