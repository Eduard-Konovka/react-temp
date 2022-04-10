import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from 'components/Container';
import AppBar from 'components/AppBar2';
import Spinner from 'components/Spinner';
// import HomeView from 'pages/1/HomeView';
// import AuthorsView from 'pages/1/AuthorsView';
// import BooksView from 'pages/1/BooksView';
// import BookDetailsView from 'pages/1/BookDetailsView';
// import TableView from 'pages/1/TableView';
// import NotFoundView from 'pages/1/NotFoundView';
import errorImage from 'pages/1/error.jpg';
import 'App/App.css';

const HomeView = lazy(() =>
  import('pages/1/HomeView.jsx' /* webpackChunkName: "HomeView" */),
);
const AuthorsView = lazy(() =>
  import('pages/1/AuthorsView.jsx' /* webpackChunkName: "AuthorsView" */),
);
const BooksView = lazy(() =>
  import('pages/1/BooksView.jsx' /* webpackChunkName: "BooksView" */),
);
const BookDetailsView = lazy(() =>
  import(
    'pages/1/BookDetailsView.jsx' /* webpackChunkName: "BookDetailsView" */
  ),
);
const TableView = lazy(() =>
  import('pages/1/TableView.jsx' /* webpackChunkName: "TableView" */),
);
const NotFoundView = lazy(() =>
  import('pages/1/NotFoundView.jsx' /* webpackChunkName: "NotFoundView" */),
);

export default function App() {
  return (
    <Container title="10. React Router и разделение кода">
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
