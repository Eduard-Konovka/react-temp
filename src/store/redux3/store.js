import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import counterReducer from './counter/counter-reducer';
import todosReducer from './todos/todos-reducer';

const counterPersistConfig = {
  key: 'counter',
  storage,
  blacklist: ['step'],
};

const todosPersistConfig = {
  key: 'todos',
  storage,
  blacklist: ['filter'],
};

const store = configureStore({
  reducer: {
    counter: persistReducer(counterPersistConfig, counterReducer),
    todos: persistReducer(todosPersistConfig, todosReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

const store3 = { store, persistor };
export default store3;
