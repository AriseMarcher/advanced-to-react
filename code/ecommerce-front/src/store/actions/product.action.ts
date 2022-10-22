import { Product } from "../../models/product"

export const GET_PRODUCT = "GET_PRODUCT"
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS"

// sortBy： createdAt sold
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
  limit: number = 10
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

// 搜索商品
export const SEARCH_PRODUCT = "SEARCH_PRODUCT"
export const SEARCH_PRODUCT_SUCCESS = "SEARCH_PRODUCT_SUCCESS"

export interface SearchProductAction {
  type: typeof SEARCH_PRODUCT,
  payload: {
    category: string, // 分类
    search: string, // 关键字
  }
}

export interface SearchProductSuccessAction {
  type: typeof SEARCH_PRODUCT_SUCCESS,
  products: Product[]
}

export const searchProduct = (
  payload: {
    category: string,
    search: string
  }
):SearchProductAction => ({
  type: SEARCH_PRODUCT,
  payload
})

export const searchProductSuccess = (products: Product[]): SearchProductSuccessAction => ({
  type: SEARCH_PRODUCT_SUCCESS,
  products
})

/**
 * 和筛选相关的action
 */

export const FILTER_PRODUCT = "FILTER_PRODUCT"
export const FILTER_PRODUCT_SUCCESS = "FILTER_PRODUCT_SUCCESS"

export interface FilterPayload {
  order?: string,
  sortBy?: string,
  limit?: number,
  skip: number,
  filters?: {
    category: string[],
    price: number[]
  }
}
export interface FilterProductAction {
  type: typeof FILTER_PRODUCT,
  payload: FilterPayload
}

export interface FilterProductSuccessAction {
  type: typeof FILTER_PRODUCT_SUCCESS,
  payload: {
    size: number,
    data: Product[]
  },
  skip: number
}

export const filterProduct = (payload: FilterPayload): FilterProductAction => ({
  type: FILTER_PRODUCT,
  payload
})
export const filterProductSuccess = (
  payload: {
    size: number,
    data: Product[]
  },
  skip: number
): FilterProductSuccessAction => ({
  type: FILTER_PRODUCT_SUCCESS,
  payload,
  skip
})

export type ProductUnionType =
  | GetProductAction
  | GetProductSuccessAction
  | SearchProductAction
  | SearchProductSuccessAction
  | FilterProductAction
  | FilterProductSuccessAction
