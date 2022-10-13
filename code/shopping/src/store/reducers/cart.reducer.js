import { handleActions as createReducer } from 'redux-actions'
import { addProductToLocalCart, saveCarts } from '../actions/cart.actions'

const initialState = []

// 将商品添加到本地的购物车数据中
const handleAddProductToLocalCart = (state, action) => {
  // 1. 要添加的商品没有在购物车中 直接添加
  // 2. 要添加的商品已经在购物车中 将商品的数量加一

  // 将原有的购物车数据拷贝一份
  const newState = JSON.parse(JSON.stringify(state))
  const newId = action.payload.id
  const product = newState.find(product => product.id === newId)
  if (product) {
    product.count = Number(product.count) + 1
  } else {
    newState.push(action.payload)
  }
  return newState
}

// 将服务器端返回的购物车数据同步到本地的购物车中
const handleSaveCarts = (state, action) => action.payload

export default createReducer({
  // 将商品添加到本地的购物车数据中
  [addProductToLocalCart]: handleAddProductToLocalCart,
  // 将服务器端返回的购物车数据同步到本地的购物车中
  [saveCarts]: handleSaveCarts
}, initialState)
