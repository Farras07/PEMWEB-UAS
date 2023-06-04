import {React,useRef} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../layout/layout'
import connect from '../../db/db'
import Product from '../../model/product'
import styles from '../../styles/catalog.module.css'
export default function Index() {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const linkHover =(ref)=>{
        ref.current.style.transition='all .5s'
        ref.current.style.opacity='1'
    }
    const mouseLeft=(ref)=>{
        ref.current.style.transition = 'all .5s'
        ref.current.style.opacity = '0'
    }
  return (
    <div>
        <Layout page='catalog'>
            <section className={`${styles.collectionContainer} d-flex flex-column align-items-center justify-content-center`}>
                <div className={`${styles.title} d-flex justify-content-center`}>
                    <h3>COLLECTION</h3>
                </div>
                <section className={`${styles.collectionList} d-flex justify-content-center`}>
                    <article className={`${styles.summer} ${styles.col} d-flex align-items-end`}>
                        <Link href={`http://localhost:3000/catalog/summer`} className={`${styles.link} d-flex align-items-end justify-content-between`} onMouseEnter={()=>linkHover(ref1)} onMouseLeave={()=>mouseLeft(ref1)}>
                            <h6>SUMMER</h6>
                            <Image ref={ref1} src='/icons/arrow.svg' alt='arrow' width={60} height={30} className={`${styles.arrow}`}/>
                        </Link>
                    </article>
                    <article className={`${styles.winter} ${styles.col} d-flex align-items-end`}>
                        <Link href={`http://localhost:3000/catalog/winter`} className={`${styles.link} d-flex align-items-end justify-content-between`} onMouseEnter={()=>linkHover(ref2)} onMouseLeave={()=>mouseLeft(ref2)}>
                            <h6>WINTER</h6>
                            <Image ref={ref2} src='/icons/arrow.svg' alt='arrow' width={60} height={30} className={`${styles.arrow}`}/>
                        </Link>
                    </article>
                </section>
            </section>
        </Layout>
    </div>
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