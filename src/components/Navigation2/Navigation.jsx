import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <NavLink
        to=""
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Главная
      </NavLink>

      <NavLink
        to="authors"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Авторы
      </NavLink>

      <NavLink
        to="books"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Книги
      </NavLink>

      <NavLink
        to="table"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Таблица
      </NavLink>
    </nav>
  );
}
