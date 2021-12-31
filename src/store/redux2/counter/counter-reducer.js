import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { increment, decrement } from './counter-actions';

const valueReducer = createReducer(10, {
  [increment]: (state, { payload }) => state + payload,
  [decrement]: (state, { payload }) => state - payload,
});

const stepReducer = createReducer(5, {});

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
