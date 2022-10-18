import React from 'react';
import ReactDOM from "react-dom"
import { API } from './config';
import Routes from './Routes';
const root = document.getElementById('root') as HTMLElement;

console.log(API)

ReactDOM.render(
  <Routes />,
  root
)
