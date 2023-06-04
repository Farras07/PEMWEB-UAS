import React from 'react'
import Layout from '../../../layout/colLayout'
import styles from '../../../styles/product.module.css'
import connect from '../../../db/db'
import Product from '../../../model/product'
import Image from 'next/image'
import Link from 'next/link'
export default function Index({products}) {
  console.log(products)
  return (
    <div>
        <Layout page='Summer Collection'>
          {products.map((product)=>{
             if(product.category === 'Summer'){
              return(
                <Link href='#' className={`${styles.colItem} d-flex flex-column justify-content-center align-items-center`} key={product._id}>
                  <figure><Image src={product.image} alt='items' width={250} height={400}/></figure>
                  <figcaption>{product.productName}</figcaption>
                  <p>Rp {product.price}</p>
                </Link>
              )
             }
          })}
        </Layout>
    </div>
  )
}
export const getServerSideProps=async()=>{
  try{
    console.log('CONNECTING TO MONGO')
    await connect()
    console.log('CONNECTED TO MONGO')

    console.log('FETCHING DOCUMENT')
    const product = await Product.find()
    console.log('DOCUMENT FETCHED')

    return{
      props:{
        products: JSON.parse(JSON.stringify(product))
      }
    }
}
catch(e){
    console.log(e)
    return{
      notFound:true
    }
}
}

