import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'store/redux7/contacts/contacts-selectors';
import contactsOperations from 'store/redux7/contacts/contacts-operations';
import Button from 'components/Button/Button';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const hendleChenge = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const hendleSubmite = e => {
    e.preventDefault();

    contacts.map(contact => contact.name).includes(name)
      ? alert(`Контакт с именем ${name} уже существует!`)
      : dispatch(contactsOperations.addContact({ name, number }));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={hendleSubmite} className={s.form}>
      <label className={s.label}>
        <p className={s.title}>Имя</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={hendleChenge}
          className={s.input}
        />

        <p className={s.title}>Номер</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={hendleChenge}
          className={s.input}
        />

        <Button type="submit">Добавить контакт</Button>
      </label>
    </form>
  );
}
