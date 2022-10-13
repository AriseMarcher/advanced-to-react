import { createAction } from 'redux-actions'

// 1. 向服务器端发送请求 告诉服务器我们要将哪个商品添加到购物车中
export const addProductToCart = createAction('addProductToCart')

// 2. 将商品添加到本地的购物车数据中
export const addProductToLocalCart = createAction('addProductToLocalCart')

// 3. 向服务器端发送请求 获取购物车列表数据
export const loadCarts = createAction('loadCarts')

// 4. 将服务器端返回的购物车数据同步到本地的购物车中
export const saveCarts = createAction('saveCarts')

// 5. 向服务器端发送请求我需要删除哪一个商品
export const deleteProductFromCart = createAction('deleteProductFromCart')

// 6. 删除本地购物车中的商品
export const deleteProductFromLocalCart = createAction('deleteProductFromLocalCart')
