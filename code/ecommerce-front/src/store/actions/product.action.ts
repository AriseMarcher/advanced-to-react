import { Product } from "../../models/product"

export const GET_PRODUCT = "GET_PRODUCT"
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS"

// sortBy： createAt sold
export interface GetProductAction {
  type: typeof GET_PRODUCT
  sortBy: string
  order: string
  limit: number
}

export interface GetProductSuccessAction {
  type: typeof GET_PRODUCT_SUCCESS
  payload: Product[],
  sortBy: string
}

export const getProduct = (
  sortBy: string,
  order: string = "desc",
  limit: number = 5
): GetProductAction => ({
  type: GET_PRODUCT,
  sortBy,
  order,
  limit
})

export const getProductSuccess = (
  payload: Product[],
  sortBy: string
): GetProductSuccessAction => ({
  type: GET_PRODUCT_SUCCESS,
  payload,
  sortBy
})

export type ProductUnionType = GetProductAction | GetProductSuccessAction
