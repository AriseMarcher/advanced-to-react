import createDomElement from "./createDOMElement"

export default function mountNativeElement(virtualDOM, container) {
  let newElement = createDomElement(virtualDOM)

  // 将转换之后的DOM对象放置在页面中
  container.appendChild(newElement)

  let component = virtualDOM.component

  if (component) {
    component.setDOM(newElement)
  }
}