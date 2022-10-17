import { lazy, Suspense } from 'react';
// react-router-dom'是 5 的版本
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

// Suspense 需要和 lazy配合使用
const Home = lazy(() => import(/* webpackChunkName "Home" */'./Home'))
const List = lazy(() => import(/* webpackChunkName "List" */'./List'))

function App() {
  return <BrowserRouter>
    <Link to="/">首页</Link>
    <Link to="/list">列表页面</Link>

    <Switch>
      <Suspense fallback={<div>loading...</div>}>
        <Route path="/" component={Home} exact />
        <Route patc="/list" component={List} />
      </Suspense>
    </Switch>
  </BrowserRouter>
}

export default App;