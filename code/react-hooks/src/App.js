import { useState } from 'react'

function App () {
  // useState 返回 状态数据 设置状态数据的方法
  // 要以 set进行开头 后面加上相应的名称
  // const { count, setCount } = useState(0);
  const [ count, setCount ] = useState(() => 100)
  console.log(count)
  console.log(setCount)

  const [ person, setPerson ] = useState({ name: '张三', age: 20 })

  function handleCount () {
    setCount((count) => {
      let newCount = count + 100;
      document.title = newCount;
      return newCount
    })
  }

  return <div>
    <span>{count}{person.name}{person.age}</span>
    <button onClick={() => setCount(count + 1)}>+ 1</button>
    <button onClick={handleCount}>函数增加</button>
    <button onClick={() => setPerson({name: '李四', age: 30})}>setPerson</button>
  </div>
}

export default App;
