import { useReducer } from 'react'

function App () {
  function reducer (state, action) {
    switch (action.type) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
      default:
        return state;
    }
  }

  const [ count, dispatch ] = useReducer(reducer, 0)

  return <div>
    <button onClick={() => dispatch({ type: 'decrement'})}>-1</button>
    <span>{count}</span>
    <button onClick={() => dispatch({ type: 'increment'})}>+1</button>
  </div>
}

export default App;
