import React from 'react'
import Content from '../../../components/editProducts'
import LayoutDashboard from '@/layout/layoutDashboard'
export default function ProductId({product}) {
  return (
    <LayoutDashboard page='dashboard' focus={3}>
        <Content data={product}/>
    </LayoutDashboard>
  )
}
export const getServerSideProps = async (ctx) => {
  const id = ctx.params.productId;

  try {
    const res = await fetch(`http://localhost:3000/api/product/${id}`, {
      method: 'GET',
    });
    const data = await res.json();

    return {
      props: {
        product: data,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}
