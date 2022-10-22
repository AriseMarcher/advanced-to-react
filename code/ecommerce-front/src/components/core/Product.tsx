import { Row, Col } from 'antd'
import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from './Layout'

const Product = () => {
  const {productId} = useParams<{productId: string}>()

  return (
    <Layout title='商品名称' subTitle='商品描述'>
      <Row gutter={36}>
        <Col span="18">
        {productId}
        </Col>
        <Col span="6">right</Col>
      </Row>
    </Layout>
  )
}

export default Product