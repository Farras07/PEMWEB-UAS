import React from 'react'
import Layout from '../../../layout/colLayout'
import styles from '../../../styles/product.module.css'
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
                <Link href={`http://localhost:3000/catalog/summer/${product._id}`} className={`${styles.colItem} d-flex flex-column justify-content-center align-items-center`} key={product._id}>
                  <figure><Image src={product.image} alt='items' width={250} height={350} className={`${styles.productimage}`}/></figure>
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
export const getServerSideProps = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/product/');
    const data = await res.json(); // Parse the response as JSON

    return {
      props: {
        products: data, // Use the parsed data
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};
