import React from 'react'
import styles from '../styles/footer.module.css'
export default function Footer() {
  return (
    <footer className={`${styles.footer} d-flex justify-content-between mt-4`}>
        <article className={styles.col}>
            <p>VISIT OUR</p>
            <h5>SITE</h5>
            <h6>JL.LOREM IPSUM,MOJOKERTO</h6>
        </article>
        <article className={styles.col}>
            <p>REGULAR</p>
            <h5>HOURS</h5>
            <h6>Mon - Sat | 10 - 6 • Sun | 12 - 5</h6>
        </article>
        <article className={styles.col}>
            <p>CALL US</p>
            <h5>PHONE NUMBER</h5>
            <h6>08xxxxxxxxx</h6>
        </article>
    </footer>
  )
}
