import React from 'react'
import { useSelector } from 'react-redux'
import Layout from './Layout'

const Shop = () => {
  const state = useSelector(state => state)
  console.log(state)
  return (
    <Layout>Shop</Layout>
  )
}

export default Shop
