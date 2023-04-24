"use client";
import styles from "./history.module.css";
import Header from "@/components/layout/Header/header";
import HistoryCard from "@/components/common/history-card/HistoryCard";
import Grid from "@mui/material/Grid";

export default function history() {
  return (
    <>
      <Header></Header>
      <div className={styles.history__container}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <HistoryCard></HistoryCard>
          </Grid>
          <Grid item xs={6}>
            <HistoryCard></HistoryCard>
          </Grid>
          <Grid item xs={6}>
            <HistoryCard></HistoryCard>
          </Grid>
          <Grid item xs={6}>
            <HistoryCard></HistoryCard>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
