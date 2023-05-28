import { React, useState, useRef } from 'react'
import styles from '../styles/dashboardContent.module.css'
import Image from 'next/image'
export default function DashboardContent(props) {
    return (



        <article className={`${styles.container}`}>

            <h1 className={`${styles.h1}`}>Dashboard</h1>
            <div className={`${styles.dataCardContainer} d-flex justify-content-between align-items-center`}>

            </div>

            <div className="chartSection">

            </div>

        </article>

    )

   
}




