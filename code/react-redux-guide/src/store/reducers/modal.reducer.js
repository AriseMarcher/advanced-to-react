import { ISSHOWMODAL, ISHIDEMODAL } from "../const/modal.const"

const initialState = {
  showStatus: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch(action.type) {
    case ISSHOWMODAL:
      return {
        ...state,
        showStatus: true,
      }
    case ISHIDEMODAL:
      return {
        ...state,
        showStatus: false,
      }
    default: 
      return state
  }
}