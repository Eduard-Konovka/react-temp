import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
  changeFilter,
} from './contacts-actions';

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [toggleCompletedRequest]: () => true,
  [toggleCompletedSuccess]: () => false,
  [toggleCompletedError]: () => false,
});

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [toggleCompletedSuccess]: (state, { payload }) =>
    state.map(contact => (contact.id === payload.id ? payload : contact)),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [fetchContactsError]: (_, { payload }) => toast.error(payload),
  [addContactError]: error => console.log(error),
  [deleteContactError]: error => console.log(error),
  [toggleCompletedError]: error => console.log(error),
});

export default combineReducers({
  loading,
  items,
  filter,
  error,
});
