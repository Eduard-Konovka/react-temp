import classNames from 'classnames';
import { connect } from 'react-redux';
import Button from 'components/Button';
import todosActions from 'redux/todos/todos-actions';
import s from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className={s.list}>
    {todos.map(({ id, text, completed }) => (
      <li key={id} className={classNames(s.item, completed && s.completed)}>
        <input
          type="checkbox"
          className={s.checkbox}
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <p className={s.text}>{text}</p>
        <Button type="button" onClick={() => onDeleteTodo(id)}>
          Удалить
        </Button>
      </li>
    ))}
  </ul>
);

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
