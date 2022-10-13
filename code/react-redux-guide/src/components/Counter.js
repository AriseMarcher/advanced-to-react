import React from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as counterActions from '../store/actions/counter.action'

function Counter ({
  count,
  increment,
  decrement,
}) {
  return (
    <div>
      <button onClick={() => increment(10)}>+</button>
      <span>{count}</span>
      <button onClick={() => decrement(10)}>-</button>
    </div>
  )
}

/**
 * react-redux
 *  Provider 组件 将创建出来的Store放在一个全局组件能够拿到的地方
 *  connect 方法 订阅store 当store状态发生变化后重新渲染组件
 */


// 1. connect 方法会帮助我们订阅store 当store中的状态发生更改的时候会帮助我们重新渲染组件
// 2. connect 方法可以让我们获取store中的状态 将状态通过组件的props属性映射给组件
// 3. connect 方法可以让我们获取dispatch方法
// 4. connect 第一个参数 函数 state组件当中的状态
// 4. connect 第二个参数 返回一个对象 定义什么都会映射到props中

const mapStateToProps = state => ({
  count: state.counter.count
})

// 变更后
const mapDispatchToProps = dispatch => bindActionCreators(counterActions, dispatch)

// 更变前
// const mapDispatchToProps = dispatch => ({
//   increment () {
//     dispatch({ type: 'increment' })
//   },
//   decrement () {
//     dispatch({ type: 'decrement' })
//   }
// })

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
