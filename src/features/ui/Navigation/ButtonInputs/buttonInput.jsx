import styles from './buttonInput.module.scss'
export default function ButtonInput () { 
    return(
        <div className={styles.inputsButton}>
            <button className={styles.food}>Food</button>
            <button className={styles.resturent}>Resturent</button>
        </div>
    )
};