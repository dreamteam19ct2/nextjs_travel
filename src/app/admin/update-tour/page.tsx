"use client";

import HeaderAdmin from "@/components/layout/HeaderAdmin/header_admin";
import styles from "./update_tour.module.css";

export default function Admin() {
    return (
        <>
            <HeaderAdmin></HeaderAdmin>
            <div className={styles.table}>
                <div className={styles.content}>
                    <div className={styles.fill}>
                        <div className={styles.fill_line}>
                            <div className={styles.fill_line_left}>Tour name : </div>
                            <div className={styles.fill_line_right}><input type="text" /></div>
                        </div>

                        <div className={styles.fill_line}>
                            <div className={styles.fill_line_left}>Tour description : </div>
                            <div className={styles.fill_line_right}><input type="text" /></div>
                        </div>

                        <div className={styles.fill_line}>
                            <div className={styles.fill_line_left}>Number of people :</div>
                            <div className={styles.fill_line_right}><input type="text" /></div>
                        </div>

                        <div className={styles.fill_line}>
                            <div className={styles.fill_line_left}>Price/person: </div>
                            <div className={styles.fill_line_right}><input type="text" /></div>
                        </div>

                        <div className={styles.fill_line}>
                            <div className={styles.fill_line_left}>Schedule :</div>
                            <div className={styles.fill_line_right}><input type="text" /></div>
                        </div>
                    </div>
                    <div className={styles.frame_table}>
                        <table>
                            <tr>
                                <th className={styles.schedule_day}>Day</th>
                                <th className={`${styles.description} ${styles.descript}`}>Description</th>
                            </tr>
                            <tr>
                                <td className={styles.schedule_day}>1</td>
                                <td className={styles.description}>Take a bus from bmt to DaNang</td>
                            </tr>
                            <tr>
                                <td className={styles.schedule_day}>2</td>
                                <td className={styles.description}>Transfer to hotel in the city center. Walk around the old town and enjoy street food</td>
                            </tr>
                            <tr>
                                <td className={styles.schedule_day}>3</td>
                                <td className={styles.description}>Visit famous places like Wat Phra Kaew, Grand Palace, Wat Pho and sunbathe at Pattaya beach in the afternoon. </td>
                            </tr>
                            <tr>
                                <td className={styles.schedule_day}>4</td>
                                <td className={styles.description}>Fly to Ho Chi Minh City, Vietnam to visit famous sites like Tao Dan Park, Ben Thanh Market, Reunification Palace, and Independence Palace </td>
                            </tr>
                        </table>
                    </div>
                    <div className={styles.frame_img}>
                        <div className={styles.img_title}>Image: </div>
                        <div className={styles.img_choose}>Choose Image</div>
                    </div>
                    <div className={styles.button_create}>
                        <div className={styles.position_img}>
                            <button className={styles.btn_create}>Create</button>
                        </div>
                        <div className={styles.position_img}>
                            <button className={styles.btn_delete}>Delete</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}