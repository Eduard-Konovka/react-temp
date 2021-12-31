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

const getCompletedContactsCount = contacts =>
  contacts.reduce(
    (total, contact) => (contact.completed ? total + 1 : total),
    0,
  );

const mapStateToProps = state => ({
  total: state.contacts.items.length,
  completed: getCompletedContactsCount(state.contacts.items),
});

export default connect(mapStateToProps)(Stats);
