import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/jumbotron.module.css'
export default function Jumbotron() {
  return (
    <section id='home' className={`${styles.jumbotronContainer} d-flex justify-content-center align-items-center`}>
        <article className={styles.tagline}>
            <h1 className={`${styles.h1}`}>MAKE YOUR TRUE FIT</h1>
            <h3 className={`${styles.h3}`}>Look Free and Atractive</h3>
        </article>
        <article className={`${styles.shop}`}>
            <h4>Summer Collection</h4>
            <Link href='#'className={`${styles.shopButton}`}>Shop Now!</Link>
        </article>
    </section>
  )
}
