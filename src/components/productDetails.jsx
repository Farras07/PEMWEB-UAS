import {React,useState} from 'react'
import Image from 'next/image'
import styles from '../styles/productDetail.module.css'
export default function ProductDetails({product}) {
    
  return (
    <section className={`${styles.container}` } key={product._id}>
        <div className={`${styles.header} d-flex justify-content-end`}>
            <figure className={`${styles.logo} d-flex justify-content-center w-100`}>
                <Image src='./icons/logo.svg' alt= 'logo' width={110} height={35}/>
            </figure>
        </div>
        <section className={`${styles.itemsDetail}`}>
            <section className='d-flex align-items-center'>
                <figure className={`${styles.itemsImage}`}>
                    <Image src={product.image} alt ={product.productName} width={200} height={300}/>
                </figure>
                <article>
                    <div className="productName">
                        <h3>Product Name : {product.productName}</h3>
                    </div>
                    <div className="price">
                        <h3>Price : Rp {product.price}</h3>
                    </div>
                    <div className="size">
                        <h3>Available Size : {product.sizeAvailable}</h3>
                    </div>
                    <div className="process">
                        <h3>Processing Time : {product.processingTime}</h3>
                    </div>
                </article>
            </section>
        </section>
    </section>
  )
}
