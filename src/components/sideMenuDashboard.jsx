import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/sideMenu.module.css'
import Link from 'next/link'

export default function SideMenuDashboard({ focus }) {
  const foc = focus
  return (

    <aside className={`${styles.container}`}>
      <ul className={`${styles.ul} d-flex`}>
        <li>
          <Link href="/dashboard" className={`${styles.linkMenu} ${(foc === 1 ? styles.linkMenuFocus1 : '')} d-flex`}>
            <Image className={styles.iconButton} alt='logo' src='/dashboardHome.svg' width={23} height={23} /><span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/orders" className={`${styles.linkMenu} ${(foc === 2 ? styles.linkMenuFocus2 : '')} d-flex`} ><span>Orders</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/products" className={`${styles.linkMenu} ${(foc === 3 ? styles.linkMenuFocus3 : '')} d-flex`}><span>Products</span>
          </Link>
        </li>
      </ul>
    </aside>


  )
}
