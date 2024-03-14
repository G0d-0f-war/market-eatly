import React from 'react';
import styles from './AuthForm.module.scss';
function AuthForm({ google, apple, input, signUp }) {
  return (
    <div className={styles.auth}>
      <div className={styles.buttons}>
        {google}
        {apple}
      </div>
      <div className={styles.or}>OR</div>
      <div className={styles.inputs}>{input}</div>

      {signUp}
      <div className={styles.text}>
        Already Have An Account? <span>Log In</span>
      </div>
    </div>
  );
}

export default AuthForm;
