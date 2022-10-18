import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import ReactDOM from "react-dom"
import { Provider } from 'react-redux';
import Routes from './Routes';
import store from './store/index'
import { history } from './store'

const root = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
    </ConnectedRouter>
  </Provider>,
  root
)
