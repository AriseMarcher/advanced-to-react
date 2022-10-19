import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import createRouterReducer from './reducers'
import { createHashHistory } from 'history'
import { routerMiddleware }
 from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

export const history = createHashHistory()
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  createRouterReducer(history),
  applyMiddleware(routerMiddleware(history), sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store
