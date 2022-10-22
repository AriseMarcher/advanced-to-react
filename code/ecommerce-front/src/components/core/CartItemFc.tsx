import { Button, Image, Input } from 'antd'
import React from 'react'
import { API } from '../../config'
import { CartItem } from '../../helpers/cart'

interface Props {
  product: CartItem
}

export const CartItemFc: React.FC<Props> = ({ product }) => {
  return (
    <tr className='ant-table-row'>
      <td className='ant-table-cell'>
        <Image width={120} src={`${API}/product/photo/${product._id}`} />
      </td>
      <td className='ant-table-cell'>{product.name}</td>
      <td className='ant-table-cell'>{product.price}</td>
      <td className='ant-table-cell'>{product.category.name}</td>
      <td className='ant-table-cell'>
        <Input type='number' value={product.count} />
      </td>
      <td className='ant-table-cell'>
        <Button danger type="primary">删除</Button>
      </td>
    </tr>
  )
}

export default CartItemFc