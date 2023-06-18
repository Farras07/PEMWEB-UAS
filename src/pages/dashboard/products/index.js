import React from 'react'
import Layout from '@/layout/layoutDashboard'
import Content from '../../../components/productsContent'

import LayoutDashboard from '@/layout/layoutDashboard'
export default function Index({products}) {
  console.log(products)
  return (
    <LayoutDashboard page='dashboard' focus={3}>
      <Content data={products}/>
    </LayoutDashboard>
  )
}
export const getServerSideProps = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/product`, {
      method: 'GET',
    });
    const data = await res.json();

    return {
      props: {
        products: data,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}

