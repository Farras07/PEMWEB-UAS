import React from 'react'
import Layout from './layout'
import styles from '../styles/colLayout.module.css'
import Link from 'next/link'
export default function ColLayout({children, page}) {
  return (
        <Layout page='product'>
            <section className={`${styles.container}`}>
                <section className={`${styles.productSection} d-flex flex-column justify-content-center`}>
                    <div className={`${styles.trailLink}`}>
                        <p><strong><Link href='/'>Home</Link>{'  >  '}<Link href='/catalog'>Catalog</Link>{'  >  '}<Link href={`/catalog/${page}`}>{page}</Link></strong></p>
                    </div>
                    <div className={`${styles.title} d-flex justify-content-center`}>
                        <h3>PRODUCT</h3>
                    </div>
                    <article className={`${styles.productContainer} d-flex flex-wrap justify-content-around`}>
                        {children}
                    </article>

                </section>
                
            </section>
        </Layout>
  )
}
