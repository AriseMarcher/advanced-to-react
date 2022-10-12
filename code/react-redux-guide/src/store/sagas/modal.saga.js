import { takeEvery, put, delay } from 'redux-saga/effects'
import { isShow } from '../actions/modal.action'
import { SHOWMODALASYNC } from '../const/modal.const'

function* showModal_async_fn(action) {
  yield delay(2000)
  yield put(isShow())
}

export default function* modalSaga () {
  yield takeEvery(SHOWMODALASYNC, showModal_async_fn)
}
