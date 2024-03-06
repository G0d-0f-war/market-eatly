import telegtamIcon from '../../../../app/assets/img/footerImg/telegram (1).png';
import gitHubIcon from '../../../../app/assets/img/footerImg/github.png';
import styles from './FooterImg.module.scss';
export default function FooterImg() {
  return (
    <>
      <div className={styles.footerFeatures}>
        <div className={styles.footerBlock}>
          <p>© 2024 EATLY All Rights Reserved.</p>

          <div className={styles.images}>
            <a href="https://t.me/souhhhh" target="_blank">
              <img src={telegtamIcon} height={`45px`} width={`45px`} alt="" />
            </a>
            <a href="https://github.com/souhhhhh" target="_blank">
              <img src={gitHubIcon} height={`40px`} width={`40px`} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
