import React, {useEffect} from 'react'
import { Typography } from 'antd'
import { CartItem } from '../../helpers/cart'

const { Title } = Typography;

interface Props {
  cart: CartItem[],
  setTotalPrice: (price: number) => void
}

const TotalPrice:React.FC<Props> = ({cart, setTotalPrice}) => {
  const getTotalPrice = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue += nextValue.price * nextValue.count
    }, 0).toFixed(2)
  }

  useEffect(() => {
    setTotalPrice(parseFloat(getTotalPrice()))
  }, [cart])

  return (
    <Title level={5}>商品总价：{getTotalPrice()}</Title>
  )
}

export default TotalPrice