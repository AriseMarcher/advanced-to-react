import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './components/core/Home'
import Shop from './components/core/Shop'

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        {/* <Routes></Routes> */}
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} exact />
      </Switch>
    </HashRouter>
  )
}

export default Routes