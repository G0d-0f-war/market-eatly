import styles from './QuestionsFea.module.scss';
import Line from '../../../../app/assets/img/Questions/Line 10.png';
export default function QuestionsFea() {
  return (
    <>
      <div className={styles.QuestionBlock}>
        <div className={styles.QuestionsText}>
          <div className={styles.QuestionsTextBlock}>
            <p className={styles.Question}>How long does delivery take?</p>
            <button className={styles.buttonImage}></button>
          </div>
          <img src={Line} alt="" />
        </div>
      </div>
    </>
  );
}
