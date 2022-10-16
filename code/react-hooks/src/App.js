import { useEffect, useState } from 'react'

function App() {
  
  function onScroll () {
    console.log('the page is scrolling')
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const [count, setCount] = useState(0)
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return <div>
    <span>{count}</span>
  </div>
}


export default App;
