import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'store/redux7/auth';

/*
 * 1. Он должен повторять API Route
 * 2. Он должен рендерить Route
 *
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае - рендерит Redirect на redirectTo
 */
export default function PrivateRoute({ children, redirectTo = '/' }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
}
