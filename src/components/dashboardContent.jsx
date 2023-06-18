import { React, useState, useRef } from 'react'
import { useRouter } from "next/router";
import styles from '../styles/dashboardContent.module.css'
import Image from 'next/image'
import LineChart from '../components/lineChart.js'


export default function DashboardContent({data}) {
    const orderData = data
    const totalOrder = orderData.length

    const filteredOrderIncoming = orderData.filter((order)=>order.ProcessStatus !== 'Waiting Confirmation')
    const incomingOrder = filteredOrderIncoming.length

    const filteredOrderCompleted = orderData.filter((order)=>order.ProcessStatus !== 'Completed')
    const completedOrder = filteredOrderCompleted.length

    const monthList = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","November","Desember"]
    const [dataChart,setDataChart] = useState({
        labels:handlerDataChart(monthList,orderData).map(data=>data.month) ,
        datasets: [{
            label : "Total Order",
            data:handlerDataChart(monthList,orderData).map(data=>data.numberOrder),
            
            backgroundColor:[
                "#5cb85c",
                "#f0ad4e",
                "#d9534f",
                "#5bc0de"
            ],
            borderColor:"#0275d8",
            options: {
                maintainAspectRatio:false,
                interaction: {
                  mode: 'nearest',
                  axis: 'x',
                  intersect: false
                }
            },
            scales: {
                y:{
                    beginAtZero:true,
                }
            }
        }]
    })
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
                        <Image alt='image' src='/icons/mail.svg' width={50} height={50} />
                    </span>
                </div>

                <div className={`${styles.dataCardItems} border-bottom border-success border-5`}>
                    <div>
                        <h3 className='fs-6 fw-bold'>Order Incoming</h3>
                        <p className={`${styles.p}`}>{incomingOrder}</p>
                    </div>
                    <span className={`${styles.logo}`}>
                        <Image alt='image' src='/icons/mail.svg' width={50} height={50} />
                    </span>
                </div>

                <div className={`${styles.dataCardItems} border-bottom border-warning border-5`}>
                    <div>
                        <h3 className='fs-6 fw-bold'>Order Completed</h3>
                        <p className={`${styles.p}`}>0</p>
                    </div>
                    <span className={`${styles.logo}`}>
                        <Image alt='image' src='/icons/mail.svg' width={50} height={50} />
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
                                <LineChart data={dataChart} width={200} className={`${styles.chartData}`}/> 
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </article>

    )

   
}
const handlerDataChart =(monthList,datas)=>{
    const monthArray = []
    for(let a = 0 ;a<datas.length;a++){
        const monthData = new Date(datas[a].dateOrder)
        const month = monthData.getMonth()
        const monthName = monthList[month]
        monthArray.push(monthName)
    }
    const monthObject = [
        {
            month:monthList[0],
            numberOrder:monthArray.filter(data=>data === monthList[0]).length

        },
        {
            month:monthList[1],
            numberOrder:monthArray.filter(data=>data === monthList[1]).length

        },
        {
            month:monthList[2],
            numberOrder:monthArray.filter(data=>data === monthList[2]).length

        },
        {
            month:monthList[3],
            numberOrder:monthArray.filter(data=>data === monthList[3]).length

        },
        {
            month:monthList[4],
            numberOrder:monthArray.filter(data=>data === monthList[4]).length
        },
        {
            month:monthList[5],
            numberOrder:monthArray.filter(data=>data === monthList[5]).length

        },
        {
            month:monthList[6],
            numberOrder:monthArray.filter(data=>data === monthList[6]).length

        },
        {
            month:monthList[7],
            numberOrder:monthArray.filter(data=>data === monthList[7]).length

        },
        {
            month:monthList[8],
            numberOrder:monthArray.filter(data=>data === monthList[8]).length

        },
        {
            month:monthList[9],
            numberOrder:monthArray.filter(data=>data === monthList[9]).length

        },
        {
            month:monthList[10],
            numberOrder:monthArray.filter(data=>data === monthList[10]).length

        },
        {
            month:monthList[11],
            numberOrder:monthArray.filter(data=>data === monthList[11]).length

        }
    ]
    return monthObject
}









