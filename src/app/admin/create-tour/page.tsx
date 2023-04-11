"use client";
import { useState, useEffect } from "react";

import HeaderAdmin from "@/components/layout/HeaderAdmin/header_admin";
import styles from "./create_tour.module.css";

export default function Admin() {
  const [tourName, setTourName] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [maxPeople, setMaxPeople] = useState("");
  const [price, setPrice] = useState("");
  const [detail, setDetail] = useState("");
  const [typeTour, setTypeTour] = useState("");
  const [location, setLocation] = useState("");

  const createTour = async () => {
    const url = "http://127.0.0.1:8000/api/create_tour";
    const data = {
      tour_name: tourName,
      img: "https://linhhungtourist.com.vn/wp-content/uploads/2019/03/1551111810-291-2-1551079327-width650height433.jpg",
      description: description,
      date_start: dateStart,
      date_end: dateEnd,
      max_people: maxPeople,
      price: price,
      detail: detail,
      type_tour: typeTour,
      location: location,
    };
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, options);
    const result = await response.json();

    console.log(result);
  };

  const handleSubmit = (event: any) => {
    // event.preventDefault();
    createTour;
    // setTourName("");
    // setImg("");
    // setDescription("");
    // setDateStart("");
    // setDateEnd("");
    // setPrice("");
    // setMaxPeople("");
    // setDetail("");
    // setTypeTour("");
    // setLocation("");
  };
  
  return (
    <>
      <HeaderAdmin></HeaderAdmin>
      <div className={styles.table}>
        <form onSubmit={handleSubmit}>
          <div className={styles.content}>
            <div className={styles.fill}>
              <div className={styles.fill_line}>
                <div className={styles.fill_line_left}>Type tour : </div>
                <div className={styles.fill_line_right}>
                  <input
                    type="text"
                    value={typeTour}
                    onChange={(event) => setTypeTour(event.target.value)}
                  />
                </div>
              </div>

              <div className={styles.fill_line}>
                <div className={styles.fill_line_left}>Tour name : </div>
                <div className={styles.fill_line_right}>
                  <input
                    type="text"
                    value={tourName}
                    onChange={(event) => setTourName(event.target.value)}
                  />
                </div>
              </div>

              <div className={styles.fill_line}>
                <div className={styles.fill_line_left}>Tour description : </div>
                <div className={styles.fill_line_right}>
                  <input
                    type="text"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </div>
              </div>

              <div className={styles.fill_line}>
                <div className={styles.fill_line_left}>Number of people :</div>
                <div className={styles.fill_line_right}>
                  <input
                    type="text"
                    value={maxPeople}
                    onChange={(event) => setMaxPeople(event.target.value)}
                  />
                </div>
              </div>

              <div className={styles.fill_line}>
                <div className={styles.fill_line_left}>Price/person: </div>
                <div className={styles.fill_line_right}>
                  <input
                    type="text"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                  />
                </div>
              </div>

              <div className={styles.fill_line}>
                <div className={styles.fill_line_left}>Date Start :</div>
                <div className={styles.fill_line_right}>
                  <input
                    type="text"
                    value={dateStart}
                    onChange={(event) => setDateStart(event.target.value)}
                  />
                </div>
              </div>
              <div className={styles.fill_line}>
                <div className={styles.fill_line_left}>Date End :</div>
                <div className={styles.fill_line_right}>
                  <input
                    type="text"
                    value={dateEnd}
                    onChange={(event) => setDateEnd(event.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className={styles.frame_table}>
              <table>
                <tr className={styles.frame_schedule}>
                  <th className={styles.schedule_day}>Day</th>
                  <th className={`${styles.description} ${styles.descript}`}>
                    Description
                  </th>
                </tr>
                <tr className={styles.frame_schedule}>
                  <td className={styles.schedule_day}>1</td>
                  <td className={styles.description}>
                    Take a bus from bmt to DaNang
                  </td>
                </tr>
              </table>
            </div>
            <div className={styles.frame_img}>
              <div className={styles.img_title}>Image: </div>
              <div className={styles.img_choose}>Choose Image</div>
            </div>
            <div className={styles.position_img}>
              <button type="submit" className={styles.btn_create}>
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
