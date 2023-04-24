'use client'
import styles from './footer.module.css'
import Grid from "@mui/material/Grid";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
export default function Footer() {
    return (
      <>
        <Grid container spacing={0} className={styles.container__footer}>
          <Grid item xs={6}>
            <h2>DreamTeam</h2>
            <p className={styles.content}>
              With travala you can experience new travel and the best tourist
              destinations that we have to offer
            </p>
          </Grid>
          <Grid item xs={2}>
            <div className={styles.title}>Destination</div>
            <div className={styles.content}>Cappadocia</div>
            <div className={styles.content}>Sossusvlei</div>
            <div className={styles.content}>Albuquera</div>
          </Grid>
          <Grid item xs={2}>
            <div className={styles.title}>About</div>
            <div className={styles.content}>Contact Us</div>
            <div className={styles.content}>Testimoni</div>
            <div className={styles.content}>Rating</div>
          </Grid>
          <Grid item xs={2}>
            <div className={styles.title}>Follow Us</div>
            <div className={styles.content}>
              <FacebookIcon className={styles.icon} />
              Facebook
            </div>
            <div className={styles.content}>
              <TwitterIcon className={styles.icon} />
              Twitter
            </div>
            <div className={styles.content}>
              <InstagramIcon className={styles.icon} />
              Instagram
            </div>
          </Grid>
          <Grid item xs={9} style={{marginTop: "24px" }}>
            <p className={styles.content}>Copyright © Dreamteam 2023 </p>
          </Grid>
          <Grid item xs={3} style={{ display: "flex", marginTop: "24px" }}>
            <p className={styles.content}>Terms & Conditions </p>
            <p className={styles.content}>Privacy Policy </p>
          </Grid>
        </Grid>
      </>
    );

}