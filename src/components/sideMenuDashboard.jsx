import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/sideMenu.module.css'
import Link from 'next/link'

export default function SideMenuDashboard() {
  return (

    <aside className={`${styles.container}`}>
      <ul className={`${styles.ul} d-flex`}>
        <li>
          <Link href="/dashboard" className={`${styles.linkMenu} d-flex`}>
            <Image className={styles.iconButton} alt='logo' src='/dashboardHome.svg' width={23} height={23} /><span>Dashboard</span>
          </Link>
        </li>
      </ul>
    </aside>

  )
}
