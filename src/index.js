import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1and2 from './App1and2';
import App3 from './App3';
import App4 from './App4';

ReactDOM.render(
  <React.StrictMode>
    <App1and2 />
    <App3 />
    <App4 />
  </React.StrictMode>,
  document.getElementById('root'),
);
