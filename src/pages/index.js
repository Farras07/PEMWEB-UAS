import {React,useState,useRef} from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Jumbotron from '@/components/jumbotron'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Layout from '../layout/layout'

const inter = Inter({ subsets: ['latin'] })
export default function Home({products}) {
  console.log(products)
  const ref = useRef(null)
  return (
    <>
      <Layout page='home'>
          <div className={`${styles.cover}`} ref={ref}></div>
          <Jumbotron />
          <div id='new' className={`${styles.containerNew} d-flex mt-5`}>
          <div className={`${styles.rightContainer}`}>
            <figure>
              <Image src='/products/sweater.svg' alt='sweater' width={600} height={800} className={`${styles.sweater}`}></Image>
            </figure>
          </div>
          <div className={`${styles.leftContainer} d-flex flex-column justify-content-center align-items-center text-center`}>
            <h3>NEW ARRIVAL</h3>  
            <p>Introducing our latest collection of cozy sweaters, designed to keep you warm and stylish this season. 
              Our new arrivals feature an exquisite blend of comfort, quality, and contemporary fashion.</p>
              <div className="button">
                <Link href='#' className={`${styles.newButton}`}>Shop Now!</Link>
              </div>
          </div>
        </div>
        <section id='catalog' className='text-end px-2 mt-3'>
          <div className={`${styles.catalog}`}>
            <section className={`${styles.slide} d-flex justify-content-around align-items-end`}>
              {products.map((product,i) =>{
                if(i<4){
                  return(
                      <Link href={`/catalog/${(product.category === 'Summer'? 'summer' : 'winter')}/${product._id}`} className={`${styles.items}`} key={product._id}>
                        <figure><Image src={product.image} alt='items' width={140} height={140}/></figure>
                        <figcaption>{product.productName}</figcaption>
                        <p>Rp {product.price}</p>
                      </Link>
                  )
                }
              })}
            </section>
          </div>
        </section>
      </Layout>
    </>
  )
}
export const getServerSideProps = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/product');
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
// export const newArrival = async () => {
//   try {
//     const res = await fetch('http://localhost:3000/api/product');
//     const data = await res.json(); 
//     const new = data.sort

//     return {
//       props: {
//         products: data, // Use the parsed data
//       },
//     };
//   } catch (e) {
//     return {
//       notFound: true,
//     };
//   }
// };

// export const getServerSideProps =async()=>{
//   try{
//     console.log('CONNECTING TO MONGO')
//     await connect()
//     console.log('CONNECTED TO MONGO')

//     console.log('FETCHING DOCUMENT')
//     const product = await Product.find()
//     console.log('DOCUMENT FETCHED')

//     return{
//       props:{
//         products: JSON.parse(JSON.stringify(product))
//       }
//     }
// }
// catch(e){
//     console.log(e)
//     return{
//       notFound:true
//     }
// }
// }
