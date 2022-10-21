import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { API } from "../../config";
import { Product } from "../../models/product";
import { GetProductAction, getProductSuccess, GET_PRODUCT } from "../actions/product.action";

function* handleGetProduct ({ sortBy, order, limit}: GetProductAction): any {
  let response = yield axios.get<Product[]>(`${API}/products`, {
    params: { sortBy, order, limit}
  })
  yield put(getProductSuccess(response.data, sortBy))
}

export default function* productSaga () {
  yield takeEvery(GET_PRODUCT, handleGetProduct)
}