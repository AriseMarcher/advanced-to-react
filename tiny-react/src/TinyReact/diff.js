import createDomElement from './createDOMElement'
import diffComponent from './diffComponent'
import mountElement from './mountElement'
import unmountNode from './unmountNode'
import updateNodeElement from './updateNodeElement'
import updateTextNode from './updateTextNode'

export default function diff (virtualDOM, container, oldDOM) {
  const oldVirtualDOM = oldDOM && oldDOM._virtualDOM
  const oldComponent = oldVirtualDOM && oldVirtualDOM.component

  // 判断 oldDOM 是否存在
  if (!oldDOM) {
    mountElement(virtualDOM, container)
  } else if (typeof virtualDOM.type === 'function') {
    // 组件对比
    diffComponent(virtualDOM, oldComponent, oldDOM, container)
  } else if (
    virtualDOM.type !== oldVirtualDOM.type &&
    typeof virtualDOM !== 'function'
  ) {
    // 使用virtualDOM创建方法
    
    const newElement = createDomElement(virtualDOM)
    oldDOM.parentNode.replaceChild(newElement, oldDOM)
  }  else if (
    oldVirtualDOM &&
    virtualDOM.type === oldVirtualDOM.type
    ) {
    if (virtualDOM.type === "text") {
      // 更新内容
      updateTextNode(virtualDOM, oldVirtualDOM, oldDOM)
    } else {
      // 更新元素属性
      updateNodeElement(oldDOM, virtualDOM, oldVirtualDOM)
    }

    // 递归子节点进行对比
    virtualDOM.children.forEach((child, i) => {
      diff(child, oldDOM, oldDOM.childNodes[i])
    })

    // 删除节点
    // 获取旧节点
    let oldChildNodes = oldDOM.childNodes
    // 判断旧节点的数量
    if (oldChildNodes.length > virtualDOM.children.length) {
      // 有节点需要被删除
      for (
        let i = oldChildNodes.length - 1;
        i > virtualDOM.children.length - 1;
        i--
      ) {
        unmountNode(oldChildNodes[i])
      }
    }
  }
}
