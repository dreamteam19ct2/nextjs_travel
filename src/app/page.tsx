"use client";
import Image from "next/image";
import Header from "@/components/layout/Header/header";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />

      <div className={styles.intro}>
        <div className={styles.line}></div>
        <Grid container spacing={0}>
          <Grid item xs={6} className={styles.intro__left}>
            <div className={styles.test1}>BEST DESTINATION AROUD THE WORLD</div>
            <span className={styles.test2}>Travel to the any corner of</span>
            <span className={styles.intro__left__test2_1}> the world.</span>
            <div className={styles.intro__left__test3}>
              We can build the holydays of your dreams make them unfogetable
            </div>
            <div className={styles.searchTour}>
              <div className={styles.searchTour__info}>
                <div className={styles.searchTour__title}>Destination</div>
                <div className={styles.searchTour__content}>Melbourne</div>
              </div>
              <div className={styles.searchTour__info}>
                <div className={styles.searchTour__title}>Date</div>
                <div className={styles.searchTour__content}>Select date</div>
              </div>
              <div className={styles.searchTour__info}>
                <div className={styles.searchTour__title}>People</div>
                <div className={styles.searchTour__content}>
                  How many people
                </div>
              </div>
              <div className={styles.searchTour__info}>
                <button className={styles.searchTour__btn}>
                  <SearchIcon
                    style={{ color: "white" }}
                    className={styles.searchTour__btn__icon}
                  />
                </button>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} className={styles.intro__right}>
            <img
              className={styles.intro__left__img}
              src="/pngplane.png"
              alt="img"
            />
          </Grid>
        </Grid>
      </div>
      <div className={styles.howWeWork}>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <div className={styles.test1}>How we work </div>
            <div className={styles.test2} style={{ fontSize: "48px" }}>
              We Offer Best Service
            </div>
            <div className={styles.item_3}>
              <div className={styles.item_number}>
                <div className={styles.item__icon}>
                  <LoyaltyIcon className={styles.item__icon_ic} />
                </div>
                <div>
                  <div className={styles.item__text1}>Affordable prices</div>
                  <div className={styles.item__text2}>
                    We provide some very affordable prices compared to others.
                  </div>
                </div>
              </div>
              <div className={styles.item_number}>
                <div className={styles.item__icon}>
                  <AirplanemodeActiveIcon className={styles.item__icon_ic} />
                </div>
                <div>
                  <div className={styles.item__text1}>
                    Unforgettable experience
                  </div>
                  <div className={styles.item__text2}>
                    We provide a vacation experience that will be unforgettable.
                  </div>
                </div>
              </div>
              <div className={styles.item_number}>
                <div className={styles.item__icon}>
                  <SupportAgentIcon className={styles.item__icon_ic} />
                </div>
                <div>
                  <div className={styles.item__text1}>
                    Very Friendly Service
                  </div>
                  <div className={styles.item__text2}>
                    We will provide excellent and friendly service for the sake
                    of our customers.
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <img className={styles.howWeWork__img} src="/car.png" alt="img" />
          </Grid>
        </Grid>
      </div>
    </main>
  );
}
