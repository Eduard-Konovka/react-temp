import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={s.filter}>
    Фильтр по имени
    <input type="text" value={value} className={s.input} onChange={onChange} />
  </label>
);

export default Filter;
