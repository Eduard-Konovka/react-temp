import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { getVisibleContacts } from 'store/redux7/contacts/contacts-selectors';
import { contactsOperations } from 'store/redux7/contacts';
import Button from 'components/Button';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));
  const onToggleCompleted = id =>
    dispatch(contactsOperations.toggleCompleted(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number, completed }) => (
        <li key={id} className={classNames(s.item, completed && s.completed)}>
          <input
            type="checkbox"
            className={s.checkbox}
            checked={completed}
            onChange={() => onToggleCompleted(id)}
          />
          <p className={s.text}>{`${name}: ${number}`}</p>
          <Button type="button" onClick={() => onDeleteContact(id)}>
            Удалить
          </Button>
        </li>
      ))}
    </ul>
  );
}
