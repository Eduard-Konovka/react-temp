import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store1 from 'store/redux1/store';
import store2 from 'store/redux2/store';
import store3 from 'store/redux3/store';
import store4 from 'store/redux4/store';
import store5 from 'store/redux5/store';
import store6 from 'store/redux6/store';
import { store7, persistor7 } from 'store/redux7/store';
import App1and2 from 'App/App1and2';
import App3 from 'App/App3';
import App4 from 'App/App4';
import App5 from 'App/App5';
import App6c from 'App/App6c';
import App6 from 'App/App6';
import App7 from 'App/App7';
import App8 from 'App/App8';
import App9 from 'App/App9';
import App10 from 'App/App10';
import App10a from 'App/App10a';
import App11 from 'App/App11';
import App12 from 'App/App12';
import App12a from 'App/App12a';
import App13 from 'App/App13';
import App13a from 'App/App13a';
import App13b from 'App/App13b';
import App15and16 from 'App/App15and16';
import Spinner from 'components/Spinner';
import 'index.css';
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

    <Provider store={store1}>
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
      <BrowserRouter>
        <App13 />
      </BrowserRouter>
    </Provider>

    <BrowserRouter>
      <Provider store={store5}>
        <App13a />
      </Provider>
    </BrowserRouter>

    <Provider store={store6}>
      <BrowserRouter>
        <App13b />
      </BrowserRouter>
    </Provider>

    <Provider store={store7}>
      <PersistGate loading={<Spinner size={200} />} persistor={persistor7}>
        <BrowserRouter>
          <App15and16 />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
