/**
 * createStore(reducer, preloadedState, enhancer)
 * {
 *    getState, dispatch, subscribe
 * }
 */
function createStore (reducer, preloadedState) {
  // 约束 reducer 参数类型
  if (typeof reducer !== 'function') {
    throw new Error('reducer必须是函数')
  }

  // store对象中存储的状态
  var currentState = preloadedState
  // 存放订阅者函数
  var currentListeners = []

  // 获取状态
  function getState () {
    return currentState
  }

  // 触发action
  function dispatch (action) {
    // 判断 action 是否是对象
    if (!isPlainObject(action)) {
      throw new Error('action必须是对象')
    }
    // 判断对象中 是否具有 type 属性
    if (typeof action.type === 'undefined') {
      throw new Error('action对象中必须要有type属性')
    }

    currentState = reducer(currentState, action)
    // 循环数组 调用订阅者
    for (var i = 0; i < currentListeners.length; i++) {
      // 获取订阅者
      var listener = currentListeners[i]
      // 调用订阅者
      listener()
    }
  }

  // 订阅状态
  function subscribe (listener) {
    currentListeners.push(listener)
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}

// 判断 obj 参数是否是对象
function isPlainObject (obj) {
  // 排除基本数据类型和null
  if (typeof obj !== 'object' || obj === null) return false
  // 区分数组和对象
  var proto = obj
  while (Object.getPrototypeOf(proto) != null) {
    proto = Object.getPrototypeOf(proto)
  }
  return Object.getPrototypeOf(obj) === proto
}

console.log(isPlainObject([]))
