import { Product } from "../../models/product";
import { GET_PRODUCT, GET_PRODUCT_SUCCESS, ProductUnionType } from "../actions/product.action";

export interface ProductState {
  createdAt: {
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
  createdAt: {
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
          ...state[action.sortBy === "createdAt" ? "createdAt" : "sold"],
          loaded: false,
          success: false,
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
