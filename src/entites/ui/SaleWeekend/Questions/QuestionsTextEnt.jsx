import styles from './QuenstionsTextEnt.module.scss';
import Lines from '../../../../app/assets/img/sale/Illustration 01.svg';
export default function QuenstionsTextEnt() {
  return (
    <div className={styles.QuestionsBlock}>
      <img src={Lines} alt="" />
      <div className={styles.Asked}>Frequently Asked</div>1
      <div className={styles.Questions}>Questions</div>
    </div>
  );
}
