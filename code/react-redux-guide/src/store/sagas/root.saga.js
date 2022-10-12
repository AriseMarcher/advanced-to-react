import { all } from 'redux-saga/effects'
import counterSaga from './counter.saga'
import modalSaga from './modal.saga'

// eslint-disable-next-line require-yield
export default function* rootSaga () {
  yield all([
    counterSaga(),
    modalSaga(),
  ])
}
