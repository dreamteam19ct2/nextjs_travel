"use client";
import styles from "./header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { InputAdornment, TextField } from "@mui/material";

export default function () {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__menu}>
          <MenuIcon className={styles.icon} />
        </div>
        <div className={styles.input}>
          <SearchIcon className={styles.icon} />
          <input className={styles.header__input_search} />
        </div>

        <Link className={styles.router} href="/Home">
          Home
        </Link>
        <Link className={styles.router} href="/Explore">
          Explore
        </Link>
        <Link
          className={`${styles.router} ${styles.hideroute}`}
          href="/Explore"
        >
          Sign-in
        </Link>
        <Link
          className={`${styles.router} ${styles.hideroute}`}
          href="/Explore"
        >
          Sign-up
        </Link>
        <div className={styles.listicon}>
          <InstagramIcon className={styles.icon} />
          <FacebookIcon className={styles.icon} />
          <GoogleIcon className={styles.icon} />
          <span>Khôi</span>
        </div>
      </div>
      <div className={styles.line}></div>
    </>
  );
}
