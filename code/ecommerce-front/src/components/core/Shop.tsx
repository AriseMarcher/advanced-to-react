import { Button, Col, Empty, Row } from 'antd'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterProduct } from '../../store/actions/product.action'
import { AppState } from '../../store/reducers'
import { ProductState } from '../../store/reducers/product.reducer'
import Checkbox from './Checkbox'
import Layout from './Layout'
import ProductItem from './ProductItem'
import RadioBox from './RadioBox'

const Shop = () => {
  const dispatch = useDispatch()
  const [skip, setSkip] = useState<number>(0)
  const product = useSelector<AppState, ProductState>(state => state.product)
  const [myFilters, setMyFilters] = useState<{
    category: string[], price: number[]
  }>({
    category: [],
    price: []
  })

  useEffect(() => {
    setSkip(0)
  }, [myFilters])

  useEffect(() => {
    dispatch(filterProduct({filters: myFilters, skip}))
  }, [myFilters, skip])

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

  const productDOM = () => (
    <Row gutter={[16,16]}>
      {
        product.filter.result.data.map(item => (
          <Col span="6" key={`createdAt_${item._id}`}>
            <ProductItem product={item}></ProductItem>
          </Col>
        ))
      }
    </Row>
  )

  const loadMoreButton = () => (
    <Row>
      {
        product.filter.result.size >= 4 && <Button onClick={loadMore}>加载更多</Button>
      }
    </Row>
  )
  const loadMore = () => {
    setSkip(skip => skip + 4)
  }

  const noData = () => {
    return <Row>
      { product.filter.result.size < 4 && <Empty></Empty> }
    </Row>
  }

  return (
    <Layout title='商城' subTitle='挑选你喜欢的商品'>
      <Row>
        <Col span="4">{filterDOM()}</Col>
        <Col span="20">
          {productDOM()}
          {loadMoreButton()}
          {noData()}
        </Col>
      </Row>
    </Layout>
  )
}

export default Shop
