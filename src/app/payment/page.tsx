"use client";
import { useState, useEffect } from "react";
import styles from "./payment.module.css";
import Headere from "@/components/layout/Header/header";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import axios from "axios";
import Footer from "@/components/layout/Footer/footer";
export default function payment() {
  const [tourName, setTourName] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [maxPeople, setMaxPeople] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");

  const id_user = localStorage.getItem("id");
  const id_tour = localStorage.getItem("selectedTourId");
  const nameTour = localStorage.getItem("nameTour");
  const priceDefault = localStorage.getItem("price");
  const img = localStorage.getItem("img");



  useEffect(() => {
    const totalPrice = Number(priceDefault) * Number(maxPeople);
    setPrice(totalPrice.toString());
  }, [maxPeople]);

  async function handleSubmit(event: any) {
    event.preventDefault();
    try {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");
      const dateHistory = `${year}-${month}-${day}`;
      alert(dateHistory);
      const response = await axios.post("http://127.0.0.1:8000/api/booktour", {
        id_user: Number(id_user),
        tour_name: nameTour,
        tour_id: Number(id_tour),
        price: Number(price),
        date_history: dateHistory,
        status_tour: "waiting",
        people: maxPeople,
        img:img
      });
      alert("booking tour thanh cong");
      // Redirect đến trang khác hoặc làm bất kỳ thao tác nào khác tùy thuộc vào yêu cầu của bạn
      window.location.href = "/history";
    } catch (error) {
      alert("khong connnect dược server!");
      console.error(error);
    }
  }
  return (
    <>
      <Headere></Headere>
      <div className={styles.container_payment}>
        <div className={styles.container__header__namePayment}>
          <Link href="/tour_detail">
            <ArrowBackIosIcon className={styles.icon} />
          </Link>
          <h1 className={styles.container__header__namePayment__Name}>
            {nameTour}
          </h1>
        </div>
        <form onSubmit={handleSubmit} className={styles.payment__form}>
          <Grid container spacing={5}>
            <Grid item xs={4} className={styles.payment__form__sub}>
              Full name :
            </Grid>
            <Grid item xs={8}>
              <input
                type="text"
                className={styles.payment__form__input}
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
              />
            </Grid>
            <Grid item xs={4} className={styles.payment__form__sub}>
              Phone Number :
            </Grid>
            <Grid item xs={8}>
              <input
                type="text"
                className={styles.payment__form__input}
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </Grid>
            <Grid item xs={4} className={styles.payment__form__sub}>
              Email Address :
            </Grid>
            <Grid item xs={8}>
              <input
                type="text"
                className={styles.payment__form__input}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Grid>
            <Grid item xs={4} className={styles.payment__form__sub}>
              Number of People :
            </Grid>
            <Grid item xs={8}>
              <input
                type="text"
                className={styles.payment__form__input}
                value={maxPeople}
                onChange={(event) => setMaxPeople(event.target.value)}
              />
            </Grid>
            <Grid item xs={4} className={styles.payment__form__sub}>
              Address:
            </Grid>
            <Grid item xs={8}>
              <input
                type="text"
                className={styles.payment__form__input}
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
            </Grid>
          </Grid>
        </form>
        <div className={styles.payment__booking}>
          <div>
            <span className={styles.payment__price}>Price </span>
            <span className={styles.payment__price__person}>{price}$</span>
          </div>
          <button className={styles.payment__button} onClick={handleSubmit}>
            Booking Now
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
