import { useEffect, useState } from 'react'

function App() {
  useEffect(() => {
    (async () => {
      let result = await getData()
      console.log(result)
    })()
  }, [])
  return <div>
    app work
  </div>
}

function getData() {
  return new Promise(resolve => {
    resolve({msg: 'Hello'})
  })
}


export default App;
