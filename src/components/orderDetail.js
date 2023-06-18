import React from 'react'
import styles from '../styles/orderDetail.module.css'
import Image from 'next/image'
export default function OrderDetail({data}) {
    const orderItems = data.items
    console.log(orderItems)
  return (
    <section className={`${styles.container}`}>
        <h1 className={`${styles.h1}`}>Orders</h1>
        <section className={`${styles.commentSection}`}>
        {orderItems.map((item, i) => (item.status === 'Working On' ? (
            <article key={i} className={`${styles.cardComment}`}>
                <div className={`${styles.contCommentProfile} d-flex justify-content-center`}>
                <div className={`${styles.commentProfile}`}>
                    <Image src={item.image} alt={item.productName} width={70} height={100} className={`${styles.h3} text-white text-center`}/>
                    <p className='text-white'>{item.productName}</p>
                </div>
                </div>
                <div className={`${styles.commentContainer}`}>
                    <div className="title mb-1">
                        <h3 className={`${styles.h3} mb-3`}>Order Detail</h3>
                    </div>
                    <div className={`${styles.detail}`}>
                        <p className={`${styles.pComment}`}>Height (cm) : {item.size.height}</p>
                        <p className={`${styles.pComment}`}>Neck (cm): {item.size.neck}</p>
                        <p className={`${styles.pComment}`}>Chest (cm) : {item.size.chest}</p>
                        <p className={`${styles.pComment}`}>waist (cm) : {item.size.waist}</p>
                        <p className={`${styles.pComment}`}>Arm (cm) : {item.size.arm}</p>
                        <p className={`${styles.pComment}`}>Price : Rp. {item.price}</p>
                        <p className={`${styles.pComment}`}>Quantity : {item.quantity}</p>
                    </div>
                </div>
            </article>
        ) : null))}
        </section>
    </section>
  )
}
