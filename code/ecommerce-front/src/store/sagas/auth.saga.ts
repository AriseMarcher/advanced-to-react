import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'
import { API } from '../../config'
import { SIGNIN, SigninAction, signinFail, signinSuccess, SIGNUP, SignupAction, signupFail, signupSuccess, SIGNUP_SUCCESS } from '../actions/auth.action'

// 注册请求
function* handleSignup (action: SignupAction) {
  try {
    yield axios.post(`${API}/signup`, action.payload);
    yield put(signupSuccess())
  } catch (error: any) {
    yield put(signupFail(error.response.data.error));
  }
}

// 登录请求
function* handleSignin (action: SigninAction): any {
  try {
    let response = yield axios.post(`${API}/signin`, action.payload)
    localStorage.setItem('jwt', JSON.stringify(response.data))
    yield put(signinSuccess())
  } catch (error: any) {
    yield put(signinFail(error.response.data.error))
  }
}


export default function* authSaga () {
  // 注册
  yield takeEvery(SIGNUP, handleSignup)
  // 登录
  yield takeEvery(SIGNIN, handleSignin)
}