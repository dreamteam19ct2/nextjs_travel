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
          <div
            className={
              selectRoute === "home" ? styles.selectRoute : styles.router
            }
            onClick={() => handleClick("home")}
          >
            Home
          </div>
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
          <div
            className={
              selectRoute === "contacts" ? styles.selectRoute : styles.router
            }
            onClick={() => handleClick("contacts")}
          >
            Contacts
          </div>
        </div>
        <Link href="/login">
          <button className={styles.header__button}>Book Ticket</button>
        </Link>
      </div>
    </>
  );
}
