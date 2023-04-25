"use client";

import CardTour from "@/components/common/card-tour/card_tour";
import styles from "./tour.module.css";
import Header from "@/components/layout/Header/header";
import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/layout/Footer/footer";
export default function Admin() {
  const [tourList, setTourList] = useState([]);

  useEffect(() => {
    async function fetchTourData() {
      const response = await fetch("http://127.0.0.1:8000/api/get_tour");
      const data = await response.json();
      setTourList(data);
    }
    fetchTourData();
  }, []);

  return (
    <>
      <Header></Header>
      <div className={styles.body}>
        <div className={styles.slider}>
          <img src="road_sontra.png" alt="slider_img" />
          <img src="hand_gold.png" alt="slider_img" />
          <img src="festival.png" alt="slider_img" />
        </div>
        <div className={styles.select_tour}>
          <div className={styles.margin_right10}>Type Tour</div>
          <div className={`${styles.select_type} ${styles.margin_right30}`}>
            <select>
              <option value="option1">Popular</option>
              <option value="option2">Family</option>
              <option value="option3">Alone</option>
              <option value="option4">Company</option>
            </select>
          </div>
          <div className={styles.margin_right10}>Number of People</div>
          <div className={`${styles.select_type} ${styles.margin_right30}`}>
            <select>
              <option value="option1">1</option>
              <option value="option2">2</option>
              <option value="option3">3</option>
              <option value="option4">another</option>
            </select>
          </div>
          <div className={styles.margin_right10}>Days</div>
          <div className={styles.select_type}>
            <select>
              <option value="option1">2 days 1 night</option>
              <option value="option2">4 days 3 nights</option>
              <option value="option3">1 week</option>
              <option value="option4">2 week</option>
            </select>
          </div>
        </div>
        <div className={styles.popular_tour}>
          <div className={styles.popular_tour_title}>Popular Tour</div>
          {tourList
            .filter((tour: any) => tour.type_tour === "popular")
            .map((tour: any) => (
              <Link href="/tour_detail">
                <CardTour
                  tour_name={tour.tour_name}
                  img={tour.img}
                  description={tour.description}
                  date_start={tour.date_start}
                  date_end={tour.date_end}
                  max_people={tour.max_people}
                  price={tour.price}
                  detail={tour.detail}
                  type_tour={tour.type_tour}
                  location={tour.max_people}
                  id={tour.id}
                />
               </Link>
            ))}
        </div>

        <div className={styles.family_tour}>
          <div className={styles.family_tour_title}>Family Tour</div>
          {tourList
            .filter((tour: any) => tour.type_tour === "family")
            .map((tour: any) => (
              <Link href="/tour_detail">
                <CardTour
                  tour_name={tour.tour_name}
                  img={tour.img}
                  description={tour.description}
                  date_start={tour.date_start}
                  date_end={tour.date_end}
                  max_people={tour.max_people}
                  price={tour.price}
                  detail={tour.detail}
                  type_tour={tour.type_tour}
                  location={tour.max_people}
                  id={tour.id}
                />
              </Link>
            ))}
        </div>

        <div className={styles.new_tour}>
          <div className={styles.new_tour_title}>New Tour</div>
          {tourList
            .filter((tour: any) => tour.type_tour === "new")
            .map((tour: any) => (
              <Link href="/tour_detail">
                <CardTour
                  tour_name={tour.tour_name}
                  img={tour.img}
                  description={tour.description}
                  date_start={tour.date_start}
                  date_end={tour.date_end}
                  max_people={tour.max_people}
                  price={tour.price}
                  detail={tour.detail}
                  type_tour={tour.type_tour}
                  location={tour.max_people}
                  id={tour.id}
                />
              </Link>
            ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}
