import { DECREMENT, INCREMENT } from "../const/counter.const"

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })
