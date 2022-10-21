import { Product } from "../../models/product";
import { GET_PRODUCT, GET_PRODUCT_SUCCESS, ProductUnionType } from "../actions/product.action";

export interface ProductState {
  createAt: {
    loaded: boolean,
    success: boolean,
    products: Product[]
  },
  sold: {
    loaded: boolean,
    success: boolean,
    products: Product[]
  }
}

const initialState: ProductState = {
  createAt: {
    loaded: false,
    success: false,
    products: []
  },
  sold: {
    loaded: false,
    success: false,
    products: []
  }
}

export default function productReducer (
  state = initialState,
  action: ProductUnionType
) {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        [action.sortBy]: {
          loaded: false,
          success: false,
          products: []
        }
      }
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        [action.sortBy]: {
          loaded: true,
          success: true,
          products: action.payload
        }
      }
    default:
      return state
  }
}
