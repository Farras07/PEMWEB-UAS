import React from 'react'
import LayoutDashboard from '@/layout/layoutDashboard'
import Content from '../../../components/refusedOrderContent'
export default function Index({order}) {
  return (
    <LayoutDashboard page='dashboard' focus={2}>
        <Content data={order}/>
    </LayoutDashboard>

  )
}
export const getServerSideProps = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/order`, {
        method: 'GET',
      });
      const data = await res.json();
  
      return {
        props: {
          order: data,
        },
      };
    } catch (e) {
      return {
        notFound: true,
      };
    }
  }