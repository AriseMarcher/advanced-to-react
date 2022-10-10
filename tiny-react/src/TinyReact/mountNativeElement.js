import createDomElement from "./createDOMElement"
import unmountNode from "./unmountNode"

export default function mountNativeElement(virtualDOM, container, oldDOM) {
  let newElement = createDomElement(virtualDOM)

  // 将转换之后的DOM对象放置在页面中
  if (oldDOM) {
    container.insertBefore(newElement, oldDOM)
  } else {
    // 将转换之后的DOM对象放置在页面中
    container.appendChild(newElement)
  }

  // 判断旧的DOM对象是否存在 如果存在 删除
  if (oldDOM) {
    unmountNode(oldDOM)
  }

  let component = virtualDOM.component

  if (component) {
    component.setDOM(newElement)
  }
}