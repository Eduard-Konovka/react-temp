import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useDeleteTodoMutation } from 'redux6/todos/todoSlice';
import Button from 'components/Button';
import Spinner from 'components/Spinner/Spinner';
import s from './Todo.module.css';

const Todo = ({ id, name, number }) => {
  const [deleteTodo, { isLoading: isDeleting }] = useDeleteTodoMutation();

  const handleDelete = () => {
    deleteTodo(id);
    toast.success('Note deleted');
  };

  return (
    <li key={id} className={s.item}>
      <p className={s.text}>{`${name}: ${number}`}</p>
      <Button type="button" onClick={handleDelete} disabled={isDeleting}>
        {isDeleting && <Spinner size={18} />}
        Delete
      </Button>
    </li>
  );
};

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Todo;
