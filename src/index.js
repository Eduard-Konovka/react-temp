import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import App1and2 from './App1and2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';
import App6c from './App6c';
import App6 from './App6';
import App7 from './App7';
import App8 from './App8';
import App9 from './App9';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App1and2 />
      <App3 />
      <App4 />
      <App5 />
      <App6c />
      <App6 />
      <App7 />
      <App8 />
      <App9 />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
