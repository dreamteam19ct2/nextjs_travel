"use client";

import React, { useState } from "react";
import styles from "./header_admin.module.css";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { InputAdornment, TextField } from "@mui/material";

export default function HeaderAdmin() {
  const [selectRoute, setselectRoute] = useState("tour");
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
              selectRoute === "tour" ? styles.selectRoute : styles.router
            }
            onClick={() => handleClick("tour")}
          >
            Tour
          </div>
          <div
            className={
              selectRoute === "Approve" ? styles.selectRoute : styles.router
            }
            onClick={() => handleClick("Approve")}
          >
            Approve
          </div>
        </div>
      </div>
    </>
  );
}
