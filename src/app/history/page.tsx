"use client";
import styles from "./history.module.css";
import Header from "@/components/layout/Header/header";
import HistoryCard from "@/components/common/history-card/HistoryCard";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "@/components/layout/Footer/footer";
export default function history() {
  const [historyTour, setHistoryTour] = useState([]);

  const id_user = localStorage.getItem("id");

  useEffect(() => {
    async function fetchBookingTourData() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/get_bookingtour",
          {
            params: {
              user_id: id_user,
            },
          }
        );
        const data = response.data;
        setHistoryTour(data);
      } catch (error) {
        alert("Không kết nối được với server!");
        console.error(error);
      }
    }
    fetchBookingTourData();
  }, [id_user]);

  return (
    <>
      <Header></Header>
      <div className={styles.history__container}>
        <Grid container spacing={2}>
          {historyTour.map((tour: any) => (
            <Grid item xs={4}>
              <HistoryCard
                dayBook={tour.date_history}
                tour_name={tour.tour_name}
                img={tour.img}
                people={tour.people}
                totalPrice={tour.price}
                status={tour.status_tour}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer></Footer>
    </>
  );
}
