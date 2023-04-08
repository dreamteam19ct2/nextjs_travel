"use client";

import HeaderAdmin from "@/components/layout/HeaderAdmin/header_admin";
import styles from "./create_tour.module.css";

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
                    {/* <div className={styles.frame_schedule}>
                        <div className={styles.schedule_day}>Day</div>
                        <div className={styles.description}>Description</div>
                    </div> */}
                    <div className={styles.frame_table}>
                        <table>
                            <tr className={styles.frame_schedule}>
                                <th className={styles.schedule_day}>Day</th>
                                <th className={`${styles.description} ${styles.descript}`}>Description</th>
                            </tr>
                            <tr className={styles.frame_schedule}>
                                <td className={styles.schedule_day}>1</td>
                                <td className={styles.description}>Take a bus from bmt to DaNang</td>
                            </tr>
                        </table>
                    </div>
                    <div className={styles.frame_img}>
                        <div className={styles.img_title}>Image: </div>
                        <div className={styles.img_choose}>Choose Image</div>
                    </div>
                    <div className={styles.position_img}>
                        <button className={styles.btn_create}>Create</button>
                    </div>
                </div>
            </div>
        </>
    );
}