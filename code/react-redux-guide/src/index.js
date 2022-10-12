import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux'
import Counter from './components/Counter';
import { Provider } from 'react-redux'

/**
 * react-redux
 *  Provider 组件 将创建出来的Store放在一个全局组件能够拿到的地方
 *  connect 方法 订阅store 当store状态发生变化后重新渲染组件
 */

const initialState = {
  count: 0
}
function reducer (state = initialState, action) {
  switch(action.type) {
    case 'increment':
      return {
        count: state.count + 1
      }
    case 'decrement':
      return {
        count: state.count - 1
      };
    default: 
      return state
  }
}

const store = createStore(reducer)

// const increment = { type: 'increment' }
// const decrement = { type: 'decrement' }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 通过Provider组件 将 store 放在了全局的组件可以够到的地方 */}
    <Provider store={store}>
      <Counter />
    </Provider>
  </React.StrictMode>
);
