import {React,useState} from 'react'
import Image from 'next/image'
import Layout from '@/layout/layoutDashboard'
import Content from '../../../../components/addProduct'
export default function Index() {
  return (
    <Layout page='dashboard' focus={3}>
        <Content />
    </Layout>
  )
}
