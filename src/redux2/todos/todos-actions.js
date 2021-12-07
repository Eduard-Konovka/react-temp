import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addTodo = createAction('todos/add', text => ({
  payload: {
    id: shortid.generate(),
    text,
    completed: false,
  },
}));

const deleteTodo = createAction('todos/delete');
const toggleCompleted = createAction('todos/toggleCompleted');
const changeFilter = createAction('todos/changeFilter');

const todosActions = { addTodo, deleteTodo, toggleCompleted, changeFilter };
export default todosActions;
