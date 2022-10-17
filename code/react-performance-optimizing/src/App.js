import { Component } from 'react'
class App extends Component {
  handleClick = () => console.log(this)

  render () {
    // throw new Error('some error')
    return <button onClick={this.handleClick}>按钮</button>
  }
}

export default App;