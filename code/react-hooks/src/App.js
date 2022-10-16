import { useRef, useState, memo, useCallback } from 'react'

function App() {
  const box = useRef()

  return <div ref={box}>
    <button onClick={() => console.log(box)}>获取DIV</button>
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
