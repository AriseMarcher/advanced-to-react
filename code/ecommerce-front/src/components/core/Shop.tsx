import { Col, Row } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import Checkbox from './Checkbox'
import Layout from './Layout'
import RadioBox from './RadioBox'

const Shop = () => {
  const state = useSelector(state => state)
  console.log(state)

  const filterDOM = () => (
    <>
      <Checkbox></Checkbox>
      <RadioBox></RadioBox>
    </>
  )

  return (
    <Layout title='商城' subTitle='挑选你喜欢的商品'>
      <Row>
        <Col span="4">{filterDOM()}</Col>
        <Col span="20">right</Col>
      </Row>
    </Layout>
  )
}

export default Shop
