import React from 'react'
import {useRouter} from 'next/router'
import Layout from '@/layout/layoutDetail'
export default function ProductDetail() {
  const router = useRouter()
  const productId = router.query.productId
  return (
    <Layout>
      <div>productDetail {productId}</div>
    </Layout>
  ) 
}
