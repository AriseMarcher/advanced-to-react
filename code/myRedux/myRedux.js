/**
 * createStore(reducer, preloadedState, enhancer)
 * {
 *    getState, dispatch, subscribe
 * }
 */
function createStore (reducer, preloadedState, enhancer) {
  // 约束 reducer 参数类型
  if (typeof reducer !== 'function') {
    throw new Error('reducer必须是函数')
  }
  // 判断 enhancer 是否传递
  if (typeof enhancer !== 'undefined') {
    // 判断 enhancer 是否是一个函数
    if (typeof enhancer !== 'function') {
      throw new Error('enhancer必须是一个函数')
    }
    return enhancer(createStore)(reducer, preloadedState)
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
// 判断对象的当前原型对象是否和顶层原型对象相同
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

// 中间件其实是对dispatch进行增强，applyMiddleware,
// 让多个中间件函数进行组合，触发action适合让多个中间件按照顺序进行执行

function applyMiddleware(...middlewares) {
  return function (createStore) {
    return function (reducer, preloadedState) {
      // 创建 store
      var store = createStore(reducer, preloadedState)
      // 阉割版的 store
      var middlewareAPI = {
        getState: store.getState,
        dispatch: store.dispatch,
      }

      // 调用中间件的第一层函数 传递阉割版的 store 对象
      var chain = middlewares.map(middleware => middleware(middlewareAPI))
      var dispatch = compose(...chain)(store.dispatch)
      return {
        ...store,
        dispatch
      }
    }
  }
}

function compose () {
  var funcs = [...arguments]
  return function (dispatch) {
    // 由于最后一个dispatch 是去触发真正的 reducer的
    // dispatch赋值改变
    /**
     * 1. 是最开始 createStore中的 dispatch
     * 2. function (next) { // 这个 next 是 dispatch
          return function (action) {
            console.log('thunk')
            next(action)
          }
        }
    * 3 function (next) { // 这个 next 是 thunk
        // 这才是中间件函数 外面两个函数是用来接受参数的
        return function (action) {
          console.log('logger')
          next(action)
        }
      }
    * 最后一步 返回 Logger (一开始的中间件)
      然后在 applyMiddleware 中增强了 dispatch（重新改变了）方法
      最后的执行操作就是
     */
    for (var i = funcs.length -1; i >= 0; i--) {
      dispatch = funcs[i](dispatch)
    }
    return dispatch
  }
}
