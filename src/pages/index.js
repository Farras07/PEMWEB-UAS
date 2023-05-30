import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Nav from '../components/navHome'
import Jumbotron from '@/components/jumbotron'
import Slider from 'react-slick';
import footer from '../components/footer'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../components/footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Nav />
      <Jumbotron />
      <NewArrival />
      <Catalog />
      <Footer />
    </>
  )
}

const Catalog =()=>{
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return(
    <div className='text-end px-2 mt-3'>
      <Link href='#' className='text-end'>Go to Catalog{'>>'}</Link>
      <Slider {...settings} className={`${styles.catalog}`}>
        <section className={`${styles.slide} d-flex justify-content-around align-items-end`}>
          <article className={`${styles.items}`}>
            <figure><Image src='/grey.svg' alt='items' width={140} height={140}/></figure>
            <figcaption>Valvata</figcaption>
            <p>Rp.300.000</p>
          </article>
          <article className={`${styles.items}`}>
            <figure><Image src='/grey.svg' alt='items' width={140} height={140}/></figure>
            <figcaption>Valvata</figcaption>
            <p>Rp.300.000</p>
          </article>
          <article className={`${styles.items}`}>
            <figure><Image src='/grey.svg' alt='items' width={140} height={140}/></figure>
            <figcaption>Valvata</figcaption>
            <p>Rp.300.000</p>
          </article>
          <article className={`${styles.items}`}>
            <figure><Image src='/grey.svg' alt='items' width={140} height={140}/></figure>
            <figcaption>Valvata</figcaption>
            <p>Rp.300.000</p>
          </article>
        </section>
        <section className={`${styles.slide} d-flex justify-content-around align-items-end`}>
          <article className={`${styles.items}`}>
            <figure><Image src='/grey.svg' alt='items' width={140} height={140}/></figure>
            <figcaption>Valvata</figcaption>
            <p>Rp.300.000</p>
          </article>
          <article className={`${styles.items}`}>
            <figure><Image src='/grey.svg' alt='items' width={140} height={140}/></figure>
            <figcaption>Valvata</figcaption>
            <p>Rp.300.000</p>
          </article>
          <article className={`${styles.items}`}>
            <figure><Image src='/grey.svg' alt='items' width={140} height={140}/></figure>
            <figcaption>Valvata</figcaption>
            <p>Rp.300.000</p>
          </article>
          <article className={`${styles.items}`}>
            <figure><Image src='/grey.svg' alt='items' width={140} height={140}/></figure>
            <figcaption>Valvata</figcaption>
            <p>Rp.300.000</p>
          </article>
        </section>
        <section className={`${styles.slide} d-flex justify-content-around align-items-end`}>
        <article className={`${styles.items}`}>
            <figure><Image src='/grey.svg' alt='items' width={140} height={140}/></figure>
            <figcaption>Valvata</figcaption>
            <p>Rp.300.000</p>
          </article>
          <article className={`${styles.items}`}>
            <figure><Image src='/grey.svg' alt='items' width={140} height={140}/></figure>
            <figcaption>Valvata</figcaption>
            <p>Rp.300.000</p>
          </article>
          <article className={`${styles.items}`}>
            <figure><Image src='/grey.svg' alt='items' width={140} height={140}/></figure>
            <figcaption>Valvata</figcaption>
            <p>Rp.300.000</p>
          </article>
          <article className={`${styles.items}`}>
            <figure><Image src='/grey.svg' alt='items' width={140} height={140}/></figure>
            <figcaption>Valvata</figcaption>
            <p>Rp.300.000</p>
          </article>
        </section>
      </Slider>
    
    </div>
  )
}
const NewArrival=()=>{
  return(
    <div className={`${styles.containerNew} d-flex mt-5`}>
      <div className={`${styles.rightContainer}`}>
        <figure>
          <Image src='/sweater.jpg' alt='sweater' width={600} height={800} className={`${styles.sweater}`}></Image>
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
  )
}