import isFunction from "./isFunction";
import isFunctionComponent from "./isFunctionComponent";
import mountNativeElement from "./mountNativeElement";

export default function mountComponent(virtualDOM, container) {
  let nextVirtualDOM = null

  // 判断组件是类组件还是函数组件
  if (isFunctionComponent(virtualDOM)) {
    nextVirtualDOM = buildFunctionComponent(virtualDOM)
    console.log('1111111')
    console.log(nextVirtualDOM)
  }

  if (isFunction(nextVirtualDOM)) {
    mountComponent(nextVirtualDOM, container)
  } else {
    mountNativeElement(nextVirtualDOM, container)
  }
}

function buildFunctionComponent (virtualDOM) {
  return virtualDOM.type(virtualDOM.props || {})
}