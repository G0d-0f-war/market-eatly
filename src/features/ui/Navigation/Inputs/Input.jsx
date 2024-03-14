import styles from './Inputs.module.scss';
import search from '../../../../app/assets/img/sale/Search.png';
export default function Input({ primal, placeholder, type, reg, ...props }) {
  return (
    <div className={styles.inputsearch}>
      <div className={styles.input}>
        {primal ? <img src={search} alt="" /> : false}
        <input type={type} placeholder={placeholder} className={reg ? styles.reg : styles.search} />
      </div>
    </div>
  );
}
