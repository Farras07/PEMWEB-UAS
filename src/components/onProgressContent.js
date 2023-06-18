import {React,useEffect,useState} from 'react'
import styles from '../styles/orderContent.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
export default function OnProgressContent({data}) {
    const router = useRouter()
    const [orderData,setOrderData] = useState(data)
    const clickedLink=(id)=>{
        console.log(id)
        router.push(`/dashboard/orders/${id}`)
    }
    const processOrder =async(id)=>{
        const status = {
            processStatus:'Order Completed'
        }
        await fetch(`/api/order/${id}`, {
            method: "PUT",
            headers:{
              "Content-Type" : "application/json",
            },
            body: JSON.stringify(status)
          })
          console.log('berhasil')
          const updatedData = orderData.map((data) =>data._id === id ? { ...data, processStatus: 'Order Completed' } : data)
          setOrderData(updatedData)
    }
  return (
    <section className={`${styles.container}`}>
        <h1 className={`${styles.h1}`}>On Progress Orders</h1>
        <div className={`${styles.conButton}`}>
            <Link href='/dashboard/orders' className={`${styles.linkMenu} bg-success`}>Incoming Order</Link>
            <Link href='/dashboard/completedOrders' className={`${styles.linkMenu2}`}>Completed Orders</Link>
            <Link href='/dashboard/refusedOrder' className={`${styles.linkMenu3}`}>Refused Orders</Link>
        </div>
        <section className={`${styles.commentSection}`}>
        {orderData.map((orderData, i) => (orderData.processStatus === 'Order On Progress' ? (
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

                <div className={`${styles.actionBtn}`}>
                    <span onClick={() => processOrder(orderData._id)} className={`${styles.unpinButton}`}><Image alt='Accept' src='/icons/check.svg' width={25} height={25} /></span>
                </div>

            </article>
        ) : null))}
        </section>
    </section>
  
  )
}
