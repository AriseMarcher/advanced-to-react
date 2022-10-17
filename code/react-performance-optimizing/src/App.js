import { lazy, Suspense, useState } from 'react'
import { BrowserRouter, Switch, Link } from 'react-router-dom'

function App() {
  let LazyComponent = null
  const [flag, setFlag] = useState(true)

  if (flag) {
    LazyComponent = lazy(() => import(/* webpackChunkName "Home" */'./Home'))
  } else {
    LazyComponent = lazy(() => import(/* webpackChunkName "List" */'./List'))
  }

  return <BrowserRouter>
    <Link to="/">首页</Link>
    <Link to="/list">列表页面</Link>
    <button onClick={() => setFlag(flag => !flag)}>简单改变页面</button>


    <Switch>
      <Suspense fallback={<div>loading...</div>}>
        <LazyComponent />
      </Suspense>
    </Switch>
  </BrowserRouter>
}

export default App;