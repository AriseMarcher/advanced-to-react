import React from 'react'
import { useSelector } from 'react-redux'
import Layout from './Layout'

const Shop = () => {
  const state = useSelector(state => state)
  console.log(state)
  return (
    <Layout title='商城' subTitle='挑选你喜欢的商品'>Shop</Layout>
  )
}

export default Shop
