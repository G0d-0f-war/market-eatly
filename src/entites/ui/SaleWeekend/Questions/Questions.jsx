import styles from './Quenstions.module.scss'
import Lines from '../../../../app/assets/img/sale/Illustration 01.svg'
export default function QuestionsText () { 
    
    return ( 
        <div className={styles.QuestionsBlock}>
        <img src={Lines} alt="" />
        <div className={styles.Asked}>
            Frequently Asked 
        </div>
        <div className={styles.Questions}>
            Questions
        </div>
        </div>
    )
};