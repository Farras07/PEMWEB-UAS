import {React,useEffect,useState} from 'react'
import styles from '../styles/orderContent.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'
import Buttons from './orderButton' 
import 'react-toastify/dist/ReactToastify.css'

export default function OrderContents({data}) {
    const router = useRouter()
    const [orderData,setOrderData] = useState(data)
    const updateSuccess = ()=>{
        toast.success('Berhasil Update Status Order',{
          position:toast.POSITION.TOP_CENTER,
          theme:'dark',
          autoClose:1500,
        })
      }
    const refusedOrder =()=>{
        toast.success('Berhasil Menolak Order',{
            position:toast.POSITION.TOP_CENTER,
            theme:'dark',
            autoClose:1500,
          })
    }
    const clickedLink=(id)=>{
        console.log(id)
        router.push(`/dashboard/orders/${id}`)
    }
    const processOrder =async(id)=>{
        const status = {
            processStatus:'Order On Progress'
        }
        await fetch(`/api/order/${id}`, {
            method: "PUT",
            headers:{
              "Content-Type" : "application/json",
            },
            body: JSON.stringify(status)
          })
          console.log('berhasil')
          const updatedData = orderData.map((data) =>data._id === id ? { ...data, processStatus: 'Order On Progress' } : data)
          setOrderData(updatedData)
          updateSuccess()
    }
    const refuseOrder =async(id)=>{
        const status = {
            processStatus:'Order Refused'
        }
        await fetch(`/api/order/${id}`, {
            method: "PUT",
            headers:{
              "Content-Type" : "application/json",
            },
            body: JSON.stringify(status)
          })
          const updatedData = orderData.map((data) =>data._id === id ? { ...data, processStatus: 'Order Refused' } : data)
          setOrderData(updatedData)
          refusedOrder()
    }
  return (
    <section className={`${styles.container}`}>
        <ToastContainer/>
        <h1 className={`${styles.h1}`}>Incoming Orders</h1>
        <Buttons foc={1}/>
        <section className={`${styles.commentSection}`}>
        {orderData.map((orderData, i) => (orderData.processStatus === 'Waiting Confirmation' ? (
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
                <span onClick={() => refuseOrder(orderData._id)} className={`${styles.deleteButton}`}><Image alt='Refuse' src='/icons/cross.svg' width={25} height={25} /></span>

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