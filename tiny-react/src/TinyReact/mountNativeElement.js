import createDomElement from "./createDOMElement"

export default function mountNativeElement(virtualDOM, container) {
  let newElement = createDomElement(virtualDOM)

  container.appendChild(newElement)
}