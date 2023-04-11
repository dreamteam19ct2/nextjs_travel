"use client";

import styles from "./card_tour.module.css";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface Props {
  tour_name: string;
  img: string;
  description: string;
  date_start: string;
  date_end: string;
  max_people: string;
  price: number;
  detail: string;
  type_tour: string;
  location: string;
  //   slug: string;
}

export default function CardTour({
  tour_name,
  img,
  description,
  date_start,
  date_end,
  max_people,
  price,
  detail,
  type_tour,
  location,
}: Props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.body}>
          {/* <img src="plane.png" alt="imgTour" /> */}
          <img src={img} alt="imgTour" />
          <div className={styles.content}>
            <div className={styles.content_top}>
              <div className={styles.content_name_tour}>{tour_name}</div>
              <div className={styles.count_star}>
                <StarIcon className={styles.star_icon} />
                <StarIcon className={styles.star_icon} />
                <StarIcon className={styles.star_icon} />
                <StarIcon className={styles.star_icon} />
                <StarHalfIcon className={styles.star_icon} />
              </div>
            </div>
            <div className={styles.content_mid}>{description}</div>
            <div className={styles.content_bot}>
              <div className={styles.schedule}>Schedule : </div>
              <div className={styles.date}>
                {date_start} - {date_end}
              </div>
              <div className={styles.number_people}>Number of people : </div>
              <div className={styles.people}>{max_people} people </div>
            </div>
          </div>
          <ArrowForwardIosIcon className={styles.arrow_icon} />
        </div>
      </div>
    </>
  );
}
