import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import todosReducer from './todos/todos-reducer';

const myMiddleware = store => next => action => {
  console.log('Это прослойка -', action);
  next(action);
};

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(myMiddleware)
      .concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
