import React, { Children } from 'react';
import Layout from './layout';
import styles from '../styles/productDetail.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
export default function LayoutDetail({children,id}) {
  // Render your component using the `products` prop
  // console.log('kasmakmska')
  // console.log(id)
  return (
    <Layout>
      <section className={`${styles.container} d-flex`}>
        {children}
      </section>
    </Layout>
  );
}

