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

export default Stats;
