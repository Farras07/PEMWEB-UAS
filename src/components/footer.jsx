import React from 'react'
import styles from '../styles/footer.module.css'
export default function Footer() {
  return (
    <footer className={`${styles.footer} d-flex justify-content-between`}>
        <article className={styles.col}>
            <p>VISIT OUR</p>
            <h5>SITE</h5>
            <h6>Jl. Raya Pulorejo , Mojokerto</h6>
        </article>
        <article className={styles.col}>
            <p>REGULAR</p>
            <h5>HOURS</h5>
            <h6>Mon - Fri | 08.00 - 17.00</h6>
        </article>
        <article className={styles.col}>
            <p>CALL US</p>
            <h5>PHONE NUMBER</h5>
            <h6>+62318706369</h6>
        </article>
    </footer>
  )
}
