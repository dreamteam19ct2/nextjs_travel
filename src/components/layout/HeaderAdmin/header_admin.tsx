"use client";

import React, { useState } from "react";
import styles from "./header_admin.module.css";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import Link from "next/link";

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
          <Link href="/admin">
            <div
              className={
                selectRoute === "tour" ? styles.selectRoute : styles.router
              }
              onClick={() => handleClick("tour")}
            >
              Tour
            </div>
          </Link>

          <Link href="/admin/check_tour">
            <div
              className={
                selectRoute === "Approve" ? styles.selectRoute : styles.router
              }
              onClick={() => handleClick("Approve")}
            >
              Approve
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
