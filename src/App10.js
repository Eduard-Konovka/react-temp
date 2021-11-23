import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from './components/Container';
import AppBar from './components/AppBar2/AppBar';
import Spinner from './components/Spinner/Spinner';
// import HomeView from './pages/HomeView';
// import AuthorsView from './pages/AuthorsView';
// import BooksView from './pages/BooksView';
// import BookDetailsView from './pages/BookDetailsView';
// import TableView from './pages/TableView';
// import NotFoundView from './pages/NotFoundView';
import errorImage from './pages/error.jpg';
import './App.css';

const HomeView = lazy(() =>
  import('./pages/HomeView.jsx' /* webpackChunkName: "HomeView" */),
);
const AuthorsView = lazy(() =>
  import('./pages/AuthorsView.jsx' /* webpackChunkName: "AuthorsView" */),
);
const BooksView = lazy(() =>
  import('./pages/BooksView.jsx' /* webpackChunkName: "BooksView" */),
);
const BookDetailsView = lazy(() =>
  import(
    './pages/BookDetailsView.jsx' /* webpackChunkName: "BookDetailsView" */
  ),
);
const TableView = lazy(() =>
  import('./pages/TableView.jsx' /* webpackChunkName: "TableView" */),
);
const NotFoundView = lazy(() =>
  import('./pages/NotFoundView.jsx' /* webpackChunkName: "NotFoundView" */),
);

export default function App() {
  return (
    <Container title="10. React router и разделение кода">
      <AppBar />

      <Suspense fallback={<Spinner size={200} />}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/authors/*" element={<AuthorsView />} />
          <Route path="/books" element={<BooksView />} />
          <Route path="/books/:bookId" element={<BookDetailsView />} />
          <Route path="/table" element={<TableView />} />
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
