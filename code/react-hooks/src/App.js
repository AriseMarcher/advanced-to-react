import { useState, memo, useCallback } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const resetCount = useCallback(() => setCount(0), [setCount])

  return <div>
    <span>{count}</span>
    <button onClick={() => setCount(count + 1)}>+1</button>
    <Foo resetCount={resetCount} />
  </div>
}

const Foo = memo(function Foo (props) {
  console.log('Foo组件重新渲染了')
  return <div>
    Foo组件
    <button onClick={props.resetCount}>resetCount</button>
  </div>
})


export default App;
