import Layout from './Layout'
import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const state = useSelector(state => state)
  return (
    <Layout title="首页" subTitle='尽情驰骋吧'>Home</Layout>
  )
}

export default Home
