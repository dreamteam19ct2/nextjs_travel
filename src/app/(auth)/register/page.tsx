"use client";
import styles from "./register.module.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Link from "next/link";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function () {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("");
  }, []);
  async function handleSubmit(event: any) {
    event.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        username: username,
        email: email,
        password: password,
        c_password: confirmPassword,
        system_role: 1,
      });

      setMessage(response.data.message);

      // Redirect đến trang khác hoặc làm bất kỳ thao tác nào khác tùy thuộc vào yêu cầu của bạn
      const mess = response.data.message;
      if (mess == "register success") {
        window.location.href = "/login";
      } else {
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
    } catch (error) {
      alert("khong ket noi duoc ");
      console.error(error);
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.form__signin}>
          <form onSubmit={handleSubmit}>
            <div className={styles.text2}>Register</div>
            <div className={styles.form__input}>
              <div className={styles.form__input__title}>Username</div>
              <input
                type="text"
                id="Username"
                className={styles.form__input__text}
                placeholder="Enter your Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
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
            <div className={styles.form__input}>
              <div className={styles.form__input__title}>Confirm Password</div>
              <input
                type="password"
                id="Confirm Password"
                className={styles.form__input__text}
                placeholder="Enter Confirm Password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>
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
            {message && <p className={styles.messErr}>{message}</p>}
            {/* <Link href={`${link_resgister}`}> */}
            <button type="submit" className={styles.btn}>
              SIGN UP
              <ArrowForwardIosIcon className={styles.icon} />
            </button>
            {/* </Link> */}
          </form>
          <span className={styles.Exception}>
            I don’t have an account ?
            <Link href="/login">
              <span className={styles.Exception__link}>Login</span>
            </Link>
          </span>
          <img className={styles.img} src="./tree.png" alt="img" />
        </div>
      </div>
    </>
  );
}
