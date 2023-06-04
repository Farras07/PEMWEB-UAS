import React from 'react'
import Layout from './layout'
import styles from '../styles/productDetail.module.css'
import Image from 'next/image'
export default function LayoutDetail() {
  return (
    <Layout>
      <section className={`${styles.container} d-flex`}>
        <article className={`${styles.leftPanel}`}>
          <figure>
            <Image src={`#`} width={200} height={350} alt={`item`}></Image>
          </figure>
          <div className={`${styles.color}`}>

          </div>
        </article>
        <article>
          
        </article>
      </section>
    </Layout>
  )
}
