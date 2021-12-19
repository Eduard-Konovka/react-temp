import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <NavLink
        to=""
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Pokemon
      </NavLink>

      <NavLink
        to="todos"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Todos
      </NavLink>
    </nav>
  );
}
