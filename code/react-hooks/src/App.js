import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  // 组件挂载完成之后执行 组件数据更新完成之后
  // useEffect(() => {
  //   console.log('111')
  // })

  // 组件挂载完成之后执行一次 之后不会执行
  useEffect(() => {
    console.log('222')
  }, [])

  // 组件被卸载之前执行
  useEffect(() => {
    return () => {
      console.log('333')
    }
  })

  return <div className='app'>
    <span>{count}</span>
    <button onClick={() => setCount(count + 1)}>+1</button>
  </div>
}


export default App;
