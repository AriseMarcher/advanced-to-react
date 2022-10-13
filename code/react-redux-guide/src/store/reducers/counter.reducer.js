import { handleActions as createReducer } from 'redux-actions'
import { increment, decrement } from '../actions/counter.action'

const initialState = {
  count: 0
}

const handleIncrement = (state, action) => ({ count: state.count + action.payload })
const handleDecrement = (state, action) => ({ count: state.count - action.payload })

export default createReducer({
  [increment]: handleIncrement,
  [decrement]: handleDecrement,
}, initialState)
