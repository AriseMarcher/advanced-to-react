import { createDomElement } from "../../DOM"

const createStateNode = fiber => {
  // 普通节点
  if (fiber.tag === "host_component") {
    return createDomElement(fiber)
  }
}

export default createStateNode
