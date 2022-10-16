import { useMemo, useState, memo } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [bool, setBool] = useState(true)

  const result = useMemo(() => {
    return count * 2
  }, [count])

  return <div>
    <span>{count} -- {result} -- {bool ? '真': '假'}</span>
    <button onClick={() => setCount(count + 1)}>+1</button>
    <button onClick={() => setBool(!bool)}>+1</button>
    <Foo />
  </div>
}

const Foo = memo(function Foo () {
  console.log('Foo组件重新渲染了')
  return <div>Foo组件</div>
})


export default App;
