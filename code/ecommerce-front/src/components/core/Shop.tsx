import { Col, Row } from 'antd'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Checkbox from './Checkbox'
import Layout from './Layout'
import RadioBox from './RadioBox'

const Shop = () => {
  const [myFilters, setMyFilters] = useState<{
    category: string[], price: number[]
  }>({
    category: [],
    price: []
  })

  useEffect(() => {
    console.log(myFilters)
  }, [myFilters])

  const filterDOM = () => (
    <>
      <Checkbox
        handleFilter={(filters: string[]) => {
          setMyFilters({...myFilters, category: filters})
        }} />
      <RadioBox
        handleFilter={(filters: number[]) => {
          setMyFilters({...myFilters, price: filters})
        }}
      />
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
