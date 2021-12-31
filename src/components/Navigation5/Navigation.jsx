import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'store/redux7/auth';
import s from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Главная
      </NavLink>

      {isLoggedIn && (
        <>
          <NavLink
            to="/contacts"
            className={({ isActive }) => (isActive ? s.active : s.link)}
          >
            Контакты
          </NavLink>
          <NavLink
            to="/upload"
            className={({ isActive }) => (isActive ? s.active : s.link)}
          >
            Загрузить
          </NavLink>
        </>
      )}
    </nav>
  );
}
