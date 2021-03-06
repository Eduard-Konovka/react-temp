import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Container from 'components/Container';
import AppBar from 'components/AppBar4';
import Spinner from 'components/Spinner';
import errorImage from 'pages/7/error.jpg';
import 'App/App.css';

const HomeView = lazy(() =>
  import('pages/8/HomeView.jsx' /* webpackChunkName: "HomeView" */),
);
const TodosView = lazy(() =>
  import('pages/8/TodosView.jsx' /* webpackChunkName: "TodosView" */),
);
const CreateTodo = lazy(() =>
  import('pages/8/CreateTodo.jsx' /* webpackChunkName: "CreateTodo" */),
);
const NotFoundView = lazy(() =>
  import('pages/7/NotFoundView.jsx' /* webpackChunkName: "NotFoundView" */),
);

export default function App() {
  return (
    <Container title="13b. Асинхронный Redux, RTK Query">
      <AppBar />

      <Suspense fallback={<Spinner size={200} />}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/todos" element={<TodosView />} />
          <Route path="/todos/create" element={<CreateTodo />} />
          <Route
            path="*"
            element={
              <NotFoundView
                errorImage={errorImage}
                messadge="Ошибка 404: страница не найдена :("
              />
            }
          />
        </Routes>
      </Suspense>

      <ToastContainer autoClose={3000} />
    </Container>
  );
}
