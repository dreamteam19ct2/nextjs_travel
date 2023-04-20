"use client";
import styles from "./tour_detail.module.css";
import StarHalfSharpIcon from "@mui/icons-material/StarHalfSharp";
import StarPurple500SharpIcon from "@mui/icons-material/StarPurple500Sharp";
import Headere from "@/components/layout/Header/header";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";

export default function tour_detail() {
  const [tourList, setTourList] = useState([]);

  useEffect(() => {
    async function fetchTourData() {
      const response = await fetch("http://127.0.0.1:8000/api/get_tour");
      const data = await response.json();
      setTourList(data);
    }
    fetchTourData();
  }, []);

    const tourId = localStorage.getItem("selectedTourId");

  return (
    <>
      <Headere></Headere>
      {tourList
        .filter((tour: any) => tour.id == tourId)
        .map((tour: any) => (
          <div className={styles.container}>
            <div className={styles.TourDetail}>
              <ArrowBackIosIcon />
              <h1 className={styles.TourDetail__Name}>{tour.tour_name}</h1>
            </div>
            <img className={styles.TourDetail__img} src={tour.img} alt="img" />
            <div className={styles.TourDetail__content}>{tour.description}</div>
            <div className={styles.TourDetail}>
              <span className={styles.title__left}>Evaluate</span>
              <StarPurple500SharpIcon
                className={styles.TourDetail__Evaluate__icon__icon}
              />
              <StarPurple500SharpIcon
                className={styles.TourDetail__Evaluate__icon__icon}
              />
              <StarPurple500SharpIcon
                className={styles.TourDetail__Evaluate__icon__icon}
              />
              <StarPurple500SharpIcon
                className={styles.TourDetail__Evaluate__icon__icon}
              />
              <StarHalfSharpIcon
                className={styles.TourDetail__Evaluate__icon__icon}
              />
            </div>
            <div className={styles.TourDetail}>
              <span className={styles.title__left}>Schedule: </span>
              <span className={styles.content__right}>
                {tour.date_start} - {tour.date_end}
              </span>
            </div>
            <div className={styles.TourDetail}>
              <span className={styles.title__left}>Number of people: </span>
              <span className={styles.content__right}>
                {tour.max_people} people
              </span>
            </div>

            <Grid container spacing={2} className={styles.TourDetail}>
              <Grid item xs={1.5}>
                <div className={styles.grid__schedule__day}>Day 1</div>
              </Grid>
              <Grid item xs={10.5} className={styles.grid__schedule__detail}>
                Take a bus from bmt to DaNang
              </Grid>
              <Grid item xs={1.5}>
                <div className={styles.grid__schedule__day}>Day 2</div>
              </Grid>
              <Grid item xs={10.5} className={styles.grid__schedule__detail}>
                Transfer to hotel in the city center. Walk around the old town
                and enjoy street food
              </Grid>
              <Grid item xs={1.5}>
                <div className={styles.grid__schedule__day}>Day 3</div>
              </Grid>
              <Grid item xs={10.5} className={styles.grid__schedule__detail}>
                Visit famous places like Wat Phra Kaew, Grand Palace, Wat Pho
                and sunbathe at Pattaya beach in the afternoon.
              </Grid>
              <Grid item xs={1.5}>
                <div className={styles.grid__schedule__day}>Day 4</div>
              </Grid>
              <Grid item xs={10.5} className={styles.grid__schedule__detail}>
                Fly to Ho Chi Minh City, Vietnam to visit famous sites like Tao
                Dan Park, Ben Thanh Market, Reunification Palace, and
                Independence Palace
              </Grid>
              <Grid item xs={1.5}>
                <div className={styles.grid__schedule__day}>Day 5</div>
              </Grid>
              <Grid item xs={10.5} className={styles.grid__schedule__detail}>
                Visit Hoi An Ancient City and Ba Na Hills in Da Nang, Vietnam.
                Fly back to Bangkok to end the tour
              </Grid>
            </Grid>
            <div className={styles.TourDetail__booking}>
              <div>
                <span className={styles.tourDetail__price}>Price </span>
                <span className={styles.tourDetail__price__person}>
                  {tour.price}$/person
                </span>
              </div>
              <button className={styles.TourDetail__button}>Booking Now</button>
            </div>
          </div>
        ))}
    </>
  );
}
