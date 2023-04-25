"use client";

import React, { useState } from "react";
import styles from "./header.module.css";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { InputAdornment, TextField } from "@mui/material";

export default function () {
  const [selectRoute, setselectRoute] = useState("home");
  const [showMenu, setShowMenu] = useState(false);
  const id = localStorage.getItem("id");
  const email = localStorage.getItem("email");

  function handleLogout() {
    localStorage.clear();
        window.location.href = "/";

  }
  const handleClickShowmenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClick = (text: any) => {
    setselectRoute(text);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__logo}>
          <FlightTakeoffIcon />
          <div className={styles.nameLogo}>TRVL</div>
        </div>
        <div className={styles.header__router}>
          <Link href="/">
            <div
              className={
                selectRoute === "home" ? styles.selectRoute : styles.router
              }
              onClick={() => handleClick("home")}
            >
              Home
            </div>
          </Link>

          <div
            className={
              selectRoute === "abouUs" ? styles.selectRoute : styles.router
            }
            onClick={() => handleClick("abouUs")}
          >
            About Us
          </div>
          <div
            className={
              selectRoute === "destination" ? styles.selectRoute : styles.router
            }
            onClick={() => handleClick("destination")}
          >
            Destination
          </div>
          <Link href="/history">
            <div
              className={
                selectRoute === "contacts" ? styles.selectRoute : styles.router
              }
              onClick={() => handleClick("contacts")}
            >
              History
            </div>
          </Link>
        </div>
        {email ? (
          <div
            className={styles.header__userName}
            onClick={handleClickShowmenu}
          >
            {email}
            <ul
              className={
                showMenu
                  ? styles.header__userName__menu
                  : styles.header__userName__menu__block
              }
            >
              <Link href="/user_profile">
                <li className={styles.menu__item}>My profile</li>
              </Link>
              <li className={styles.menu__item} onClick={handleLogout}>
                Logout
              </li>
            </ul>
          </div>
        ) : (
          <Link href="/login">
            <button className={styles.header__button}>Book Ticket</button>
          </Link>
        )}
      </div>
    </>
  );
}
