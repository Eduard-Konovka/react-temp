import { createAsyncThunk } from '@reduxjs/toolkit';
import * as bookShelfApi from 'services/bookshelf-api';
// import * as booksActions from './booksActions';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, { rejectWithValue }) => {
    try {
      const books = await bookShelfApi.fetchBooks();
      return books;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// Короткая запись
// export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
//   const books = await bookShelfApi.fetchBooks();
//   return books;
// });

// Вариант без createAsyncThunk
// export const fetchBooks = () => async dispatch => {
//   dispatch(booksActions.fetchBooksRequest());

//   try {
//     const books = await bookShelfApi.fetchBooks();
//     dispatch(booksActions.fetchBooksSuccess(books));
//   } catch (error) {
//     dispatch(booksActions.fetchBooksError(error));
//   }
// };
