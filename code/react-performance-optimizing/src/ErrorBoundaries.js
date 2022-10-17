import { Component } from 'react'
import App from './App'

export default class ErrorBoundaries extends Component {
  constructor() {
    super()
    this.state = {
      hasError: false
    }
  }
  componentDidCatch (error) {
    // 应用程序发生错误了
    console.log('componentDidCatch')
  }
  static getDerivedStateFromError() {
    console.log('getDerivedStateFromError')
    return {
      hasError: true
    }
  }
  render() {
    if (this.state.hasError) {
      return <div>错误</div>
    }
    return (
      <App />
    );
  }
}