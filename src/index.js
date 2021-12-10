import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store';
import store2 from './redux2/store';
import store3 from './redux3/store';
import store4 from './redux4/store';
import App1and2 from './App1and2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';
import App6c from './App6c';
import App6 from './App6';
import App7 from './App7';
import App8 from './App8';
import App9 from './App9';
import App10 from './App10';
import App10a from './App10a';
import App11 from './App11';
import App12 from './App12';
import App12a from './App12a';
import App13 from './App13';
import Spinner from './components/Spinner/Spinner';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

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
      <App10 />
      <App10a />
    </BrowserRouter>
    <Provider store={store}>
      <BrowserRouter>
        <App11 />
      </BrowserRouter>
    </Provider>
    <Provider store={store2.store}>
      <PersistGate
        loading={<Spinner size={200} />}
        persistor={store2.persistor}
      >
        <BrowserRouter>
          <App12 />
        </BrowserRouter>
      </PersistGate>
    </Provider>
    <Provider store={store3.store}>
      <PersistGate
        loading={<Spinner size={200} />}
        persistor={store3.persistor}
      >
        <BrowserRouter>
          <App12a />
        </BrowserRouter>
      </PersistGate>
    </Provider>
    <Provider store={store4}>
      {/* <PersistGate
        loading={<Spinner size={200} />}
        persistor={store4.persistor}
      > */}
      <BrowserRouter>
        <App13 />
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
