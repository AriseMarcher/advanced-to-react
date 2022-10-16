import { useEffect, useState, useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)
  let timer = useRef();
  useEffect(() => {
    // 会触发组件重新渲染 不能直接把timer设置成Null
    timer.current = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
  }, [])
  const stopCount = () => {
    console.log(timer)
    clearInterval(timer.current)
  }

  return <div>
    {count}
    <button onClick={stopCount}>Stop increment</button>
  </div>
}

export default App;
