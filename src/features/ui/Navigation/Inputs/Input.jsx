import styles from './Inputs.module.scss';
import search from '../../../../app/assets/img/sale/Search.png';
export default function Input({ primal, placeholder, variant, ...props }) {
  return (
    <div className={styles.inputsearch}>
      <div className={styles.input}>
        {primal ? <img src={search} alt="" /> : false}
        <input type="text" placeholder={placeholder} className={styles.search} />
      </div>
    </div>
  );
}
