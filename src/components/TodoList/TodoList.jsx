import s from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className={s.list}>
    {todos.map(({ id, text }) => (
      <li key={id} className={s.item}>
        <p className={s.text}>{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Удалить</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
