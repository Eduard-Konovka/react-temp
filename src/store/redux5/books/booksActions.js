// При использовании createAsyncThunk этот файл не нужен!
import { createAction } from '@reduxjs/toolkit';

export const fetchBooksRequest = createAction('books/fetchBooksRequest');
export const fetchBooksSuccess = createAction('books/fetchBooksSuccess');
export const fetchBooksError = createAction('books/fetchBooksError');
