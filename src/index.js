/* eslint-disable react/jsx-filename-extension */
import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { configureLogger, ConsoleTransport } from '@wdpui/common-logger';
import './index.css';
import App from './App';
import store from './redux/store';

configureLogger({
  appId: 'staff',
  transport: ConsoleTransport,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
