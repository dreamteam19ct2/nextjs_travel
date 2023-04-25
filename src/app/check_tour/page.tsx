"use client"
import styles from  "./check_tour.module.css";
import React, { useState } from 'react';
import StarHalfSharpIcon from '@mui/icons-material/StarHalfSharp';
import StarPurple500SharpIcon from '@mui/icons-material/StarPurple500Sharp';
import Headere from "@/components/layout/Header/header";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Footer from "@/components/layout/Footer/footer";

export default function tour_detail(){
    const [isBorderRed, setIsBorderRed] = useState(false);

    const handleClick = () => {
      setIsBorderRed(!isBorderRed);
    }
  
    const borderStyle = {
      border: `10px solid ${isBorderRed ? 'green' : 'red'}`,
    };



        return(
            <>
                     <Headere></Headere>
                     <div className={styles.check_tour__contain}>
                              <h1 className={styles.container__header__checkTour__Name}>Check tour</h1>

                                <div className={styles.animation_container}>
                                        <div className={styles.circle}></div>
                                        <div className={styles.circle}></div>
                                        <div className={styles.circle}></div>
                                        <div className={styles.circle}></div>
                                        <div className={styles.circle}></div>
                                        <div className={styles.circle}></div>
                                    </div>
                                <div style={{display: 'flex'}} className={styles.container__header__checkTour__Name_inf_main}>
                                         <div className={styles.container__header__checkTour__Name_inf}>
                                                     <p className={styles.container__header__checkTour__Name_inf__p }  style={borderStyle}>Status</p>
                                        </div>
                                        <div  className={styles.container__header__checkTour__Name_inf__foot}>
                                            <div className={styles.container__header__checkTour__Name__inf__left}>
                                                                <p className={styles.container__header__checkTour__Name__inf__left__p}>Name tour</p>
                                                        </div>
                                                        <div     className={styles.container__header__checkTour__Name__inf__left__p_lr} >
                                                                        <div  className={styles.container__header__checkTour__Name__inf__left__p_lr__}>
                                                                                                <p className={styles.container__header__checkTour__Name__inf__left__p__p}>Start day</p>
                                                                                                <label className={styles.container__header__checkTour__Name__inf__left__p__label} htmlFor="">14/5/2023</label>
                                                                        </div>
                                                                        <div  className={styles.container__header__checkTour__Name__inf__left__p_lr_}>
                                                                                                <p className={styles.container__header__checkTour__Name__inf__left__p__p}>End day</p>
                                                                                                <label className={styles.container__header__checkTour__Name__inf__left__p__label} htmlFor="">14/5/2023</label>
                                                                        </div>
                                                        </div>
                                                        <div  className={styles.container__header__checkTour__Name__inf__about}>
                                                                    <p className={styles.container__header__checkTour__Name__inf__about__p}>Đặt ngay vé tham quan du lịch và các tours để chiêm ngưỡng các địa danh hấp dẫn, hot nhất trong và ngoài nước cùng nhiều ưu đãi hấp dẫn. </p>
                                                                    <div className={styles.container__header__checkTour__Name__inf__about__label}>
                                                                            <label> $70.00 </label>
                                                                    </div>
                                                                   
                                                        </div>
                                                        <div className={styles.container__header__checkTour__Name__inf__about__main} >
                                                                <button onClick={handleClick} className={styles.container__header__checkTour__Name__inf__about__btn}>Browse</button>
                                                        </div>
                                        </div>
                                </div>
                             
                              
                     </div>
                    

            </>
            
        )
        
 }

