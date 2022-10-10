import React, { render, Component } from "./react"

const root = document.getElementById("root")
const jsx = (
  <div>
    <p>
      Hello React
    </p>
    <p>Hello Fiber</p>
  </div>
)

class Greeting extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <div>Hello Greeting {this.props.title}</div>
  }
}

render(jsx, root)

setTimeout(() => {
  console.log('1231')
  const jsx = (
    <div>
      <p>Hello Fiber</p>
    </div>
  )
  render(jsx, root)
}, 2000)

// render(<Greeting title="This is great" />, root)

// function FnComponent (props) {
//   return <div>
//     FnComponent
//     {props.title}
//   </div>
// }

// render(<FnComponent title="hello" />, root)
