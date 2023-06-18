import {React,useEffect,useState} from 'react'
import styles from '../styles/orderContent.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Buttons from './orderButton'

export default function OnProgressContent({data}) {
    const router = useRouter()
    const [orderData,setOrderData] = useState(data)
    const clickedLink=(id)=>{
        console.log(id)
        router.push(`/dashboard/orders/${id}`)
    }
  return (
    <section className={`${styles.container}`}>
        <h1 className={`${styles.h1}`}>Refused Orders</h1>
        <Buttons foc={4}/>
        <section className={`${styles.commentSection}`}>
        {orderData.map((orderData, i) => (orderData.processStatus === 'Order Refused' ? (
            <article key={i} className={`${styles.cardComment}`} >
                <div className={`${styles.contCommentProfile} d-flex justify-content-center`} onClick={()=>clickedLink(orderData._id)}>
                <div className={`${styles.commentProfile}`}>
                    <h3 className={`${styles.h3} text-white text-center`}>{orderData.nameCustomer}</h3>
                    <p className='text-white'>{orderData.email}</p>
                </div>
                </div>
                <div className={`${styles.commentContainer}`}>
                    <div className="title mb-1">
                        <h3 className={`${styles.h3} mb-3`}>Customer Info</h3>
                    </div>
                    <div className={`${styles.detail}`}>
                        <p className={`${styles.pComment}`}>Address : {orderData.address}</p>
                        <p className={`${styles.pComment}`}>Zip Code : {orderData.zipCode}</p>
                        <p className={`${styles.pComment}`}>Date Order : {orderData.dateOrder}</p>
                        <p className={`${styles.pComment}`}>Date Request : {orderData.dateRequest}</p>
                    </div>
                </div>
            </article>
        ) : null))}
        </section>
    </section>
  
  )
}
