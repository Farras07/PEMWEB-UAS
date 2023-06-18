import { React, useState, useRef } from 'react'
import { useRouter } from "next/router";
import styles from '../styles/dashboardContent.module.css'
import Image from 'next/image'

export default function DashboardContent(data) {
    const orderData = data.data
    const totalOrder = orderData.length

    const filteredOrderIncoming = orderData.filter((order)=>order.ProcessStatus !== 'Waiting Confirmation')
    const incomingOrder = filteredOrderIncoming.length

    const filteredOrderCompleted = orderData.filter((order)=>order.ProcessStatus !== 'Completed')
    const completedOrder = filteredOrderCompleted.length
    return (
        
        <article className={`${styles.container}`}>
            <h1 className={`${styles.h1}`}>Dashboard</h1>
            <div className={`${styles.dataCardContainer} d-flex justify-content-between align-items-center`}>

                <div className={`${styles.dataCardItems} border-bottom border-danger border-5`}>
                    <div>
                        <h3 className='fs-6 fw-bold'>Total Order</h3>
                        <p className={`${styles.p}`}>{totalOrder}</p>
                    </div>
                    <span className={`${styles.logo}`}>
                        <Image alt='image' src='/icons/totalorder.svg' width={50} height={50} />
                    </span>
                </div>

                <div className={`${styles.dataCardItems} border-bottom border-success border-5`}>
                    <div>
                        <h3 className='fs-6 fw-bold'>Order Incoming</h3>
                        <p className={`${styles.p}`}>{incomingOrder}</p>
                    </div>
                    <span className={`${styles.logo}`}>
                        <Image alt='image' src='/icons/add.svg' width={50} height={50} />
                    </span>
                </div>

                <div className={`${styles.dataCardItems} border-bottom border-warning border-5`}>
                    <div>
                        <h3 className='fs-6 fw-bold'>Order Completed</h3>
                        <p className={`${styles.p}`}>0</p>
                    </div>
                    <span className={`${styles.logo}`}>
                        <Image alt='image' src='/icons/order1.svg' width={50} height={50} />
                    </span>
                </div>

            </div>

            <div className="chartSection">

                <div className={`${styles.headerChart} my-3 d-flex justify-content-between align-items-center`}>

                    <h1 className={`${styles.h1} fw-bold`}>Response Chart</h1>
                    
                    {/* <div className={`${styles.filterButton} d-flex justify-content-evenly align-items-center`} onClick={() => handleFilter(isFilterShow)}>
                        <Image alt='image' src='filter.svg' width={20} height={20} />
                        <span className='text-white'>Filter</span>
                    </div> */}

                    {/* <div className={`${styles.filterMenu}`} ref={ref}>
                        <div className={`${styles.FilterMenuItem} d-flex justify-content-between align-items-center gap-3`}>
                            <label htmlFor='shortTime' className='text-light'>Urutkan dari yang terbaru</label>
                            <input type="radio" radioGroup='grupRadio' name='grupRadio' id='shortTime' />
                        </div>
                        <div className={`${styles.FilterMenuItem} d-flex justify-content-between align-items-center gap-3`}>
                            <label htmlFor='longTime' className='text-light'>Urutkan dari yang terlama</label>
                            <input type="radio" radioGroup='grupRadio' name='grupRadio' id='longTime' />
                        </div>
                    </div> */}

                </div>

                <div className={`${styles.chartCard} border-bottom border-primary border-5`}>
                    <div className={`${styles.chartBox} d-flex align-items-center`}>
                        <div className={`${styles.chartContainer} d-flex`}>
                            <div className={`${styles.chartContainerBody} d-flex align-items-center`}>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </article>

    )

   
}





