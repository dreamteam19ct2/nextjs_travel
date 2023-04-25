"use client";
import styles from "./checkTourCard.module.css";

interface Props {
  tour_name: string;
  img: string;
  people: string;
  totalPrice: string;
  dayBook: string;
  status: string;
  id_history: string;
}
export default function CheckTourCard({
  tour_name,
  img,
  people,
  totalPrice,
  dayBook,
  status,
  id_history,
}: Props) {
  const id_history_tour = localStorage.setItem('id_history', id_history);
  return (
    <>
      <div className={styles.card__container}>
        <img className={styles.card__img} src={img} alt="img" />
        <div className={styles.card__content}>
          <span className={styles.card__content__title}>Tour Name : </span>
          <span className={styles.card__content__text}> {tour_name}</span>
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
          <button className={styles.btn_reject}>Reject</button>
          <button className={styles.btn_accept}>Accept</button>
        </div>
      </div>
    </>
  );
}
