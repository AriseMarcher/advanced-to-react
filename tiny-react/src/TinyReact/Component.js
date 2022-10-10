import diff from "./diff"

export default class Component {
  constructor (props) {
    this.props = props
  }

  setState (state) {
    // this.state 原有的state状态
    this.state = Object.assign({}, this.state, state)
    // 重新触发 render 方法
    // 获取最新的要渲染的 virtualDOM 对象
    let virtualDOM = this.render()

    // 获取旧的 virtualDOM 对象 进行对比
    let oldDOM = this.getDOM()
    console.log(oldDOM)

    // 获取容器
    let container = oldDOM.parentNode
    diff(virtualDOM, container, oldDOM)
  }

  setDOM (dom) {
    this._dom = dom
  }

  getDOM () {
    return this._dom
  }
}