'use client'

import styles from "./payment.module.css"
import Headere from "@/components/layout/Header/header";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
export default function payment(){
    return(
            <>
                <Headere></Headere>
                <div  className={styles.container_payment}>
                    <div className={styles.container__header__namePayment}>
                                            <ArrowBackIosIcon />
                                            <h1 className={styles.container__header__namePayment__Name}>BaNa Hill</h1>
                     </div>
                    <form action="">
                        <div  className={styles.container__header__namePayment__content}>
                                    <div className={styles.container__header__namePayment__content_item}>
                                            <div className={styles.container__header__namePayment__content__name__firstname}>
                                                    <p className={styles.container__header__namePayment__content__p}>First Name :  </p>
                                                    <input readOnly  className={styles.container__header__namePayment__content__name__view}></input>
                                            </div>
                                            <div className={styles.container__header__namePayment__content__name__lastname}>
                                                    <p className={styles.container__header__namePayment__content__p}>Last Name :  </p>
                                                    <input readOnly  className={styles.container__header__namePayment__content__name__view}></input>
                                            </div>
                                    </div>
                                    <div className={styles.container__header__namePayment__content_item}>
                                                    <p className={styles.container__header__namePayment__content__p}>Phone Number  :  </p>
                                                    <input readOnly  className={styles.container__header__namePayment__content__view}></input>
                                    </div>
                                    <div className={styles.container__header__namePayment__content_item}>
                                                    <p className={styles.container__header__namePayment__content__p}>Email Address :   </p>
                                                    <input readOnly  className={styles.container__header__namePayment__content__view}></input>
                                    </div>
                                    <div className={styles.container__header__namePayment__content_item}>
                                                    <p className={styles.container__header__namePayment__content__p}>Number of People :   </p>
                                                    <input readOnly  className={styles.container__header__namePayment__content__view}></input>
                                    </div>
                                    <div className={styles.container__header__namePayment__content_item}>
                                                    <p className={styles.container__header__namePayment__content__p}>Address:  </p>
                                                    <input readOnly  className={styles.container__header__namePayment__content__view}></input>
                                    </div>
                                    
                        </div>
                        <div className={styles.container__header__namePayment__detail_price}> 
                                         <div className={styles.container__header__namePayment__detail_price__nomal} >
                                                <p className={styles.container__header__namePayment__detail_price__nomal_p}>Total Price</p>
                                                <p>100$</p>    
                                         </div>
                                         <button className={styles.container__header__namePayment__detail_price_button}>Payment</button>
                        </div>
                    </form>
                </div>

            
            </>
    )
}