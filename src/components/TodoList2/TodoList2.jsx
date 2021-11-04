import classNames from 'classnames';
import s from './TodoList2.module.css';

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
        <button
          type="button"
          className={s.btn}
          onClick={() => onDeleteTodo(id)}
        >
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
