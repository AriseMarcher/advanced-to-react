import { createStore, applyMiddleware } from 'redux'
import RootReducer from './reducers/root.reducer'
import thunk from 'redux-thunk'
// import logger from './middleware/logger'
// import test from './middleware/test'
// import thunk from './middleware/thunk'
import createSagaMiddleware from 'redux-saga'
import counterSage from './sagas/counter.saga'

// 创建 sagaMiddleware
const sagaMiddleware = createSagaMiddleware()


export const store = createStore(RootReducer, applyMiddleware(sagaMiddleware))

// 启动 counterSaga
sagaMiddleware.run(counterSage)
