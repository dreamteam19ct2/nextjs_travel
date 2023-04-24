"use client";
import styles from "./historycard.module.css";

interface Props {
  tour_name: string;
  img: string;
  people: string;
  totalPrice: string;
  dayBook: string;
  status: string;
  //   slug: string;
}

export default function HistoryCard({
  tour_name,
  img,
  people,
  totalPrice,
  dayBook,
  status,
}: Props) {
  return (
    <>
      <div className={styles.card__container}>
        <img
          className={styles.card__img}
          // src="https://static-images.vnncdn.net/files/publish/2023/2/4/ezgifcom-gif-maker-208.jpg"
          src={img}
          alt="img"
        />
        <div className={styles.card__content}>
          <span className={styles.card__content__title}>Tour Name :</span>
          <span className={styles.card__content__text}>{tour_name}</span>
        </div>
        <div className={styles.card__content}>
          <span className={styles.card__content__title}>
            Number Of People :
          </span>
          <span className={styles.card__content__text}> {people}</span>
        </div>
        <div className={styles.card__content}>
          <span className={styles.card__content__title}>Total Price : </span>
          <span className={styles.card__content__text}> {totalPrice}$</span>
        </div>
        <div className={styles.card__content}>
          <span className={styles.card__content__title}>Day Booking : </span>
          <span className={styles.card__content__text}> {dayBook}</span>
        </div>
        <div className={styles.card__content}>
          <span className={styles.card__content__titleStatus}>Status : </span>
          <span className={styles.card__content__textStatus__pending}>
            {status}
          </span>
        </div>
      </div>
    </>
  );
}
