"use client";
import styles from "./login.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function () {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.form__signin}>
          <div className={styles.text1}>Welcome back !!!</div>
          <div className={styles.text2}>Sing in</div>
          <div className={styles.form__input}>
            <div className={styles.form__input__title}>Email</div>
            <input
              type="text"
              id="email"
              className={styles.form__input__text}
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.form__input}>
            <div className={styles.form__input__title}>Password</div>
            <input
              type="text"
              id="email"
              className={styles.form__input__text}
              placeholder="Enter your Password"
            />
          </div>
          <button className={styles.btn}>
            SIGN IN
            <ArrowForwardIosIcon className={styles.icon} />
          </button>
          <span className={styles.Exception}>
            I don’t have an account ?
            <span className={styles.Exception__link}> Sign up</span>
          </span>
          <img className={styles.img} src="./tree.png" alt="img" />
        </div>
      </div>
    </>
  );
}
