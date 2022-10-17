import { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      person: {
        name: '张三',
        age: 20,
        job: 'waiter'
      }
    }
  }
  componentDidMount () {
    setTimeout(() => {
      console.log('123')
      this.setState({
        person: {
          ...this.state.person,
          job: 'teacher'
        }
      })
    })
  }
  shouldComponentUpdate (nextProps, nextState) {
    if (
      nextState.person.name !== this.state.person.name ||
      nextState.person.age !== this.state.person.age
    ) {
      return true
    }
    return false
  }
  render () {
    console.log('this is render')
    return <div>
      { this.state.person.name }
      { this.state.person.age }
    </div>
  }
}

export default App
 