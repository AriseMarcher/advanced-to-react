import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import { CartItem, getCart } from '../../helpers/cart'
import { Col, Row } from 'antd'
import CartItemFc from './CartItemFc'

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    setCart(getCart())
  }, [])

  const showCart = () => (
    <table style={{width: '100%'}}>
      <thead className='ant-table-thead'>
        <tr>
          <th className='ant-table-cell'>商品封面</th>
          <th className='ant-table-cell'>商品名称</th>
          <th className='ant-table-cell'>商品价格</th>
          <th className='ant-table-cell'>商品分类</th>
          <th className='ant-table-cell'>商品数量</th>
          <th className='ant-table-cell'>操作</th>
        </tr>
      </thead>
      <tbody className='ant-table-tbody'>
        {
          cart.map(item => <CartItemFc product={item} />)
        }
      </tbody>
    </table>
  )

  return (
    <Layout title="购物车" subTitle='付款吧，我就是你的了'>
      <Row gutter={16}>
        <Col span="16">{showCart()}</Col>
        <Col span="8"></Col>
      </Row>
    </Layout>
  )
}

export default Cart