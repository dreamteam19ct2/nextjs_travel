"use client";

import styles from "./card_tour.module.css";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function CardTour() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.body}>
                    <img src="plane.png" alt="imgTour" />
                    <div className={styles.content}>
                        <div className={styles.content_top}>
                            <div className={styles.content_name_tour}>Bana Hill</div>
                            <div className={styles.count_star}>
                                <StarIcon className={styles.star_icon} />
                                <StarIcon className={styles.star_icon} />
                                <StarIcon className={styles.star_icon} />
                                <StarIcon className={styles.star_icon} />
                                <StarHalfIcon className={styles.star_icon} />
                            </div>
                        </div>
                        <div className={styles.content_mid}>
                            a cool trip because the various scenery around will be very eye-catching
                        </div>
                        <div className={styles.content_bot}>
                            <div className={styles.schedule}>Schedule :  </div>
                            <div className={styles.date}>Feb 5, 2023 - Feb 14, 2023 </div>
                            <div className={styles.number_people}>Number of people :  </div>
                            <div className={styles.people}>20 people </div>
                        </div>
                    </div>
                    <ArrowForwardIosIcon className={styles.arrow_icon}/>
                </div>
            </div>
        </>
    );
}