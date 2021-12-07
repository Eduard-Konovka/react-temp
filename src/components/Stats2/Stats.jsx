import { connect } from 'react-redux';
import s from './Stats.module.css';

const Stats = ({ total, completed }) => (
  <div className={s.stats}>
    <p className={s.item}>
      <span className={s.value}>{total}</span>
      <span className={s.label}>Всего</span>
    </p>
    <p className={s.item}>
      <span className={s.value}>{completed}</span>
      <span className={s.label}>Выполнено</span>
    </p>
  </div>
);

const getCompletedTodosCount = todos =>
  todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);

const mapStateToProps = state => ({
  total: state.todos.items.length,
  completed: getCompletedTodosCount(state.todos.items),
});

export default connect(mapStateToProps)(Stats);
