import { connect } from 'react-redux';
import todosActions from 'store/redux2/todos/todos-actions';
import TodoList from './TodoList';

const getVisibleTodos = (allTodos, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allTodos.filter(todo =>
    todo.text.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ todos: { items, filter } }) => ({
  todos: getVisibleTodos(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: id => dispatch(todosActions.deleteTodo(id)),
  onToggleCompleted: id => dispatch(todosActions.toggleCompleted(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
