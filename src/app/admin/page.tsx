"use client";

import HeaderAdmin from "@/components/layout/HeaderAdmin/header_admin";
import styles from "./admin.module.css";

export default function Admin() {
    return (
        <>
            <HeaderAdmin></HeaderAdmin>
            <div className={styles.body}>
                <div className={styles.btn_add_tour}>
                    <button className={styles.header__button}>Add Tour</button>
                </div>
            </div>
        </>
    );

}
