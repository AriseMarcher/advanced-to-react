import { takeEvery, put } from 'redux-saga/effects'
import { loadProducts, saveProducts } from '../actions/product.actions'
import axios from 'axios'

function* handleLoadProducts () {
  // 请求加载商品列表数据
  const { data } = yield axios.get('http://localhost:3005/goods')
  // 将商品列表数据保存到本地的store对象中
  yield put(saveProducts(data))
}

// eslint-disable-next-line require-yield
export default function* productSaga () {
  // 加载商品列表的数据
  yield takeEvery(loadProducts, handleLoadProducts)
}