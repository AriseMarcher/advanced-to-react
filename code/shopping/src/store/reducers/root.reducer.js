import { combineReducers } from '@reduxjs/toolkit'
import productReducer from './product.reducer'

// { products: [] }
export default combineReducers({
  products: productReducer
})
