import styles from './Modal.module.scss';
import g from '../../../../app/assets/img/modal/G.png';
import apple from '../../../../app/assets/img/modal/path4.png'
export default function Modal ({active,setActive}) { 
    return ( 
        <div className={active ? styles.active: styles.modal} onClick={() => setActive(false)}>
            <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
                <div className={styles.button}>
                    <button><img src={g} alt="" /></button>
                    <button><img src={apple} alt="" /></button>
                </div>
                <div className={styles.OR}>OR</div>
                <input type="text" placeholder='FULL NAME' className={styles.input}/>
                <input type="email" placeholder='EMAIL' className={styles.input}/>
                <input type="password" placeholder='PASSWORD' className={styles.input}/>
                <button className={styles.signUp}>SIGN UP</button>
                <div className={styles.text}>Already Have An Account? <span>Log In</span></div>
            </div>
        </div>
    )
}