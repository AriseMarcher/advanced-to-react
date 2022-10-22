import { Button, Image, Input } from 'antd'
import React, { ChangeEvent, useState } from 'react'
import { API } from '../../config'
import { CartItem, updateItem } from '../../helpers/cart'

interface Props {
  product: CartItem,
  setCart: (arg: CartItem[]) => void
}

export const CartItemFc: React.FC<Props> = ({ product, setCart }) => {
  const [count, setCount] = useState(product.count)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let count = parseInt(event.target.value)
    setCart(updateItem(product._id, count))
    setCount(count)
  }
  return (
    <tr className='ant-table-row'>
      <td className='ant-table-cell'>
        <Image width={120} src={`${API}/product/photo/${product._id}`} />
      </td>
      <td className='ant-table-cell'>{product.name}</td>
      <td className='ant-table-cell'>{product.price}</td>
      <td className='ant-table-cell'>{product.category.name}</td>
      <td className='ant-table-cell'>
        <Input type='number' value={product.count} onChange={handleChange} />
      </td>
      <td className='ant-table-cell'>
        <Button danger type="primary">删除</Button>
      </td>
    </tr>
  )
}

export default CartItemFc