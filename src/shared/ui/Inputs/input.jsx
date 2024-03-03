import styles from './inputs.module.scss'
import search from '../../../app/assets/img/sale/Search.png'
export default function Input () { 
    return (
        <div className={styles.inputsearch}>
            <div className={styles.input}>
            <img src={search} alt="" />
            <input type="text"  placeholder="Search" className={styles.search}/>
            </div>
        </div>
    )
};
