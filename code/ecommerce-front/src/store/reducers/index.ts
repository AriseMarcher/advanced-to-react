import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import testReducer from './test.reducer'
import { History } from 'history'

const createRouterReducer = (history: History) =>
 combineReducers({
  router: connectRouter(history),
  test: testReducer,
})

export default createRouterReducer
