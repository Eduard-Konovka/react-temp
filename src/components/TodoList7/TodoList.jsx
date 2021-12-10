import classNames from 'classnames';
import Button from 'components/Button';
import s from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className={s.list}>
    {todos.map(({ id, text, completed }) => (
      <li key={id} className={classNames(s.item, completed && s.completed)}>
        <input
          type="checkbox"
          className={s.checkbox}
          checked={completed}
          onChange={() => onToggleCompleted({ id, completed: !completed })}
        />
        <p className={s.text}>{text}</p>
        <Button type="button" onClick={() => onDeleteTodo(id)}>
          Удалить
        </Button>
      </li>
    ))}
  </ul>
);

export default TodoList;
