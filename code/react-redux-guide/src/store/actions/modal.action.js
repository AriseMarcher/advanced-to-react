import { ISHIDEMODAL, ISSHOWMODAL } from "../const/modal.const"

export const isShow = () => ({ type: ISSHOWMODAL })
export const isHide = () => ({ type: ISHIDEMODAL })