import { takeEvery, put } from 'redux-saga/effects'
import {
  addProductToCart,
  addProductToLocalCart,
  loadCarts,
  saveCarts,
} from '../actions/cart.actions'
import axios from 'axios'

// 将商品添加到购物车中
function* handleAddCartToCart (action) {
  const { data } = yield axios.post('http://localhost:3005/cart/add', { gid: action.payload })
  yield put(addProductToLocalCart(data))
}

function* handleLoadCarts () {
  const { data } = yield axios.get('http://localhost:3005/cart')
  console.log(data)
  yield put(saveCarts(data))
}

export default function* cartSaga () {
  // 将商品添加到购物车中
  yield takeEvery(addProductToCart, handleAddCartToCart)
  // 向服务器端发送请求 获取购物车列表数据
  yield takeEvery(loadCarts, handleLoadCarts)
}
