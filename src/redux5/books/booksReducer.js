import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks } from './booksOperations';

const isLoading = createReducer(false, {
  [fetchBooks.pending]: () => true,
  [fetchBooks.fulfilled]: () => false,
  [fetchBooks.rejected]: () => false,
});

const entities = createReducer([], {
  [fetchBooks.fulfilled]: (_, action) => action.payload,
});

const error = createReducer(null, {
  [fetchBooks.rejected]: (_, action) => action.payload,
  [fetchBooks.pending]: () => null,
});

export default combineReducers({
  isLoading,
  entities,
  error,
});

// Без задействования IMMER
// const booksSlice = createSlice({
//   name: 'books',
//   initialState: { isLoading: false, entities: [], error: null },
//   extraReducers: {
//     [fetchBooks.pending]: (state, { payload }) => ({
//       ...state,
//       isLoading: payload,
//       error: null,
//     }),
//     [fetchBooks.fulfilled]: (state, { payload }) => ({
//       ...state,
//       isLoading: false,
//       entities: payload,
//     }),
//     [fetchBooks.rejected]: (state, { payload }) => ({
//       ...state,
//       isLoading: false,
//       error: payload,
//     }),
//   },
// });

// 🔥 ИСПОЛЬЗУЕТ IMMER ДЛЯ МУТАЦИИ КОПИИ СОСТОЯНИЯ
// const booksSlice = createSlice({
//   name: 'books',
//   initialState: { entities: [], isLoading: false, error: null },
//   extraReducers: {
//     [fetchBooks.pending]: state => {
//       state.isLoading = true;
//       state.error = null;
//     },
//     [fetchBooks.fulfilled]: (state, { payload }) => {
//       state.isLoading = false;
//       state.entities = payload;
//     },
//     [fetchBooks.rejected]: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = payload;
//     },
//   },
// });

// export default booksSlice.reducer;
