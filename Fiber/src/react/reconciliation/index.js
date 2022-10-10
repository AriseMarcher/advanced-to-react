import { arrified, CreateTaskQueue, createStateNode, getTag } from "../Misc"

const taskQueue = CreateTaskQueue()
let subTask = null

let pendingCommit = null

const commitAllWork = fiber => {
  fiber.effects.forEach(item => {
    if (item.effectTag === "placement") {
      // 当前要追加的子节点
      let fiber = item
      // 当前要追加的子节点的父级
      let parentFiber = item.parent
      /**
       * 找到普通节点父级 排除组件父级
       * 因为组件父级是不能直接追加真实DOM节点的
       */
      while (
        parentFiber.tag === "class_component" ||
        parentFiber.tag === "function_component"
      ) {
        parentFiber = parentFiber.parent
      }
      // 如果子节点是普通节点 找到父级 将子节点追加到父级中
      if (fiber.tag === "host_component") {
        parentFiber.stateNode.appendChild(item.stateNode)
      }
    }
  })
}

const getFirstTask = () => {
  // 从任务队列中获取任务
  const task = taskQueue.pop()
  // 返回最外层节点的 fiber 对象
  return {
    props: task.props,
    stateNode: task.dom,
    tag: "host_root",
    effects: [],
    child: null
  }
}

const reconcileChildren = (fiber, children) => {
  /**
   * children 可能是对象 也可能是数组
   * 将 children 转换成数组
   */
  const arrifiedChildren = arrified(children)
  let index = 0
  let numberOfElement = arrifiedChildren.length
  let element = null
  let newFiber = null
  let prevFiber = null

  while (index < numberOfElement) {
    element = arrifiedChildren[index]

    newFiber = {
      type: element.type,
      props: element.props,
      tag: getTag(element),
      effects: [],
      effectTag: "placement",
      parent: fiber
    }

    newFiber.stateNode = createStateNode(newFiber)

    console.log(newFiber)

    if (index === 0) {
      fiber.child = newFiber
    } else {
      prevFiber.sibling = newFiber
    }
    prevFiber = newFiber

    index++
  }
}

const executeTask = fiber => {
  // 构建子级fiber对象
  if (fiber.tag === "class_component") {
    reconcileChildren(fiber, fiber.stateNode.render())
  } else if (fiber.tag === "function_component") {
    reconcileChildren(fiber, fiber.stateNode(fiber.props))
  } else {
    reconcileChildren(fiber, fiber.props.children)
  }
  if (fiber.child) {
    return fiber.child
  }

  let currentExecutelyFiber = fiber
  // 构建其他节点
  while (currentExecutelyFiber.parent) {
    currentExecutelyFiber.parent.effects = currentExecutelyFiber.parent.effects.concat(
      currentExecutelyFiber.effects.concat([currentExecutelyFiber])
    )
    if (currentExecutelyFiber.sibling) {
      return currentExecutelyFiber.sibling
    }
    currentExecutelyFiber = currentExecutelyFiber.parent
  }

  pendingCommit = currentExecutelyFiber
}

const workLoop = deadline => {
  // 如果子任务不存在 就去获取子任务
  if (!subTask) {
    subTask = getFirstTask()
  }

  /**
   * 如果任务存在并且浏览器有空余时间就调用
   * executeTask 方法执行任务 接受任务 返回新的任务
   */

  while (subTask && deadline.timeRemaining() > 1) {
    subTask = executeTask(subTask)
  }

  if (pendingCommit) {
    commitAllWork(pendingCommit)
  }
}

const performTask = deadline => {
  // 执行任务
  workLoop(deadline)

  /**
   * 判断任务是否存在
   * 判断任务队列中是否还有任务没有执行
   * 再一次告诉浏览器在空闲的时间执行任务
   */
  // if (subTask || taskQueue.isEmpty) {
  //   requestIdleCallback(performTask)
  // }
}

export const render = (element, dom) => {
  /**
   * 1. 向任务队列中添加任务
   * 2. 指定在浏览器空闲时执行任务
   */

  /**
   * 任务就是通过 vdom 对象 构建 fiber 对象
   */
  taskQueue.push({
    dom,
    props: {
      children: element
    }
  })
  /**
   * 指定在浏览器空闲的时间执行任务
   */
  requestIdleCallback(performTask)
}
