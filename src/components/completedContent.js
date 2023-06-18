import React from 'react'
import styles from '../styles/orderContent.module.css'
import Image from 'next/image'
import Link from 'next/link'
export default function CompletedContent({data}) {
    console.log(data)
  return (
    <section className={`${styles.container}`}>
        <h1 className={`${styles.h1}`}>Completed Orders</h1>
        <div className={`${styles.conButton}`}>
            <Link href='/dashboard/orders' className={`${styles.linkMenu}`}>Incoming Orders</Link>
            <Link href='/dashboard/onProgressOrders' className={`${styles.linkMenu}`}>On Progress Orders</Link>
            <Link href='/dashboard/refusedOrder' className={`${styles.linkMenu}`}>Refused Orders</Link>
        </div>
        <section className={`${styles.commentSection}`}>
        {data.map((data, i) => (data.processStatus === 'Order Completed' ? (
            <article key={i} className={`${styles.cardComment}`}>
                <div className={`${styles.contCommentProfile} d-flex justify-content-center`}>
                <div className={`${styles.commentProfile}`}>
                    <h3 className={`${styles.h3} text-white text-center`}>{data.nameCustomer}</h3>
                    <p className='text-white'>{data.email}</p>
                </div>
                </div>
                <div className={`${styles.commentContainer}`}>
                    <div className="title mb-1">
                        <h3 className={`${styles.h3} mb-3`}>Customer Info</h3>
                    </div>
                    <div className={`${styles.detail}`}>
                        <p className={`${styles.pComment}`}>Address : {data.address}</p>
                        <p className={`${styles.pComment}`}>Zip Code : {data.zipCode}</p>
                        <p className={`${styles.pComment}`}>Date Order : {data.dateOrder}</p>
                        <p className={`${styles.pComment}`}>Date Request : {data.dateRequest}</p>
                    </div>
                </div>

            </article>
        ) : null))}
        </section>
    </section>
  )
}
// data.items.map((item,j)=>{
//     return(
//         <article key={j} className={`${styles.cardComment}`}>

//             <div className={`${styles.contCommentProfile} d-flex justify-content-center`}>
//             <div className={`${styles.commentProfile}`}>
//                 <Image className={`${styles.image} text-center mb-2`} src={item.image} alt={item.productName} width={70} height={100}/>
//                 <p className='text-white'>{item.productName}</p>
//             </div>
//             </div>

//             <div className={`${styles.commentContainer}`}>
//                 <h3 className={`${styles.h3}`}>Aspirasi Untuk Prodi</h3>
//                 <p className={`${styles.pComment}`}>{data.aspro}</p>
//                 <h3 className={`${styles.h3}`}>Aspirasi Untuk HMPS </h3>
//                 <p className={`${styles.pComment}`}>{data.asphim}</p>
//                 <div className={`${styles.headerComment} d-flex justify-content-between text-secondary`}>
//                     <p className={`${styles.pComment}`}>{data.date}</p>
//                 </div>

//             </div>

//             <div className={`${styles.actionBtn}`}>

//             <span onClick={() => pinnedHandler(data._id, token)} className={`${styles.unpinButton}`}><Image alt='unpin' src='/unpin.svg' width={25} height={25} /></span>
//             <span onClick={() => deleteHandler(data._id, token)} className={`${styles.deleteButton}`}><Image alt='delete' src='/bin.svg' width={25} height={25} /></span>

//             </div>

//         </article>

//     )
// })