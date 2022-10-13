import { takeEvery, put } from 'redux-saga/effects'
import { addProductToCart, addProductToLocalCart } from '../actions/cart.actions'
import axios from 'axios'

// 将商品添加到购物车中
function* handleAddCartToCart (action) {
  const { data } = yield axios.post('http://localhost:3005/cart/add', { gid: action.payload })
  yield put(addProductToLocalCart(data))
}

export default function* cartSaga () {
  // 将商品添加到购物车中
  yield takeEvery(addProductToCart, handleAddCartToCart)
}
