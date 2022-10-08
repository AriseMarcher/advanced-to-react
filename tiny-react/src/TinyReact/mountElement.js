import mountNativeElement from './mountNativeElement'
import isFunction from './isFunction'
import mountComponent from './mountComponent'

export default function mountElement (virtualDOM, container) {
  // Component VS NativeElement
  if (isFunction(virtualDOM)) {
    // Component
    mountComponent(virtualDOM, container)
  } else {
    // NativeElement
    mountNativeElement(virtualDOM, container)
  }
  console.log(virtualDOM)
}
