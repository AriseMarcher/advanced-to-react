import React from "react"
import { connect } from 'react-redux'

function Counter ({count, increment, decrement}) {
  return (
    <div>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  )
}

// 1. connect 方法会帮助我们订阅store 当store中的状态发生更改的时候会帮助我们重新渲染组件
// 2. connect 方法可以让我们获取store中的状态 将状态通过组件的props属性映射给组件
// 3. connect 方法可以让我们获取dispatch方法
// 4. connect 第一个参数 函数 state组件当中的状态
// 4. connect 第二个参数 返回一个对象 定义什么都会映射到props中

const mapStateToProps = state => ({
  count: state.count,
  a: "b"
})

const mapDispatchToProps = dispatch => ({
  increment () {
    dispatch({ type: 'increment' })
  },
  decrement () {
    dispatch({ type: 'decrement' })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
