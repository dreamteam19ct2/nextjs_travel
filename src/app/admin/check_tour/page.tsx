"use client";
import styles from "./checkTour.module.css";
import HeaderAdmin from "@/components/layout/HeaderAdmin/header_admin";
import CheckTourCard from "@/components/common/checkTour-card/CheckTourCard";
import Grid from "@mui/material/Grid";

export default function checktour() {
  return (
    <>
      <HeaderAdmin></HeaderAdmin>
      <div className={styles.history__container}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <CheckTourCard></CheckTourCard>
          </Grid>
          <Grid item xs={4}>
            <CheckTourCard></CheckTourCard>
          </Grid>
          <Grid item xs={4}>
            <CheckTourCard></CheckTourCard>
          </Grid>
          <Grid item xs={4}>
            <CheckTourCard></CheckTourCard>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
