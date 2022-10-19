import { AuthUnionType, RESET_SIGNUP, SIGNUP, SignupFailAction, SIGNUP_FAIL, SIGNUP_SUCCESS } from '../actions/auth.action'

export interface AuthState {
  signup: {
    loaded: boolean,
    success: boolean,
    message: string
  }
}

const intialState = {
  signup: {
    loaded: false,
    success: false,
    message: ''
  }
}

export default function authReducer (
  state = intialState,
  action: AuthUnionType
) {
  console.log(action)
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        signup: {
          loaded: false,
          success: false
        }
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signup: {
          loaded: true,
          success: true
        }
      }
    case SIGNUP_FAIL:
      return {
        ...state,
        signup: {
          loaded: true,
          success: false,
          message: (action as SignupFailAction).message
        }
      }
    case RESET_SIGNUP:
      return {
        ...state,
        signup: {
          loaded: false,
          success: false,
          message: ''
        }
      }
    default:
      return state
  }
}