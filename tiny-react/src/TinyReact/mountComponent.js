import isFunction from "./isFunction";
import isFunctionComponent from "./isFunctionComponent";
import mountNativeElement from "./mountNativeElement";

export default function mountComponent(virtualDOM, container) {
  let nextVirtualDOM = null

  // 判断组件是类组件还是函数组件
  if (isFunctionComponent(virtualDOM)) {
    // 函数组件
    nextVirtualDOM = buildFunctionComponent(virtualDOM)
  } else {
    // 类组件
    nextVirtualDOM = buildClassComponent(virtualDOM)
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

function buildClassComponent (virtualDOM) {
  // 此处执行的就是构造函数 constructor
  // 子类调用父类的构造函数 父类中存储了props
  // 这样子类又继承自父类，就能通过this.props拿到父类中的属性和方法了
  const component = new virtualDOM.type(virtualDOM.props || {})
  const nextVirtualDOM = component.render()
  return nextVirtualDOM
}