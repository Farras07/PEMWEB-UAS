import React, { Children,useState } from 'react';
import Layout from './layout';
import styles from '../styles/productDetail.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
export default function LayoutDetail({children,id}) {
  return (
    <Layout>
      <section className={`${styles.container} d-flex`}>
        {children}
      </section>
    </Layout>
  );
}

