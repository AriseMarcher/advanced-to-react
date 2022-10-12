import { createStore } from 'redux'
import RootReducer from './reducers/root.reducer'

export const store = createStore(RootReducer)
