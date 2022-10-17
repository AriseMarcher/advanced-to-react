import { Component } from 'react'
class App extends Component {
  constructor () {
    super()
    this.state = {
      inputValue: ''
    }
  }

  setInputValue = e => {
    this.setState({ inputValue: e.target.value })
  }

  render () {
    return (
      <input
        value={this.state.inputValue}
        onChange={this.setInputValue}
      />
    )
  }
}

export default App;