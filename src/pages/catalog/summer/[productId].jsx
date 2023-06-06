import React from 'react'
import {useRouter} from 'next/router'
import Layout from '../../../layout/layoutDetail'
import styles from '../../../styles/productDetail.module.css'
import Image from 'next/image'
import Link from 'next/link'
export default function ProductDetail({product}) {
  // const router = useRouter()
  // const productId = router.query.productId
  // console.log(products)
  // console.log('kon')
  // console.log(productId)
  return (
    <Layout>
      <div className={`${styles.contentDetail} d-flex `}>
        <div className={`${styles.leftPanel} d-flex flex-column align-items-center`}>
          <Image src={product.image} alt='item' width={500} height={800}/>
        </div>
        <div className={`${styles.rightPanel}`}>
          <div className={`${styles.productDesc} d-flex flex-column justify-content-between `}>
            <div className="productCol">
              <h3 className={`${styles.productName}`}>{product.productName}</h3>
              <h5 className={`${styles.col}`}>Winter</h5>
            </div>
            <div className={`${styles.priceCon}`}>
              <h5 className={`${styles.price}`}>Rp. {product.price}</h5>
            </div>
            <div className="size">
              <p>Size : </p>
              <div className={`${styles.sizeCon} d-flex justify-content-between` }>
                {product.sizeAvailable.map((size)=>{
                  return(
                    <div className={`${styles.sizeButton} d-flex justify-content-center align-items-center`} key={size}>{size}</div>
                  )
                })}
              </div>
            </div>
            <div className={`${styles.orderQuantity} input-group d-flex`}>
                <input type="number" className="form-control"/>
            </div>
            <div className={`${styles.orderButton} d-flex justify-content-center align-items-center`}>Add To Cart</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps=async(ctx)=>{
  const id = ctx.params.productId
  // console.log('id')
  console.log(id)
  try{
    const res = await fetch(`http://localhost:3000/api/product/${id}`,{
      method:'GET'
    });
    const data = await res.json();
/    // console.log(data)
    return {
      props: {
        product: data, // Use the parsed data
      },
    };
  }catch(e){
    return {
      notFound: true,
    };
  }
}
// const reloadData = async()=>{
//   try{
//     const res = await fetch(`http://localhost:3000/api/product/${id}`,{
//       method:'GET'
//     });
//     const data = await res.json();
//     return {
//       props: {
//         products: data, // Use the parsed data
//       },
//     };
//   }catch(e){
//     return {
//       notFound: true,
//     };
//   }
//   }
