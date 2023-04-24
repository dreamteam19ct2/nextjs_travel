"use client";
import styles from "./historycard.module.css";
export default function HistoryCard() {
  
  return (
    <>
      <div className={styles.card__container}>
        <img
          className={styles.card__img}
          src="https://static-images.vnncdn.net/files/publish/2023/2/4/ezgifcom-gif-maker-208.jpg"
          alt="img"
        />
        <div className={styles.card__content}>
          <span className={styles.card__content__title}>Tour Name :</span>
          <span className={styles.card__content__text}>BaNa Hill</span>
        </div>
        <div className={styles.card__content}>
          <span className={styles.card__content__title}>
            Number Of People :
          </span>
          <span className={styles.card__content__text}> 10</span>
        </div>
        <div className={styles.card__content}>
          <span className={styles.card__content__title}>Total Price : </span>
          <span className={styles.card__content__text}> 1000$</span>
        </div>
        <div className={styles.card__content}>
          <span className={styles.card__content__titleStatus}>Status : </span>
          <span className={styles.card__content__textStatus__pending}>
            Pending
          </span>
        </div>
      </div>
    </>
  );
}
