import { useSelector } from 'react-redux';
import { contactsSelectors } from 'store/redux7/contacts';
import s from './Stats.module.css';

export default function Stats() {
  const total = useSelector(contactsSelectors.getTotalContactCount);

  return (
    <div className={s.stats}>
      <p className={s.item}>
        <span className={s.label}>You have</span>
        <span className={s.value}>{total}</span>
        <span className={s.label}>contacts</span>
      </p>
    </div>
  );
}
