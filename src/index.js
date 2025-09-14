import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Todo from './functionalComonent/Todo';
import { Provider } from 'react-redux';
import Store from './redux/store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <Todo/>
    </Provider>
  </React.StrictMode>
);
