import Layout from './Layout'
import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const state = useSelector(state => state)
  return (
    <Layout>Home</Layout>
  )
}

export default Home
