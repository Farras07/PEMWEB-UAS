import {React,useState} from 'react'
import styles from '../styles/orderButton.module.css'
import Link from 'next/link'
export default function OrderButton({foc}) {
  return (
    <div className={`${styles.conButton}`}>
        <Link href='/dashboard/orders' className={`${styles.linkMenu1} ${(foc === 1 ? styles.linkMenuFocus1 : '')}`}>Incoming Orders</Link>
        <Link href='/dashboard/onProgressOrders' className={`${styles.linkMenu} ${(foc === 2 ? styles.linkMenuFocus2 : '')}`}>On Progress Orders</Link>
        <Link href='/dashboard/completedOrders' className={`${styles.linkMenu2} ${(foc === 3 ? styles.linkMenuFocus3 : '')}`}>Completed Orders</Link>
        <Link href='/dashboard/refusedOrder' className={`${styles.linkMenu3} ${(foc === 4 ? styles.linkMenuFocus4 : '')}`}>Refused Orders</Link>
    </div>
  )
}
