import Layout from './Layout'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Search from './Search'
import { Typography, Col, Row } from 'antd'
import ProductItem from './ProductItem'
import { getProduct } from '../../store/actions/product.action'

const { Title, Paragraph } = Typography;

const Home = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProduct('createdAt'))
    dispatch(getProduct('sold'))
  }, [])

  return (
    <Layout title="首页" subTitle='尽情驰骋吧'>
      <Search></Search>
      <Title level={5}>最新上架</Title>

      <Row gutter={[16, 16]}>
        <Col span="6">
          <ProductItem></ProductItem>
        </Col>
      </Row>

      <Title level={5}>最受欢迎</Title>

      <Row gutter={[16, 16]}>
        <Col span="6">
          <ProductItem></ProductItem>
        </Col>
      </Row>
    </Layout>
  )
}

export default Home
