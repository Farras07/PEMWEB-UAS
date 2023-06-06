import {React,useState,useRef} from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Jumbotron from '@/components/jumbotron'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import connect from '../db/db'
// import Product from '../model/product'
// import Detail from '../components/productDetails'
import Layout from '../layout/layout'

const inter = Inter({ subsets: ['latin'] })
export default function Home({products}) {
  console.log(products)
  const [itemShow,setItemShow] = useState('')
  const [numberItem,setNumberItem] = useState(0)
  const [subTotal,setSubTotal] = useState(0)
  const [toggleDetail,setToggleDetail] = useState(false)
  const ref = useRef(null)
  const inputCalculatorRef = useRef(null)
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed:3000,
    autoplay:true
  }
  const hideCover=() =>{
    if(!toggleDetail){
      ref.current.style.display = 'none'

    }
    else{
      ref.current.style.display = 'block'

    }
  }
  return (
    <>
      <Layout page='home' Items={numberItem}>
          <div className={`${styles.cover}`} ref={ref}></div>
          {toggleDetail? 
          <>
          {/* product Detail */}
            <section className={`${styles.container}`} key={itemShow._id}>
              <div className={`${styles.header} d-flex`}>
                    <figure className={`${styles.logo} d-flex justify-content-center w-100`}>
                        <Image src='./icons/logo.svg' alt= 'logo' width={110} height={35}/>
                    </figure>
                </div>
                <section className={`${styles.itemsDetail}`}>
                    <section className='d-flex align-items-center'>
                        <figure className={`${styles.itemsImage} d-flex justify-content-center`}>
                            <Image src={itemShow.image} alt ={itemShow.productName} width={150} height={250}/>
                        </figure>
                        <article className={`${styles.itemsDesc}`}>
                          <article className={`${styles.itemsDescPart}`}>
                            <div className="productName desc">
                                <h3>Product Name : {itemShow.productName}</h3>
                            </div>
                            <div className=" price desc">
                                <h3>Price : Rp {itemShow.price}</h3>
                            </div>
                            <div className="size desc">
                                <h3>Available Size : {itemShow.sizeAvailable}</h3>
                            </div>
                            <div className="process desc">
                                <h3>Processing Time : {itemShow.processingTime}</h3>
                            </div>
                          </article>
                          <article className={`${styles.orderSection}`}>
                              <h3 htmlFor="quantity">Quantity Items</h3>
                            <div className={`${styles.orderQuantity} input-group mb-3 d-flex justify-content-between align-items-center`}>
                              <input ref={inputCalculatorRef} type="text" className="form-control" onChange={()=>{
                                  const inputValue = inputCalculatorRef.current.value;
                                  const total = inputValue ? inputValue * itemShow.price : 0;
                                  setSubTotal(total)

                              }}/>
                              <span className="input-group-text">pcs</span>
                            </div>
                            <div className={`${styles.orderTotal}`}>
                                <h3>Total : Rp. {subTotal}</h3>
                            </div>
                            <div className={`${styles.orderButton} text-center`} onClick={()=>{
                              setSubTotal(0)
                              setToggleDetail(false)
                              ref.current.style.display = 'none'
                              setNumberItem(numberItem+1)}
                              }>Order Now</div>
                          </article>
                        </article>
                    </section>
                </section>
            </section>
            <div className={`${styles.closeButton}`} onClick={()=>{
              setSubTotal(0)
              setToggleDetail(false)
              ref.current.style.display = 'none'
              }}><strong>X</strong></div>
            {/* Product Detail */}
          </> 
          : null}
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
          <div {...settings} className={`${styles.catalog}`}>
            <section className={`${styles.slide} d-flex justify-content-around align-items-end`}>
              {products.map((product,i) =>{
                if(i<4){
                  return(
                    <>
                      <Link href={`/catalog/${(product.category === 'Summer'? 'summer' : 'winter')}/${product._id}`} className={`${styles.items}`} key={product._id}>
                        <figure><Image src={product.image} alt='items' width={140} height={140}/></figure>
                        <figcaption>{product.productName}</figcaption>
                        <p>Rp {product.price}</p>
                      </Link>
                    </>
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
