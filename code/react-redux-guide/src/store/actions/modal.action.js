import { ISHIDEMODAL, ISSHOWMODAL, SHOWMODALASYNC } from "../const/modal.const"

export const isShow = () => ({ type: ISSHOWMODAL })
export const isHide = () => ({ type: ISHIDEMODAL })

// export const isShow_async = () => dispatch => {
//   setTimeout(() => {
//     dispatch(isShow())
//   }, 2000)
// }

export const show_async = () => ({ type: SHOWMODALASYNC })
