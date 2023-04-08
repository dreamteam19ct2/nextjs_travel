"use client";

import HeaderAdmin from "@/components/layout/HeaderAdmin/header_admin";
import CardTour from "@/components/common/card-tour/card_tour";
import styles from "./admin.module.css";

export default function Admin() {
    return (
        <>
            <HeaderAdmin></HeaderAdmin>
            <div className={styles.body}>
                <div className={styles.btn_add_tour}>
                    <button className={styles.header__button}>Add Tour</button>
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
                    <CardTour></CardTour>
                    <CardTour></CardTour>
                </div>

                <div className={styles.family_tour}>
                    <div className={styles.family_tour_title}>Family Tour</div>
                    <CardTour></CardTour>
                    <CardTour></CardTour>
                    <CardTour></CardTour>
                </div>

                <div className={styles.new_tour}>
                    <div className={styles.new_tour_title}>New Tour</div>
                    <CardTour></CardTour>
                    <CardTour></CardTour>
                </div>
            </div>
        </>
    );

}
