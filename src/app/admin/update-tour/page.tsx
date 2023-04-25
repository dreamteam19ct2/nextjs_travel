"use client";

import HeaderAdmin from "@/components/layout/HeaderAdmin/header_admin";
import styles from "./update_tour.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Footer from "@/components/layout/Footer/footer";

export default function Admin() {
  type Tour = {
    id: string;
    tour_name: string;
    img: string;
    description: string;
    date_start: string;
    date_end: string;
    max_people: string;
    price: string;
    detail: string;
    type_tour: string;
    location: string;
  };

  const id_tour = localStorage.getItem("selectedTourId");
  const [id, setId] = useState("1");
  const [tourName, setTourName] = useState("1");
  const [img, setImg] = useState("/bgr.png");
  const [description, setDescription] = useState("1");
  const [dateStart, setDateStart] = useState("1");
  const [dateEnd, setDateEnd] = useState("1");
  const [maxPeople, setMaxPeople] = useState("1");
  const [price, setPrice] = useState("1");
  const [detail, setDetail] = useState("1");
  const [typeTour, setTypeTour] = useState("1");
  const [location, setLocation] = useState("1");

  const [message, setMessage] = useState("");
  const [tourList, setTourList] = useState<Tour[]>([]);
  useEffect(() => {
    async function fetchTourData() {
      const response = await fetch("http://127.0.0.1:8000/api/get_tour");
      const data = await response.json();

      setTourList(data);
    }
    fetchTourData();
  }, []);

  useEffect(() => {
    function filterTourById() {
      if (tourList.length > 0) {
        const selectedTour = tourList.find((tour: any) => tour.id == id_tour);
        if (selectedTour) {
          setTourName(selectedTour.tour_name);
          setTypeTour(selectedTour.type_tour);
          setImg(selectedTour.img);
          setDescription(selectedTour.description);
          setDateStart(selectedTour.date_start);
          setDateEnd(selectedTour.date_end);
          setMaxPeople(selectedTour.max_people);
          setPrice(selectedTour.price);
        }
      }
    }

    if (id_tour) {
      filterTourById();
    }
  }, [id_tour, tourList]);

  // feat update
  async function handleUpdate(event: any) {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/update_tour",
        {
          id: id_tour,
          tour_name: tourName,
          img: img,
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
      window.location.href = "/admin";
    } catch (error) {
      alert(error);
      console.error(error);
    }
  }

  // delete function
  async function handleDeleteTour(event: any) {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/delete_tour",
        {
          id: id_tour,
        }
      );
      alert("delete ok");
      // Redirect đến trang khác hoặc làm bất kỳ thao tác nào khác tùy thuộc vào yêu cầu của bạn
      window.location.href = "/admin";

    } catch (error) {
      alert("khong connnect dược server!");
      console.error(error);
    }
  }

  function handleInputChange(event: any) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (name == "tourName") {
      setTourName(value);
    } else if (name == "img") {
      setImg(value);
    } else if (name == "description") {
      setDescription(value);
    } else if (name == "dateStart") {
      setDateStart(value);
    } else if (name == "dateEnd") {
      setDateEnd(value);
    } else if (name == "maxPeople") {
      setMaxPeople(value);
    } else if (name == "price") {
      setPrice(value);
    } else if (name == "detail") {
      setDetail(value);
    } else if (name == "typeTour") {
      setTypeTour(value);
    } else if (name == "location") {
      setLocation(value);
    }
  }

  return (
    <>
      <HeaderAdmin></HeaderAdmin>
      {/* {tourList
                .filter((tour: any) => tour.id == id_tour)
                .map((tour: any) => (
                    
                )
                )
            } */}
      <div className={styles.table}>
        <form onSubmit={handleUpdate}>
          <div className={styles.content}>
            <div className={styles.fill}>
              <div className={styles.fill_line}>
                <div className={styles.fill_line_left}>Tour name : </div>
                <div className={styles.fill_line_right}>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    name="tourName"
                    value={tourName}
                  />
                </div>
              </div>

              <div className={styles.fill_line}>
                <div className={styles.fill_line_left}>Tour description : </div>
                <div className={styles.fill_line_right}>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    name="description"
                    value={description}
                  />
                </div>
              </div>

              <div className={styles.fill_line}>
                <div className={styles.fill_line_left}>Number of people :</div>
                <div className={styles.fill_line_right}>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    name="maxPeople"
                    value={maxPeople}
                  />
                </div>
              </div>

              <div className={styles.fill_line}>
                <div className={styles.fill_line_left}>Price/person: </div>
                <div className={styles.fill_line_right}>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    name="price"
                    value={price}
                  />
                </div>
              </div>

              <div className={styles.fill_line}>
                <div className={styles.fill_line_left}>Day Start :</div>
                <div className={styles.fill_line_right}>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    name="dateStart"
                    value={dateStart}
                  />
                </div>
              </div>

              <div className={styles.fill_line}>
                <div className={styles.fill_line_left}>Day End :</div>
                <div className={styles.fill_line_right}>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    name="dateEnd"
                    value={dateEnd}
                  />
                </div>
              </div>
            </div>
            <div className={styles.frame_table}>
              <table>
                <tr>
                  <th className={styles.schedule_day}>Day</th>
                  <th className={`${styles.description} ${styles.descript}`}>
                    Description
                  </th>
                </tr>
                <tr>
                  <td className={styles.schedule_day}>1</td>
                  <td className={styles.description}>
                    Take a bus from bmt to DaNang
                  </td>
                </tr>
                <tr>
                  <td className={styles.schedule_day}>2</td>
                  <td className={styles.description}>
                    Transfer to hotel in the city center. Walk around the old
                    town and enjoy street food
                  </td>
                </tr>
                <tr>
                  <td className={styles.schedule_day}>3</td>
                  <td className={styles.description}>
                    Visit famous places like Wat Phra Kaew, Grand Palace, Wat
                    Pho and sunbathe at Pattaya beach in the afternoon.{" "}
                  </td>
                </tr>
                <tr>
                  <td className={styles.schedule_day}>4</td>
                  <td className={styles.description}>
                    Fly to Ho Chi Minh City, Vietnam to visit famous sites like
                    Tao Dan Park, Ben Thanh Market, Reunification Palace, and
                    Independence Palace{" "}
                  </td>
                </tr>
              </table>
            </div>
            <div className={styles.frame_img}>
              <div className={styles.img_title}>Image: </div>
              <div className={styles.img_block}>
                <input
                  name="img"
                  type="text"
                  onChange={handleInputChange}
                  className={styles.img_text}
                  value={img}
                />
                <div className={styles.img_choose}>
                  <img src={img} alt="anh" />
                </div>
              </div>
            </div>
            <div className={styles.button_create}>
              <div className={styles.position_img}>
                <button type="submit" className={styles.btn_create}>
                  Update
                </button>
              </div>
              <div className={styles.position_img}>
                <button
                  className={styles.btn_delete}
                  onClick={handleDeleteTour}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
}
