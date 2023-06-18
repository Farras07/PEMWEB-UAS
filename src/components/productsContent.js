import {React,useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'
import styles from '../styles/orderContent.module.css'

export default function ProductsContent({data}) {
    const router = useRouter()
    const [orderData,setOrderData] = useState(data)
    const deleteProduct = async(id) =>{
        await fetch(`/api/product/${id}`, {
            method: "DELETE",
            headers:{
              "Content-Type" : "application/json",
            },
          })
          console.log('berhasil')
          const updatedData = orderData.filter((data)=>data._id !== id)
          setOrderData(updatedData)
    }
    const edit=(id)=>{
        router.push(`/dashboard/products/${id}`)
    }
  return (
    <section className={`${styles.container}`}>
        <h1 className={`${styles.h1}`}>Products</h1>
        <div className={`${styles.conButton}`}>
            <Link href='/dashboard/products/add' className={`${styles.linkMenu}`}>Add Product</Link>
        </div>
        <section className={`${styles.commentSection}`}>
        {orderData.map((data, i) => (
            <article key={i} className={`${styles.cardComment}`} >
                <div className={`${styles.contCommentProfile} d-flex justify-content-center`}>
                <div className={`${styles.commentProfile}`}>
                    <Image src={data.image} alt={data.productName} width={70} height={100} className={`${styles.h3} text-white text-center`} />
                    <p className='text-white'>{data.productName}</p>
                </div>
                </div>
                <div className={`${styles.commentContainer}`}>
                    <div className="title mb-1">
                        <h3 className={`${styles.h3} mb-3`}>Product Info</h3>
                    </div>
                    <div className={`${styles.detail}`}>
                        <p className={`${styles.pComment}`}>Category : {data.category}</p>
                        <p className={`${styles.pComment}`}>Price : {data.price}</p>
                        <p className={`${styles.pComment}`}>Product Type : {data.productType}</p>
                    </div>
                </div>

                <div className={`${styles.actionBtn}`}>
                    <span onClick={()=>edit(data._id)} className={`${styles.unpinButton}`}><Image alt='Edit' src='/icons/edit.svg' width={18} height={18} /></span>
                    <span onClick={() => deleteProduct(data._id)} className={`${styles.unpinButton}`}><Image alt='Delete' src='/icons/bin.svg' width={18} height={18} /></span>
                </div>

            </article> 
        ))}
        </section>
    </section>
  
  )
}
