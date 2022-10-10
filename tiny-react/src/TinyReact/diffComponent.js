import mountElement from "./mountElement"

export default function diffComponent(
  virtualDOM,
  oldComponent,
  oldDOM,
  container
) {
  if (isSameComponent(virtualDOM, oldComponent)) {
    // 同一个组件 做组件更新操作
    console.log('同一个组件')
  } else {
    // 不是同一个组件
    console.log('不是同一个组件')
    mountElement(virtualDOM, container, oldDOM)
  }
}

// 判断是否是同一个组件
function isSameComponent (virtualDOM, oldComponent) {
  return oldComponent && virtualDOM.type === oldComponent.constructor
}
