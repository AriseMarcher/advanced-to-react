import { createDomElement } from "../../DOM"
import { createReactInstance } from "../CreateReactInstance"

const createStateNode = fiber => {
  // 普通节点
  if (fiber.tag === "host_component") {
    return createDomElement(fiber)
  } else if (fiber.tag === "class_component") {
    return createReactInstance(fiber)
  } else {
    return createReactInstance(fiber)
  }
}

export default createStateNode
