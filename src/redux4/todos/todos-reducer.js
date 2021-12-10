import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosError,
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
  changeFilter,
} from './todos-actions';

const loading = createReducer(false, {
  [fetchTodosRequest]: () => true,
  [fetchTodosSuccess]: () => false,
  [fetchTodosError]: () => false,
  [addTodoRequest]: () => true,
  [addTodoSuccess]: () => false,
  [addTodoError]: () => false,
  [deleteTodoRequest]: () => true,
  [deleteTodoSuccess]: () => false,
  [deleteTodoError]: () => false,
  [toggleCompletedRequest]: () => true,
  [toggleCompletedSuccess]: () => false,
  [toggleCompletedError]: () => false,
});

const items = createReducer([], {
  [fetchTodosSuccess]: (_, { payload }) => payload,
  [addTodoSuccess]: (state, { payload }) => [...state, payload],
  [deleteTodoSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [toggleCompletedSuccess]: (state, { payload }) =>
    state.map(todo => (todo.id === payload.id ? payload : todo)),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [fetchTodosError]: error => console.log(error),
  [addTodoError]: error => console.log(error),
  [deleteTodoError]: error => console.log(error),
  [toggleCompletedError]: error => console.log(error),
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
