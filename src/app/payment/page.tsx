"use client";

import styles from "./payment.module.css";
import Headere from "@/components/layout/Header/header";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Grid from "@mui/material/Grid";

export default function payment() {
  return (
    <>
      <Headere></Headere>
      <div className={styles.container_payment}>
        <div className={styles.container__header__namePayment}>
          <ArrowBackIosIcon />
          <h1 className={styles.container__header__namePayment__Name}>
            BaNa Hill
          </h1>
        </div>
        <form action="" className={styles.payment__form}>
          <Grid container spacing={5}>
            <Grid item xs={4} className={styles.payment__form__sub}>
              Full name :
            </Grid>
            <Grid item xs={8}>
              <input type="text" className={styles.payment__form__input} />
            </Grid>
            <Grid item xs={4} className={styles.payment__form__sub}>
              Phone Number :
            </Grid>
            <Grid item xs={8}>
              <input type="text" className={styles.payment__form__input} />
            </Grid>
            <Grid item xs={4} className={styles.payment__form__sub}>
              Email Address :
            </Grid>
            <Grid item xs={8}>
              <input type="text" className={styles.payment__form__input} />
            </Grid>
            <Grid item xs={4} className={styles.payment__form__sub}>
              Number of People :
            </Grid>
            <Grid item xs={8}>
              <input type="text" className={styles.payment__form__input} />
            </Grid>
            <Grid item xs={4} className={styles.payment__form__sub}>
              Address:
            </Grid>
            <Grid item xs={8}>
              <input type="text" className={styles.payment__form__input} />
            </Grid>
          </Grid>
        </form>
        <div className={styles.payment__booking}>
          <div>
            <span className={styles.payment__price}>Price </span>
            <span className={styles.payment__price__person}>100$</span>
          </div>
          <button className={styles.payment__button}>Booking Now</button>
        </div>
      </div>
    </>
  );
}
