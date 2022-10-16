import { createContext, useContext } from 'react'

const counterContext = createContext()

function App () {
  return <counterContext.Provider value={100}>
    <Foo />
  </counterContext.Provider>
}

function Foo () {
  const value = useContext(counterContext)
  return <div>Foo-{value}</div>
}

export default App;
