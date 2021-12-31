import { connect } from 'react-redux';
import todosActions from 'store/redux1/todos/todos-actions';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={s.filter}>
    Фильтр по имени
    <input type="text" value={value} className={s.input} onChange={onChange} />
  </label>
);

const mapStateToProps = state => ({
  value: state.todos.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(todosActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
