import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from './components/Container';
import AppBar from './components/AppBar3/AppBar';
import Spinner from './components/Spinner/Spinner';
import errorImage from './pages7/error.jpg';
import './App.css';

const HomeView = lazy(() =>
  import('./pages7/HomeView.jsx' /* webpackChunkName: "HomeView" */),
);
const BooksView = lazy(() =>
  import('./pages7/BooksView.jsx' /* webpackChunkName: "BooksView" */),
);
const BookDetailsView = lazy(() =>
  import(
    './pages7/BookDetailsView.jsx' /* webpackChunkName: "BookDetailsView" */
  ),
);
const NotFoundView = lazy(() =>
  import('./pages7/NotFoundView.jsx' /* webpackChunkName: "NotFoundView" */),
);

export default function App() {
  return (
    <Container title="13a. Асинхронный Redux, абстракция createAsyncThunk">
      <AppBar />

      <Suspense fallback={<Spinner size={200} />}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/books" element={<BooksView />} />
          <Route path="/books/:slug" element={<BookDetailsView />} />
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
    </Container>
  );
}
