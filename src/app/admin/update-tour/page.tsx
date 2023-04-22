"use client";

import HeaderAdmin from "@/components/layout/HeaderAdmin/header_admin";
import styles from "./update_tour.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function Admin() {
    const id_tour = localStorage.getItem("selectedTourId");
    const [tourList, setTourList] = useState([]);
    useEffect(() => {
        async function fetchTourData() {
            const response = await fetch("http://127.0.0.1:8000/api/get_tour");
            const data = await response.json();
            setTourList(data);
        }
        fetchTourData();
    }, []);

    // delete function
    async function handleDeleteTour(event: any) {
        event.preventDefault();
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/delete_tour",
                {
                    id: id_tour
                }
            );
            alert("delete ok");
            // Redirect đến trang khác hoặc làm bất kỳ thao tác nào khác tùy thuộc vào yêu cầu của bạn
        } catch (error) {
            alert("khong connnect dược server!");
            console.error(error);
        }
    }

    return (
        <>
            <HeaderAdmin></HeaderAdmin>
            {tourList
                .filter((tour: any) => tour.id == id_tour)
                .map((tour: any) => (

                    <div className={styles.table}>
                        <div className={styles.content}>
                            <div className={styles.fill}>
                                <div className={styles.fill_line}>
                                    <div className={styles.fill_line_left}>Tour name : </div>
                                    <div className={styles.fill_line_right}><input type="text" value={tour.tour_name} /></div>
                                </div>

                                <div className={styles.fill_line}>
                                    <div className={styles.fill_line_left}>Tour description : </div>
                                    <div className={styles.fill_line_right}><input type="text" value={tour.description} /></div>
                                </div>

                                <div className={styles.fill_line}>
                                    <div className={styles.fill_line_left}>Number of people :</div>
                                    <div className={styles.fill_line_right}><input type="text" value={tour.max_people} /></div>
                                </div>

                                <div className={styles.fill_line}>
                                    <div className={styles.fill_line_left}>Price/person: </div>
                                    <div className={styles.fill_line_right}><input type="text" value={tour.price} /></div>
                                </div>

                                <div className={styles.fill_line}>
                                    <div className={styles.fill_line_left}>Day Start :</div>
                                    <div className={styles.fill_line_right}><input type="text" value={tour.date_start} /></div>
                                </div>

                                <div className={styles.fill_line}>
                                    <div className={styles.fill_line_left}>Day End :</div>
                                    <div className={styles.fill_line_right}><input type="text" value={tour.date_end} /></div>
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
                                    <Link href="/admin"><button className={styles.btn_create}>Update</button></Link>
                                </div>
                                <div className={styles.position_img}>
                                    <button className={styles.btn_delete} onClick={handleDeleteTour}>Delete</button>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}

        </>
    );
}