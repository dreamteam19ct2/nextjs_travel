"use client";
import styles from "./selectBooking.module.css";
import Grid from "@mui/material/Grid";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function SelectBooking() {
  return (
    <div className={styles.container}>
      <div id="intro" className={styles.content}>
        <div style={{ fontSize: "24px" }}>Booking</div>
        <div className={styles.image__intro}>
          <h1 className={styles.intro__title}>
            Easy way to find a perfect property
          </h1>
          <div className={styles.intro__describe}>
            We provide a complete service for the sale, purchase or rental of
            real estate
          </div>
        </div>
        <div className={styles.select}>
          <div className={styles.intro__select_bar}>
            <button
              className={`${styles.select_bar__btn} ${styles.select_bar__btn_isSelect}`}
            >
              Buy
            </button>
            <button className={styles.select_bar__btn}>Sell</button>
            <button className={styles.select_bar__btn}>Rent</button>
          </div>
          <Grid className={styles.content__select_bar} container spacing={0}>
            <Grid item xs={3.3} className={styles.content__select_bar__item}>
              <div className={styles.content__select_bar__title}>Locations</div>
              <div className={styles.content__select_bar__sub}>
                Select your city
              </div>
            </Grid>
            <Grid item xs={3.3} className={styles.content__select_bar__item}>
              <div className={styles.content__select_bar__title}>Locations</div>
              <div className={styles.content__select_bar__sub}>
                Select your city
              </div>
            </Grid>
            <Grid item xs={3.3} className={styles.content__select_bar__item}>
              <div className={styles.content__select_bar__title}>Locations</div>
              <div className={styles.content__select_bar__sub}>
                Select your city
              </div>
            </Grid>
            <Grid item xs={2}>
              <button className={styles.content__select_bar__btn}>
                Search
              </button>
            </Grid>
          </Grid>
        </div>
      </div>
      <div id="GettoKnowUsMore" className={styles.content}>
        <Grid container spacing={0}>
          <Grid item xs={4} className={styles.gettoKnow__item}>
            <img src="/etienne-beau.png" alt="img" />
          </Grid>
          <Grid
            item
            xs={6}
            className={`${styles.gettoKnow__item} ${styles.gettoKnow__item__right}`}
          >
            <div className={styles.gettoKnow__item__title}>
              Get to Know Us More
            </div>
            <div className={styles.gettoKnow__item__content}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but leap into electronic.
            </div>
            <Grid container>
              <Grid item xs={4} className={styles.parameter__number}>
                1200
              </Grid>
              <Grid item xs={4} className={styles.parameter__number}>
                50
              </Grid>
              <Grid item xs={4} className={styles.parameter__number}>
                20
              </Grid>
              <Grid item xs={4} className={styles.parameter__text}>
                Property Build
              </Grid>
              <Grid item xs={4} className={styles.parameter__text}>
                Awards Gained
              </Grid>
              <Grid item xs={4} className={styles.parameter__text}>
                Years Experience
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div id="Popular" className={styles.content}>
        <div className={styles.popular__head}>
          <div className={styles.popular__head__title}>
            Popular Property Right Now
          </div>
          <div className={styles.popular__head__button}>
            <button className={styles.popular__btnNext}>
              <ArrowBackIosNewIcon />
            </button>
            <button className={styles.popular__btnPre}>
              <ArrowForwardIosIcon />
            </button>
          </div>
          <Grid container spacing={0}>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
              <Grid container spacing={0}>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}></Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
