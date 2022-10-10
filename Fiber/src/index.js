import React, { render, Component } from "./react"

const root = document.getElementById("root")
// const jsx = (
//   <div>
//     <p>
//       Hello React
//     </p>
//     <p>Hello Fiber</p>
//   </div>
// )

class Greeting extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: "张三"
    }
  }

  render () {
    return <div>
      Hello Greeting
      {this.props.title} -- {this.state.name}

      <button onClick={() => this.setState({name: "李四"})}>
        按钮
      </button>
    </div>
  }
}

// render(jsx, root)

// setTimeout(() => {
//   console.log('1231')
//   const jsx = (
//     <div>
//       <p>Hello Fiber</p>
//     </div>
//   )
//   render(jsx, root)
// }, 2000)

render(<Greeting title="This is great" />, root)

// function FnComponent (props) {
//   return <div>
//     FnComponent
//     {props.title}
//   </div>
// }

// render(<FnComponent title="hello" />, root)
