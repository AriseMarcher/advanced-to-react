import { takeEvery, put } from 'redux-saga/effects'
import {
  addProductToCart,
  addProductToLocalCart,
  changeLocalProductNumber,
  changeServiceProductNumber,
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

// 向服务器端发送请求我需要删除哪一个商品
function* handleDeleteProductFromCart (action) {
  const { data } = yield axios.delete('http://localhost:3005/cart/delete', {
    params: {
      cid: action.payload
    }
  })
  yield put(deleteProductFromLocalCart(data.index))
}

// 向服务器段发送请求 告诉服务器端需要将那个商品的数量修改成什么
function* handleChangeServiceProductNumber (action) {
  const { data } = yield axios.put('http://localhost:3005/cart', action.payload)
  yield put(changeLocalProductNumber(data))
}

export default function* cartSaga () {
  // 将商品添加到购物车中
  yield takeEvery(addProductToCart, handleAddCartToCart)
  // 向服务器端发送请求 获取购物车列表数据
  yield takeEvery(loadCarts, handleLoadCarts)
  // 向服务器端发送请求我需要删除哪一个商品
  yield takeEvery(deleteProductFromCart, handleDeleteProductFromCart)
  // 向服务器段发送请求 告诉服务器端需要将那个商品的数量修改成什么
  yield takeEvery(changeServiceProductNumber, handleChangeServiceProductNumber)
}
