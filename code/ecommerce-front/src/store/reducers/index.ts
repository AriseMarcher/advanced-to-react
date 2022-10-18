import { connectRouter, RouterState } from 'connected-react-router'
import { combineReducers } from 'redux'
import testReducer from './test.reducer'
import { History } from 'history'

export interface AppState {
  router: RouterState
}

const createRouterReducer = (history: History) =>
 combineReducers({
  router: connectRouter(history),
  test: testReducer,
})

export default createRouterReducer
