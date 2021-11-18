import { useState } from 'react';
import s from './Form.module.css';

export default function Form({ forSubmit }) {
  const [name, setName] = useState('');
  const [tag, setTag] = useState('');
  const [experience, setExperience] = useState('junior');
  const [licence, setLicence] = useState(false);

  const hendleChenge = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'tag':
        setTag(value);
        break;

      case 'experience':
        setExperience(value);
        break;

      default:
        return;
    }
  };

  const hendleSubmite = e => {
    e.preventDefault();
    forSubmit({ name, tag, experience, licence });
    reset();
  };

  const hendleLicenceChenge = e => {
    setLicence(e.target.checked);
  };

  const reset = () => {
    setName('');
    setTag('');
  };

  return (
    <form onSubmit={hendleSubmite} className={s.form}>
      <label className={s.item}>
        Имя:
        <input
          type="text"
          name="name"
          value={name}
          onChange={hendleChenge}
          className={s.item}
        ></input>
      </label>

      <label className={s.item}>
        Фамилия:
        <input
          type="text"
          name="tag"
          value={tag}
          onChange={hendleChenge}
          className={s.item}
        ></input>
      </label>

      <div className={s.item}>
        <label className={s.item}>
          <input
            type="radio"
            name="experience"
            value="junior"
            checked={experience === 'junior'}
            onChange={hendleChenge}
          />
          Junior
        </label>

        <label className={s.item}>
          <input
            type="radio"
            name="experience"
            value="middle"
            checked={experience === 'middle'}
            onChange={hendleChenge}
          />
          Middle
        </label>

        <label className={s.item}>
          <input
            type="radio"
            name="experience"
            value="senior"
            checked={experience === 'senior'}
            onChange={hendleChenge}
          />
          Senior
        </label>
      </div>

      <label className={s.item}>
        <input
          type="checkbox"
          name="licence"
          checked={licence}
          onChange={hendleLicenceChenge}
        />
        Согласен с условием
      </label>

      <button type="submit" disabled={!licence} className={s.btn}>
        Отправить
      </button>
    </form>
  );
}
