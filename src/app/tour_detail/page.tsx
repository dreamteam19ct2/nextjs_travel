"use client"
import styles from  "./tour_detail.module.css";
import StarHalfSharpIcon from '@mui/icons-material/StarHalfSharp';
import StarPurple500SharpIcon from '@mui/icons-material/StarPurple500Sharp';
import Headere from "@/components/layout/Header/header";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
export default function tour_detail(){
        return(
                <>
                    <Headere></Headere>
                    <div className={styles.container}>
                        <div  className={styles.container__header}>
                                <div className={styles.container__header__nameTourDetail}>
                                        <ArrowBackIosIcon />
                                        <h1 className={styles.container__header__nameTourDetail__Name}>BaNa Hill</h1>
                                </div>
                                <div className={styles.container__header__nameTourDetail__img}>
                                        <img src="/Rectangle1055.png" alt="" />
                                </div>
                                <div className={styles.container__header__nameTourDetail__content}> 
                                        <p style={{ fontSize: '16px' }}>Theme parks may not be to every traveller’s taste. But Sun World Ba Na Hills − the European-themed recreational complex in the Trường Sơn Mountains, about 30km from Danang – certainly draws the crowds. That’s because it offers every visitor, of all ages , an entertaining day out in cool climes.</p>
                                </div>
                                <div className={styles.container__header__nameTourDetail__Evaluate}>
                                                <p>Evaluate</p>
                                                <div className={styles.container__header__nameTourDetail__Evaluate__icon}>
                                                                <StarPurple500SharpIcon className={styles.container__header__nameTourDetail__Evaluate__icon__icon}/>
                                                                <StarPurple500SharpIcon className={styles.container__header__nameTourDetail__Evaluate__icon__icon}/>
                                                                <StarPurple500SharpIcon className={styles.container__header__nameTourDetail__Evaluate__icon__icon}/>
                                                                <StarPurple500SharpIcon className={styles.container__header__nameTourDetail__Evaluate__icon__icon}/>
                                                                <StarHalfSharpIcon className={styles.container__header__nameTourDetail__Evaluate__icon__icon}/>
                                                </div>
                                </div>
                                <div className={styles.container__header__nameTourDetail__Schedule }>
                                                <p>Schedule: </p>
                                                <div className={styles.container__header__nameTourDetail__Schedule__p}>
                                                                <p>Feb 5, 2023 - Feb 10, 2023 </p>  
                                                </div>
                                </div>
                                <div className={styles.container__header__nameTourDetail__people }>
                                                <p>Number of people:  </p>
                                                <div className={styles.container__header__nameTourDetail__people__quantity}>
                                                                <p>20 people </p>  
                                                </div>
                                </div>
                                <div className={styles.container__header__nameTourDetail__detail}>
                                         <div className={styles.container__header__nameTourDetail__detail__day}>
                                                 <p className={styles.container__header__nameTourDetail__detail__day__text}>Day 1</p>
                                                 <p  className={styles.container__header__nameTourDetail__detail__day__text__contain}>Take a bus from bmt to DaNang</p>
                                         </div>
                                         <div className={styles.container__header__nameTourDetail__detail__day}>
                                                 <p className={styles.container__header__nameTourDetail__detail__day__text}>Day 2</p>
                                                 <p  className={styles.container__header__nameTourDetail__detail__day__text__contain}>Transfer to hotel in the city center. Walk around the old town and enjoy street food</p>
                                         </div>
                                         <div className={styles.container__header__nameTourDetail__detail__day}>
                                                 <p className={styles.container__header__nameTourDetail__detail__day__text}>Day 3</p>
                                                 <p  className={styles.container__header__nameTourDetail__detail__day__text__contain}>Visit famous places like Wat Phra Kaew, Grand Palace, Wat Pho and sunbathe at Pattaya beach in the afternoon.</p>
                                         </div>
                                         <div className={styles.container__header__nameTourDetail__detail__day}>
                                                 <p className={styles.container__header__nameTourDetail__detail__day__text}>Day 4</p>
                                                 <p  className={styles.container__header__nameTourDetail__detail__day__text__contain}>Fly to Ho Chi Minh City, Vietnam to visit famous sites like Tao Dan Park, Ben Thanh Market, Reunification Palace, and Independence Palace</p>
                                         </div>
                                         <div className={styles.container__header__nameTourDetail__detail__day}>
                                                 <p className={styles.container__header__nameTourDetail__detail__day__text}>Day 5</p>
                                                 <p  className={styles.container__header__nameTourDetail__detail__day__text__contain}>Visit Hoi An Ancient City and Ba Na Hills in Da Nang, Vietnam. Fly back to Bangkok to end the tour</p>
                                         </div>
                                         
                                </div>
                                <div className={styles.container__header__nameTourDetail__detail_price}> 
                                         <p style={{ fontWeight: 700, fontSize: '40px', color: '#F97300'}}>Price</p>
                                         <div className={styles.container__header__nameTourDetail__detail_price_money}>
                                                <p>100$</p>
                                                <p>/person</p>
                                         </div>
                                         <button className={styles.container__header__nameTourDetail__detail_price_button}>Booking Now</button>
                                </div>
                        </div>
                        
                    </div>
                </>
        )


}