import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'components/Button';
import todosActions from 'redux/todos/todos-actions';
import s from './TodoEditor.module.css';

export default function TodoEditor({ onSave }) {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => setMessage(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    if (message === '') {
      alert('Заполните форму!');
      return;
    }

    dispatch(todosActions.addTodo(message));
    onSave();
    setMessage('');
  };

  return (
    <form className={s.editor} onSubmit={handleSubmit}>
      <textarea
        className={s.textarea}
        value={message}
        onChange={handleChange}
      ></textarea>
      <Button type="submit">Сохранить</Button>
    </form>
  );
}
