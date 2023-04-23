"use client";
import { useState, useEffect } from "react";
import HeaderAdmin from "@/components/layout/HeaderAdmin/header_admin";
import styles from "./create_tour.module.css";
import axios from "axios";

export default function Admin() {
  const [tourName, setTourName] = useState("Enter TourName");
  const [img, setImg] = useState("/bgr.png");
  const [description, setDescription] = useState("Enter TourDescription");
  const [dateStart, setDateStart] = useState("Enter DateStart");
  const [dateEnd, setDateEnd] = useState("Enter DateEnd");
  const [maxPeople, setMaxPeople] = useState("Enter MaxPeople");
  const [price, setPrice] = useState("Enter Price");
  const [detail, setDetail] = useState("Enter Detail");
  const [typeTour, setTypeTour] = useState("Enter TypeTour");
  const [location, setLocation] = useState("EnterLocation");

  const [message, setMessage] = useState("");

  async function handleSubmit(event: any) {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/create_tour",
        {
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
        }
      );
      setMessage(response.data.message);
      alert("ok");
      // Redirect đến trang khác hoặc làm bất kỳ thao tác nào khác tùy thuộc vào yêu cầu của bạn
    } catch (error) {
      alert("khong connnect dược server!");
      console.error(error);
    }
  }

  return (
    <>
      <HeaderAdmin></HeaderAdmin>
      <div className={styles.table}>
        <form onSubmit={handleSubmit}>
          {message && <p className={styles.messErr}>{message}</p>}
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
              <div className={styles.img_block}>
                <input onChange={(event) => setImg(event.target.value)} type="text" className={styles.img_text} value={img} />
                <div className={styles.img_choose}>
                  <img src={img} alt="anh" /></div>
              </div>
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
