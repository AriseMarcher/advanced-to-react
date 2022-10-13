// store getState dispatch这两个方法
function logger (store) {
  // next 下一个中间件函数
  return function (next) {
    // 这才是中间件函数 外面两个函数是用来接受参数的
    return function (action) {
      console.log('logger')
      next(action)
    }
  }
}
