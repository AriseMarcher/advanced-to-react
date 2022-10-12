import { DECREMENT, INCREMENT } from "../const/counter.const"

const initialState = {
  count: 0
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  console.log(action)
  switch(action.type) {
    case INCREMENT:
      return {
        count: state.count + action.payload
      }
    case DECREMENT:
      return {
        count: state.count -  action.payload
      };
    default: 
      return state
  }
}
