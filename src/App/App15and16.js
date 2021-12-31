import { useEffect, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { authOperations, authSelectors } from 'store/redux7/auth';
import Container from 'components/Container';
import AppBar from 'components/AppBar5/AppBar';
import Spinner from 'components/Spinner/Spinner';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import 'App/App.css';

const HomeView = lazy(() =>
  import('pages/9/HomeView.jsx' /* webpackChunkName: "HomeView" */),
);
const RegisterView = lazy(() =>
  import('pages/9/RegisterView.jsx' /* webpackChunkName: "RegisterView" */),
);
const LoginView = lazy(() =>
  import('pages/9/LoginView.jsx' /* webpackChunkName: "LoginView" */),
);
const ContactsView = lazy(() =>
  import('pages/9/ContactsView.jsx' /* webpackChunkName: "ContactsView" */),
);
const UploadView = lazy(() =>
  import('pages/9/UploadView.jsx' /* webpackChunkName: "UploadView" */),
);

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIiFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container title="15-16. Работа с пользователями">
      {isFetchingCurrentUser ? (
        <Spinner size={300} />
      ) : (
        <>
          <AppBar />
          <Suspense fallback={<Spinner size={200} />}>
            <Routes>
              <Route
                path="/"
                element={
                  <PublicRoute>
                    <HomeView />
                  </PublicRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute restricted>
                    <RegisterView />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute redirectTo="/contacts" restricted>
                    <LoginView />
                  </PublicRoute>
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login">
                    <ContactsView />
                  </PrivateRoute>
                }
              />
              <Route
                path="/upload"
                element={
                  <PrivateRoute redirectTo="/login">
                    <UploadView />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Suspense>
          <ToastContainer autoClose={3000} />
        </>
      )}
    </Container>
  );
}
