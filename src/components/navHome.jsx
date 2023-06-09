import { React, useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/navHome.module.css';
import Link from 'next/link';

export default function NavHome({ page,length }) {
  const [itemsLength,setItemsLength]=useState(length)
  useEffect(()=>{
    setItemsLength(length)
  },[length])
  return (
    <>
      <nav className={`${styles.nav} d-flex align-items-center justify-content-between`}>
        <section className={`${styles.leftNav} d-flex`}>
            <article className={`${styles.logo}`}>
                <Image src='/icons/logo.svg' alt= 'logo' width={110} height={110}/>
            </article>
            <article className={`${styles.navListContainer} d-flex align-items-center`}>
                <ul className={`${styles.navList} d-flex justify-content-between align-items-center pt-4`}>
                    <li><Link href={`http://localhost:3000/#home`} >HOME</Link></li>
                    <li><Link href={`http://localhost:3000/#new`}>NEW ARRIVAL</Link></li>
                    <li><Link href={`http://localhost:3000/catalog`}>CATALOG</Link></li>
                </ul>
            </article>
        </section>
        <section className={`${styles.rightNav} d-flex justify-content-around`}>
            <Link href='/cart' className={`${styles.containerCart} d-flex align-items-center`}>
                <Image src='/icons/cart.svg' alt='cart' width={25} height={25} className={`${styles.cart}`}></Image>
                <div className={`${styles.itemsNumber} d-flex align-items-center justify-content-center`}>{itemsLength}</div>
            </Link>
        </section>
      </nav>
    </>
  );
}
// export const GetServerSideProps = async () => {
//   useEffect(()=>{

//   },[])
//   try {
//     const itemsNumber = JSON.parse(window.localStorage.getItem('order')).length


//     return {
//       props: {
//         product: data,
//       },
//     };
//   } catch (e) {
//     return {
//       notFound: true,
//     };
//   }
// }