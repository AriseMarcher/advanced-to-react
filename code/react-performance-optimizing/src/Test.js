import { useEffect } from "react";

function Test() {
  useEffect(() => {
    let timer = setInterval(() => {
      console.log('定时器执行中')
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  return <div>Test</div>
}

export default Test;