import telegtamIcon from '../../../../app/assets/img/footerImg/icons8-телеграм-50.png';
import gitHubIcon from '../../../../app/assets/img/footerImg/icons8-github-50.png'
import styles from './FooterImg.module.scss'
export default function FooterImg () {
    return ( 
        <>
            <div className={styles.footerFeatures}>
                <div className={styles.footerBlock}>
                    <p>© 2024 EATLY All Rights Reserved.</p>
                    
                    <div className={styles.images}>
                        <a href='https://t.me/souhhhh' target='_blank'>
                        <img src={telegtamIcon} alt="" />
                        </a>
                        <a href="https://github.com/souhhhhh" target='_blank'>
                        <img src={gitHubIcon} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
};