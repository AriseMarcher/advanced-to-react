function thunk (store) {
  // 最后一个中间件的 next 就是 dispatch这个方法
  return function (next) {
    return function (action) {
      console.log('thunk')
      next(action)
    }
  }
}
