import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { getVisibleTodos } from 'store/redux3/todos/todos-selector';
import todosActions from 'store/redux3/todos/todos-actions';
import Button from 'components/Button';
import s from './TodoList.module.css';

export default function TodoList() {
  const todos = useSelector(getVisibleTodos);
  const dispatch = useDispatch();

  const onDeleteTodo = id => dispatch(todosActions.deleteTodo(id));
  const onToggleCompleted = id => dispatch(todosActions.toggleCompleted(id));

  return (
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
}
