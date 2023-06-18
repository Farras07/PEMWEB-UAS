import React from 'react'
import LayoutDashboard from '@/layout/layoutDashboard'
import Content from '../../../components/orderDetail'

export default function OrderDetail({order}) {
    return (
        <LayoutDashboard page='dashboard' focus={2}>
            <Content data={order}/>
        </LayoutDashboard>
    )
}
export const getServerSideProps = async (ctx) => {
    const id = ctx.params.orderID;
  
    try {
      const res = await fetch(`http://localhost:3000/api/order/${id}`, {
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