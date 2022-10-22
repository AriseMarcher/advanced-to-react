/**
 * 将商品添加到购物车
 */
import { Product } from "../store/models/product";

export interface CartItem extends Product {
  count: number
}

export const addItem = (item: Product, next: () => void) => {
  let cart: CartItem[] = []
  if (typeof window !== "undefined") {
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart')!)
    }
    cart.push({
      ...item,
      count: 1
    })
  }
  cart = Array.from(new Set(cart.map(item => item._id))).map((item) => {
    return cart.find(product => product._id === item)
  }) as CartItem[]
  localStorage.setItem('cart', JSON.stringify(cart))

  next()
}

/**
 * 获取本地购物车数据
 */
export const getCart = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      return JSON.parse(localStorage.getItem("cart")!) as CartItem[]
    }
  }
  return []
}

/**
 * 更改购物车中商品的数量
 */
export const updateItem = (productId: string, count: number) => {
  let cart: CartItem[] = []
  if (typeof window !== "undefined") {
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart')!)
    }
    cart.forEach((item, index) => {
      if (item._id === productId) {
        cart[index].count = count
      }
    })
  }
  localStorage.setItem('cart', JSON.stringify(cart))
  return cart
}