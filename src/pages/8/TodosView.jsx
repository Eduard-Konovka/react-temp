import { Link } from 'react-router-dom';
import { useFetchTodosQuery } from 'store/redux6/todos/todoSlice';
import TodoList from 'components/TodoList8';
import Spinner from 'components/Spinner';

export default function TodosView() {
  const { data: todos, isFetching } = useFetchTodosQuery();

  return (
    <div>
      <div style={{ paddingBottom: 10 }}>
        <Link to="/todos/create">Create todo</Link>
      </div>

      {isFetching && <Spinner size={100} />}

      {!isFetching && todos && <TodoList todos={todos} />}
    </div>
  );
}
