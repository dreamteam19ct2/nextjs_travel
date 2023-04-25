"use client";
import styles from "./checkTour.module.css";
import HeaderAdmin from "@/components/layout/HeaderAdmin/header_admin";
import CheckTourCard from "@/components/common/checkTour-card/CheckTourCard";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "@/components/layout/Footer/footer";

interface Props {
  tour_name: string;
  img: string;
  people: string;
  totalPrice: string;
  dayBook: string;
  status: string;
  id_history: string;
}
export default function checktour() {
  const [historyTour, setHistoryTour] = useState([]);
  const [idHistory, setIdHistory] = useState<string | null>(null);
  const [confirmCount, setConfirmCount] = useState(0);
  //get list tour is pendding
  useEffect(() => {
    async function fetchBookingTourData() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/get_confirm_tour"
        );
        const data = response.data;
        setHistoryTour(data);
      } catch (error) {
        alert("Không kết nối được với server!");
        console.error(error);
      }
    }
    fetchBookingTourData();
  }, [confirmCount]);
  // click confirm tour
  async function handleConfirm(event: any) {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/confirm_tour",
        {
          id: Number(idHistory),
        }
      );
      alert("confirm tour thanh cong");
      setConfirmCount(confirmCount + 1);
    } catch (error) {
      alert("khong connnect dược server!");
      console.error(error);
    }
  }
  // click cancel tour
  async function handleCancel(event: any) {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/cancel_confirm_tour",
        {
          id: Number(idHistory),
        }
      );
      alert("cancel tour thanh cong");
      setConfirmCount(confirmCount + 1);
    } catch (error) {
      alert("khong connnect dược server!");
      console.error(error);
    }
  }
  return (
    <>
      <HeaderAdmin></HeaderAdmin>
      <div className={styles.history__container}>
        <Grid container spacing={2}>
          {historyTour.map((tour: any) => (
            <Grid item xs={4}>
              <div
                className={styles.card__container}
                onMouseOver={() => setIdHistory(tour.id)}
              >
                <img className={styles.card__img} src={tour.img} alt="img" />
                <div className={styles.card__content}>
                  <span className={styles.card__content__title}>
                    Tour Name :
                  </span>
                  <span className={styles.card__content__text}>
                    {tour.tour_name}
                  </span>
                </div>
                <div className={styles.card__content}>
                  <span className={styles.card__content__title}>
                    Number Of People :
                  </span>
                  <span className={styles.card__content__text}>
                    {tour.people}
                  </span>
                </div>
                <div className={styles.card__content}>
                  <span className={styles.card__content__title}>
                    Total Price :
                  </span>
                  <span className={styles.card__content__text}>
                    {tour.price}$
                  </span>
                </div>
                <div className={styles.card__content}>
                  <span className={styles.card__content__title}>
                    Day Booking :
                  </span>
                  <span className={styles.card__content__text}>
                    {tour.date_history}
                  </span>
                </div>
                <div className={styles.card__content}>
                  <button className={styles.btn_reject} onClick={handleCancel}>
                    Reject
                  </button>
                  <button className={styles.btn_accept} onClick={handleConfirm}>
                    Accept
                  </button>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer></Footer>
    </>
  );
}
