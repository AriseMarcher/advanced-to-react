// eslint-disable-next-line import/no-anonymous-default-export
export default ({dispatch}) => next => action => {
  // 1. 当前这个中间件函数不关心你想执行什么样的异步操作 只关心你执行的是不是异步操作
  // 2. 如果你执行的是异步操作 你在触发action的时候 传递一个函数过来
  //    如果你执行的是同步操作 就传递 action 对象
  // 3. 异步操作代码要写在你传递进来的函数中
  // 4. 当前这个中间件函数在调用你传进来的函数时 要将dispatch方法传递过去
  //    异步方法调用完成后通过调用dispatch方法触发另外一个action。
  //    再传递一个参数，然后再把这个参数传递给reducer
  if (typeof action === 'function') {
    return action(dispatch)
  }
  next(action)
}