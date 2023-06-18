import React from 'react'
import Layout from '@/layout/layoutDashboard'
import Content from '../../components/dashboardContent'

export default function index({order}) {
  return (
    <>
        <Layout page='dashboard' focus={1}>
          <Content data={order}/>
        </Layout> 
    </>
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

