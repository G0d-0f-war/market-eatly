import SaleWeekend from "../../../../entites/ui/SaleWeekend/SaleWeekend";
import styles from './Sale.module.scss'
import Input from "../../../../shared/ui/Inputs/input";
import ButtonInput from "../../../../features/ui/Navigation/ButtonInputs/buttonInput";
import SalePanel from "../../../../entites/ui/SaleWeekend/SalePanel/Panel";
import Button from "../../../../shared/ui/Button/Button";
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
                <div className={styles.right}>
                    <SalePanel />
                </div>

            </div>
        </div>

    </div>
    )
}