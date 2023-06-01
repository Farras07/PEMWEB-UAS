import {React,useState,useRef} from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Nav from '../components/navHome'
import Jumbotron from '@/components/jumbotron'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import connect from '../db/db'
import Product from '../model/product'
// import Detail from '../components/productDetails'


import Footer from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home({products}) {
  const [numberItem,setNumberItem] = useState(0)
  const [itemShow,setItemShow] = useState('')
  const [toggleDetail,setToggleDetail] = useState(false)
  const ref = useRef(null)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  const detailHandler=(product,a)=>{
    setToggleDetail(true)
    setItemShow(product)
    ref.current.style.display = 'block'
  }
  console.log(numberItem)
  return (
    <>
      <Nav data={numberItem}/>
      <div className={`${styles.cover}`} ref={ref}></div>
      {toggleDetail? 
      <>
        <ProductDetails product={itemShow} setNumberItem={setNumberItem} numberItem={numberItem}/>
        <div className={`${styles.closeButton}`} onClick={()=>{
          setToggleDetail(false)
          ref.current.style.display = 'none'
          }}><strong>X</strong></div>
      </> 
      : null}
      <Jumbotron />
      <div id='new' className={`${styles.containerNew} d-flex mt-5`}>
      <div className={`${styles.rightContainer}`}>
        <figure>
          <Image src='/products/sweater.jpg' alt='sweater' width={600} height={800} className={`${styles.sweater}`}></Image>
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
    <div id='catalog' className='text-end px-2 mt-3'>
      <Link href='#' className='text-end'>Go to Catalog{'>>'}</Link>
      <Slider {...settings} className={`${styles.catalog}`}>
        <section className={`${styles.slide} d-flex justify-content-around align-items-end`}>
          {products.map(product =>(
            <>
              <article className={`${styles.items}`} key={product._id} onClick={()=>detailHandler(product,toggleDetail)}>
                <figure><Image src={product.image} alt='items' width={140} height={140}/></figure>
                <figcaption>{product.productName}</figcaption>
                <p>Rp {product.price}</p>
              </article>
            </>
          ))}
        </section>
        <section className={`${styles.slide} d-flex justify-content-around align-items-end`}>
          <article className={`${styles.items}`}>
            <figure><Image src='/products/grey.svg' alt='items' width={140} height={140}/></figure>
            <figcaption>Valvata</figcaption>
            <p>Rp.300.000</p>
          </article>
          <article className={`${styles.items}`}>
            <figure><Image src='/products/grey.svg' alt='items' width={140} height={140}/></figure>
            <figcaption>Valvata</figcaption>
            <p>Rp.300.000</p>
          </article>
          <article className={`${styles.items}`}>
            <figure><Image src='/products/grey.svg' alt='items' width={140} height={140}/></figure>
            <figcaption>Valvata</figcaption>
            <p>Rp.300.000</p>
          </article>
          <article className={`${styles.items}`}>
            <figure><Image src='/products/grey.svg' alt='items' width={140} height={140}/></figure>
            <figcaption>Valvata</figcaption>
            <p>Rp.300.000</p>
          </article>
        </section>
        <section className={`${styles.slide} d-flex justify-content-around align-items-end`}>
        <article className={`${styles.items}`}>
            <figure><Image src='/products/grey.svg' alt='items' width={140} height={140}/></figure>
            <figcaption>Valvata</figcaption>
            <p>Rp.300.000</p>
          </article>
          <article className={`${styles.items}`}>
            <figure><Image src='/products/grey.svg' alt='items' width={140} height={140}/></figure>
            <figcaption>Valvata</figcaption>
            <p>Rp.300.000</p>
          </article>
          <article className={`${styles.items}`}>
            <figure><Image src='/products/grey.svg' alt='items' width={140} height={140}/></figure>
            <figcaption>Valvata</figcaption>
            <p>Rp.300.000</p>
          </article>
          <article className={`${styles.items}`}>
            <figure><Image src='/products/grey.svg' alt='items' width={140} height={140}/></figure>
            <figcaption>Valvata</figcaption>
            <p>Rp.300.000</p>
          </article>
        </section>
      </Slider>
    </div>
      <Footer />
    </>
  )
}

export const getServerSideProps =async()=>{
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
// const ShowDetail = ({product}) =>{
//   return(
//     <Detail product={product}/>
//   )
// }
function ProductDetails({product,setNumberItem,numberItem}) {
    
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
                    <div className={`${styles.orderButton} text-center` } onClick={()=>setNumberItem(numberItem+1)}>Order Now</div>
                </article>
            </section>
        </section>
    </section>
  )
}
