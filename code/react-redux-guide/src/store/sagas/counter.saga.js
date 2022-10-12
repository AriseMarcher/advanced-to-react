import { takeEvery, put, delay } from 'redux-saga/effects'
import { increment, increment_async } from '../actions/counter.actions'
import { INCREMENT_ASYNC } from '../const/counter.const'

// takeEvery 接受 action
// put 触发 action

function* increment_async_fn () {
  // 延迟 2s 不能用 setTimeout
  yield delay(2000)

  // 点击加10
  yield put(increment(10))
}

export default function *  counterSaga() {
  // 接受 action 的类型字符串
  yield takeEvery(INCREMENT_ASYNC, increment_async_fn)
}