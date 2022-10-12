import { createStore, applyMiddleware } from 'redux'
import RootReducer from './reducers/root.reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/root.saga'

// 创建 sagaMiddleware
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(RootReducer, applyMiddleware(sagaMiddleware))

// 启动 counterSaga
sagaMiddleware.run(rootSaga)
