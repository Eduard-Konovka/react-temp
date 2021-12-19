import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCreateTodoMutation } from 'redux6/todos/todoSlice';
import Button from 'components/Button';
import Spinner from 'components/Spinner/Spinner';
import s from './CreateTodo.module.css';

export default function CreateTodo() {
  const [createTodo, { isLoading, isSuccess }] = useCreateTodoMutation();

  const handleCreate = async e => {
    e.preventDefault();
    createTodo({
      name: e.currentTarget.elements.name.value,
      number: e.currentTarget.elements.number.value,
    });
    e.currentTarget.reset();
    toast.success('Note created');
  };

  return (
    <>
      {isSuccess && <Navigate to="/todos" replace />}
      <form autoComplete="off" className={s.editor} onSubmit={handleCreate}>
        <input type="text" name="name" className={s.textarea} />
        <input type="text" name="number" className={s.textarea} />

        <Button type="submit" disabled={isLoading}>
          {isLoading && <Spinner size={18} />}
          Create
        </Button>
      </form>
    </>
  );
}

// Альтернатива
// import { useNavigate } from 'react-router-dom';

// export default function CreateTodo() {
//   const navigate = useNavigate();
//   const [createTodo, {isLoading }] = useCreateTodoMutation();

//   const hendleSubmit = async e => {
//     e.preventDefault();
//     const content = e.currentTarget.elements.content.value;
//     e.currentTarget.reset();

//     try {
//       await createTodo(content);
//       navigate('/todos');
//     } catch (error) {
//       console.log(error);
//     };
//   };

//   return (
//     <form autoComplete='off' className={s.editor} onSubmit={hendleSubmit}>
//       <textarea
//         name='content'
//         className={s.textarea}
//       />

//       <Button type="submit" disabled={isLoading} >
//         {isLoading && <Spinner size={18} /> }
//         Create
//       </Button>
//     </form>
//   );
// };
