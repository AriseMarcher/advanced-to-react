import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 通过Provider组件 将 store 放在了全局的组件可以够到的地方 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
