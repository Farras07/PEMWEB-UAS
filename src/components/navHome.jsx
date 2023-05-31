import React from 'react'
import Image from 'next/image'
import styles from '../styles/navHome.module.css'
import Link from 'next/link'
export default function NavHome() {
  return (
    <nav className={`${styles.nav} d-flex align-items-center justify-content-between`}>
        <section className={`${styles.leftNav} d-flex`}>
            <article className={`${styles.logo}`}>
                <Image src='./logo.svg' alt= 'logo' width={110} height={110}/>
            </article>
            <article className={`${styles.navListContainer} d-flex align-items-center`}>
                <ul className={`${styles.navList} d-flex justify-content-between align-items-center pt-4`}>
                    <li><Link href='#home' >HOME</Link></li>
                    <li><Link href='#new'>NEW ARRIVAL</Link></li>
                    <li><Link href='#catalog'>CATALOG</Link></li>
                </ul>
            </article>
        </section>
        <section className={`${styles.rightNav} d-flex justify-content-around`}>
            <Image src='./search.svg' alt='search' width={25} height={25} className={`${styles.search}`}></Image>
            <Image src='./cart.svg' alt='cart' width={25} height={25} className={`${styles.cart}`}></Image>
        </section>
    </nav>
  )
}
