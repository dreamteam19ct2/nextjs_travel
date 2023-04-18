'use client'

import styles from "./user_profile.module.css"
import Headere from "@/components/layout/Header/header";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
export default function UserProfile(){
    return(
            <>
                <Headere></Headere>
                <div  className={styles.container_UserProfile}>
                    <div className={styles.container__header__nameUserProfile}>
                                            <h1 className={styles.container__header__nameUserProfile__Name}>User Profile</h1>
                     </div>
                    <form action="">
                        <div  className={styles.container__header__nameUserProfile__content}>
                                    <div className={styles.container__header__nameUserProfile__content_item_info}>
                                            <p>General information</p>
                                    </div>
                                      <div className={styles.container__header__nameUserProfile__content_item}>
                                                    <p className={styles.container__header__nameUserProfile__content__p}>FullName  :  </p>
                                                    <input placeholder='Nguyen Van A'   className={styles.container__header__nameUserProfile__content__view}></input>
                                    </div>
                                    <div className={styles.container__header__nameUserProfile__content_item}>
                                                    <p className={styles.container__header__nameUserProfile__content__p}>Phone Number  :  </p>
                                                    <input   className={styles.container__header__nameUserProfile__content__view}></input>
                                    </div>
                                    <div className={styles.container__header__nameUserProfile__content_item}>
                                                    <p className={styles.container__header__nameUserProfile__content__p}>Email Address :   </p>
                                                    <input   className={styles.container__header__nameUserProfile__content__view}></input>
                                    </div>
                                    
                                    <div className={styles.container__header__nameUserProfile__content_item}>
                                                    <p className={styles.container__header__nameUserProfile__content__p}>Address:  </p>
                                                    <input   className={styles.container__header__nameUserProfile__content__view}></input>
                                    </div>
                                    <div style={{display:"flex" , width:'100%' , justifyContent: 'space-between'}}>
                                            <div className={styles.container__header__nameUserProfile__content_item_1}>
                                                   
                                                            <p className={styles.container__header__nameUserProfile__content__p__1}>UserName   </p>
                                                                <input   className={styles.container__header__nameUserProfile__content__view__1}></input>
                                                    
                                                           
                                            </div>

                                            <div className={styles.container__header__nameUserProfile__content_item_1}>
                                                   
                                                        <div className={styles.container__header__nameUserProfile__content__p__1}>Password </div>
                                                        <input   className={styles.container__header__nameUserProfile__content__view__1}></input>
                                                   
                                                   
                                            </div>
                                    </div>
                                   
                                    <div className={styles.container__header__nameUserProfile__content_item_info}>
                                            <p>Lock information</p>
                                    </div>
                                    <div className={styles.container__header__nameUserProfile__content_item}>
                                                    <p className={styles.container__header__nameUserProfile__content__p}>System_role:  </p>
                                                    <input readOnly  className={styles.container__header__nameUserProfile__content__view}></input>
                                    </div>
                                    <div className={styles.container__header__nameUserProfile__content_item}>
                                                    <p className={styles.container__header__nameUserProfile__content__p}>Remember_token:  </p>
                                                    <input readOnly  className={styles.container__header__nameUserProfile__content__view}></input>
                                    </div>
                                    <div className={styles.container__header__nameUserProfile__content_item}>
                                                    <p className={styles.container__header__nameUserProfile__content__p}>Created_at:  </p>
                                                    <input readOnly  className={styles.container__header__nameUserProfile__content__view}></input>
                                    </div>
                                    <div style={{marginBottom: '2%'}} className={styles.container__header__nameUserProfile__content_item}>
                                                    <p className={styles.container__header__nameUserProfile__content__p}>Updated_at:  </p>
                                                    <input readOnly  className={styles.container__header__nameUserProfile__content__view}></input>
                                    </div>
                                    
                        </div>
                        <div className={styles.container__header__nameUserProfile__detail_price}>                      
                                         <button className={styles.container__header__nameUserProfile__detail_price_button}>Update</button>
                        </div>
                    </form>
                </div>

            
            </>
    )
}