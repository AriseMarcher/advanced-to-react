import { handleActions as createReducer } from 'redux-actions'
import { addProductToLocalCart, changeLocalProductNumber, deleteProductFromLocalCart, saveCarts } from '../actions/cart.actions'

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

// 删除本地购物车中的商品
const handleDeleteProductFromLocalCart = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  // 需要删除商品的索引
  const newIndex = action.payload
  newState.splice(newIndex, 1)
  return newState
}

// 更新本地购物车中商品的数量
const handleChangeLocalProductNumber = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  const product = newState.find(product => product.id === action.payload.id)
  product.count = action.payload.count
  return newState
}

export default createReducer({
  // 将商品添加到本地的购物车数据中
  [addProductToLocalCart]: handleAddProductToLocalCart,
  // 将服务器端返回的购物车数据同步到本地的购物车中
  [saveCarts]: handleSaveCarts,
  // 删除本地购物车中的商品
  [deleteProductFromLocalCart]: handleDeleteProductFromLocalCart,
  // 更新本地购物车中商品的数量
  [changeLocalProductNumber]: handleChangeLocalProductNumber
}, initialState)
