import React from 'react';
import ReactDOM from "react-dom"
import { Provider } from 'react-redux';
import Routes from './Routes';
import store from './store/index'

const root = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  root
)
