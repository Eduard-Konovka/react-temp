import axios from 'axios';
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
} from './todos-actions';

axios.defaults.baseURL = 'http://localhost:3004';

const fetchTodos = () => dispatch => {
  dispatch(fetchTodosRequest());

  axios
    .get('/todos')
    .then(({ data }) => dispatch(fetchTodosSuccess(data)))
    .catch(error => dispatch(fetchTodosError(error)));
};

// Альтернатива на ахинхронных функциях
// const fetchTodos = () => async dispatch => {
//   dispatch(fetchTodosRequest());

//   try {
//     const { data } = await axios.get('/todos');
//     dispatch(fetchTodosSuccess(data));
//   } catch (error) {
//     dispatch(fetchTodosError(error));
//   }
// };

const addTodo = text => dispatch => {
  const todo = {
    text,
    completed: false,
  };

  dispatch(addTodoRequest());

  axios
    .post('/todos', todo)
    .then(({ data }) => dispatch(addTodoSuccess(data)))
    .catch(error => dispatch(addTodoError(error)));
};

const deleteTodo = id => dispatch => {
  dispatch(deleteTodoRequest());

  axios
    .delete(`/todos/${id}`)
    .then(() => dispatch(deleteTodoSuccess(id)))
    .catch(error => dispatch(toggleCompletedError(error)));
};

const toggleCompleted =
  ({ id, completed }) =>
  dispatch => {
    const update = { completed };

    dispatch(toggleCompletedRequest());

    axios
      .patch(`/todos/${id}`, update)
      .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
      .catch(error => dispatch(deleteTodoError(error)));
  };

const todosOperations = {
  fetchTodos,
  addTodo,
  deleteTodo,
  toggleCompleted,
};
export default todosOperations;
