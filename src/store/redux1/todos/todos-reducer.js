import { combineReducers } from 'redux';
import todosTypes from './todos-types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case todosTypes.ADD:
      return [...state, payload];

    case todosTypes.DELETE:
      return state.filter(({ id }) => id !== payload);

    case todosTypes.TOGGLE_COMPLETED:
      return state.map(todo =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
      );

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case todosTypes.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
