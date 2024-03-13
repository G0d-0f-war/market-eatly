import styles from './Modal.module.scss'
export default function Modal ({active,setActive}) { 
    return ( 
        <div className={active ? styles.active: styles.modal} onClick={() => setActive(false)}>
            <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </div>
        </div>
    )
}