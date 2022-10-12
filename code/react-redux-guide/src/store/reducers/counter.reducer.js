import { DECREMENT, INCREMENT } from "../const/counter.const"
import { ISHIDEMODAL, ISSHOWMODAL } from "../const/modal.const";

const initialState = {
  count: 0,
  showStatus: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count -  action.payload,
      };
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
