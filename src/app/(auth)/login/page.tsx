"use client";
import styles from "./login.module.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import {
  saveTokenToLocalStorage,
  getTokenFromLocalStorage,
} from "@/storage/localStorage";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function decodeToken(token: string) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(atob(base64));
  }
  useEffect(() => {
    setMessage("");
  }, []);
  async function handleSubmit(event: any) {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://dreamteamtravel.000webhostapp.com/api/login",
        {
          email,
          password,
        }
      );

      // Lấy thông tin token từ response và lưu vào trình duyệt của người dùng
      const token = response.data.token;
      saveTokenToLocalStorage(token);
      setMessage(response.data.message);
      setEmail("");
      setPassword("");

      const tokenFromLocalStorage = getTokenFromLocalStorage();
      if (tokenFromLocalStorage) {
        const decodedToken = decodeToken(tokenFromLocalStorage);
        console.log("Decoded Token:", decodedToken);
      } else {
        console.log("Token not found in Local Storage");
      }
      // Redirect đến trang khác hoặc làm bất kỳ thao tác nào khác tùy thuộc vào yêu cầu của bạn
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
            {/* <Link href="/"> */}
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
