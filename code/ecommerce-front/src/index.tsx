import React from 'react';
import ReactDOM from "react-dom"
import App from './App';
import { API } from './config';
const root = document.getElementById('root') as HTMLElement;

console.log(API)

ReactDOM.render(
  <App />,
  root
)
