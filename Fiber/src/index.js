import React, { render, Component } from "./react"

const root = document.getElementById("root")
const jsx = (
  <div>
    <p>
      Hello React
      <p>Hello React Child</p>
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

// render(jsx, root)

render(<Greeting title="This is great" />, root)

// function FnComponent (props) {
//   return <div>
//     FnComponent
//     {props.title}
//   </div>
// }

// render(<FnComponent title="hello" />, root)
