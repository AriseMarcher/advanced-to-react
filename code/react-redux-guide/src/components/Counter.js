import React from "react"
import { connect } from 'react-redux'

function Counter ({count, dispatch}) {
  console.log(count)
  console.log(dispatch)
  return (
    <div>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  )
}

// 1. connect 方法会帮助我们订阅store 当store中的状态发生更改的时候会帮助我们重新渲染组件
// 2. connect 方法可以让我们获取store中的状态 将状态通过组件的props属性映射给组件
// 3. connect 方法可以让我们获取dispatch方法
// 4. connect 第一个参数 函数 state组件当中的状态

const mapStateToProps = state => ({
  count: state.count,
  a: "b"
})

export default connect(mapStateToProps)(Counter);
