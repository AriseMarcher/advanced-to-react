import { takeEvery, put } from 'redux-saga/effects'
import {
  addProductToCart,
  addProductToLocalCart,
  deleteProductFromCart,
  deleteProductFromLocalCart,
  loadCarts,
  saveCarts,
} from '../actions/cart.actions'
import axios from 'axios'

// 将商品添加到购物车中
function* handleAddCartToCart (action) {
  const { data } = yield axios.post('http://localhost:3005/cart/add', { gid: action.payload })
  yield put(addProductToLocalCart(data))
}

// 向服务器端发送请求 获取购物车列表数据
function* handleLoadCarts () {
  const { data } = yield axios.get('http://localhost:3005/cart')
  yield put(saveCarts(data))
}

function* handleDeleteProductFromCart (action) {
  const { data } = yield axios.delete('http://localhost:3005/cart/delete', {
    params: {
      cid: action.payload
    }
  })
  yield put(deleteProductFromLocalCart(data.index))
}

export default function* cartSaga () {
  // 将商品添加到购物车中
  yield takeEvery(addProductToCart, handleAddCartToCart)
  // 向服务器端发送请求 获取购物车列表数据
  yield takeEvery(loadCarts, handleLoadCarts)
  // 向服务器端发送请求我需要删除哪一个商品
  yield takeEvery(deleteProductFromCart, handleDeleteProductFromCart)
}
