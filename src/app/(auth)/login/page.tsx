"use client";
import styles from "./login.module.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
// import { useHistory } from "react-router-dom";
import {
  saveTokenToLocalStorage,
  getTokenFromLocalStorage,
} from "@/storage/localStorage";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  // const history = useHistory();

  useEffect(() => {
    setMessage("");
  }, []);
  async function handleSubmit(event: any) {
    event.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });

      // Lấy thông tin token từ response và lưu vào trình duyệt của người dùng
      const token = response.data.token;
      saveTokenToLocalStorage(token);

      // lưu du lieu vao storages
      const id = response.data.user.id;
      const e_mail = response.data.user.email;
      const system_role = response.data.user.system_role;
      localStorage.setItem("id", id);
      localStorage.setItem("email", e_mail);
      localStorage.setItem("system_role", system_role);

      setMessage(response.data.message);
      setEmail("");
      setPassword("");

      // Redirect đến trang khác hoặc làm bất kỳ thao tác nào khác tùy thuộc vào yêu cầu của bạn
      const role_local = localStorage.getItem("system_role");
      if (role_local === "1") {
        window.location.href = "/tour";
      } else if (role_local === "2") {
        window.location.href = "/admin";

      }
    } catch (error) {
      setMessage("Đăng nhập thất bại!");
      console.error(error);
    }
  }


  return (
    <>
      <div className={styles.container}>
        <div className={styles.form__signin}>
          <form onSubmit={handleSubmit}>
            <div className={styles.text1}>Welcome back !!!</div>
            <div className={styles.text2}>Sing in</div>
            <div className={styles.form__input}>
              <div className={styles.form__input__title}>Email</div>
              <input
                type="text"
                id="email"
                className={styles.form__input__text}
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className={styles.form__input}>
              <div className={styles.form__input__title}>Password</div>
              <input
                type="password"
                id="password"
                className={styles.form__input__text}
                placeholder="Enter your Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            {message && <p className={styles.messErr}>{message}</p>}
            {/* <Link href={`${link_role}`}> */}
              <button type="submit" className={styles.btn}>
                LOGIN
                <ArrowForwardIosIcon className={styles.icon} />
              </button>
            {/* </Link> */}
          </form>
          <span className={styles.Exception}>
            I don’t have an account ?
            <Link href="/register">
              <span className={styles.Exception__link}> Sign up</span>
            </Link>
          </span>
          <img className={styles.img} src="./tree.png" alt="img" />
        </div>
      </div>
    </>
  );
}
