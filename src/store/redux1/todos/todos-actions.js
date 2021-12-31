import shortid from 'shortid';
import todosTypes from './todos-types';

const addTodo = text => ({
  type: todosTypes.ADD,
  payload: {
    id: shortid.generate(),
    text,
    completed: false,
  },
});

const deleteTodo = todoId => ({
  type: todosTypes.DELETE,
  payload: todoId,
});

const toggleCompleted = todoId => ({
  type: todosTypes.TOGGLE_COMPLETED,
  payload: todoId,
});

const changeFilter = value => ({
  type: todosTypes.CHANGE_FILTER,
  payload: value,
});

const todosActions = { addTodo, deleteTodo, toggleCompleted, changeFilter };
export default todosActions;
