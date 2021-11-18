import Button from 'components/Button';
import s from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className={s.list}>
    {todos.map(({ id, text }) => (
      <li key={id} className={s.item}>
        <p className={s.text}>{text}</p>
        <Button type="button" onClick={() => onDeleteTodo(id)}>
          Удалить
        </Button>
      </li>
    ))}
  </ul>
);

export default TodoList;
