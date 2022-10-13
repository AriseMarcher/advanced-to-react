import { combineReducers } from '@reduxjs/toolkit'
import cartReducer from './cart.reducer'
import productReducer from './product.reducer'

// { products: [], carts: [] }
export default combineReducers({
  products: productReducer,
  carts: cartReducer
})
