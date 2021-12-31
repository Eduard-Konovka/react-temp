import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksReducer';

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
