import _ from 'lodash'

function App () {
  console.log(_.chunk(['a', 'b', 'c', 'd'], 2))
  return <div>App</div>
}

export default App;