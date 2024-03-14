import styles from './Modal.module.scss';
export default function Modal({ active, setActive, children }) {
  return (
    <div
      className={`${styles.modal} ${active ? styles.open : ''}`}
      onClick={() => setActive(false)}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
