import Todo from 'components/Todo2/Todo';
import s from './TodoList.module.css';

const TodoList = ({ todos }) => (
  <ul className={s.list}>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} />
    ))}
  </ul>
);

export default TodoList;
