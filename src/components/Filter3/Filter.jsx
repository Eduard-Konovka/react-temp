import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'store/redux3/todos/todos-selector';
import todosActions from 'store/redux3/todos/todos-actions';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.filter}>
      Фильтр по имени
      <input
        type="text"
        value={value}
        className={s.input}
        onChange={e => dispatch(todosActions.changeFilter(e.target.value))}
      />
    </label>
  );
}
