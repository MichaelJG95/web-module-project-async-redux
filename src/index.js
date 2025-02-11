import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <h1>Cat Fact's App</h1>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
