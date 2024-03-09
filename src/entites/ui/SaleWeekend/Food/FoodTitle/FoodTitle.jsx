import styles from './FoodTitle.module.scss';
export default function FoodTitle ({title,...props}) { 
    return (
        <div className={styles.title}>
            <p>{title}</p>
        </div>
    )
};