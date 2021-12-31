import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from 'components/Container';
import AppBar from 'components/AppBar2/AppBar';
import Spinner from 'components/Spinner/Spinner';
import errorImage from 'pages/2/error.jpg';
import 'App/App.css';

const HomeView = lazy(() =>
  import('pages/2/HomeView.jsx' /* webpackChunkName: "HomeView" */),
);
const AuthorsView = lazy(() =>
  import('pages/2/AuthorsView.jsx' /* webpackChunkName: "AuthorsView" */),
);
const BooksView = lazy(() =>
  import('pages/2/BooksView.jsx' /* webpackChunkName: "BooksView" */),
);
const BookDetailsView = lazy(() =>
  import(
    'pages/2/BookDetailsView.jsx' /* webpackChunkName: "BookDetailsView" */
  ),
);
const TableView = lazy(() =>
  import('pages/2/TableView.jsx' /* webpackChunkName: "TableView" */),
);
const NotFoundView = lazy(() =>
  import('pages/2/NotFoundView.jsx' /* webpackChunkName: "NotFoundView" */),
);

export default function App() {
  return (
    <Container title="10+. slug и location.state">
      <AppBar />

      <Suspense fallback={<Spinner size={200} />}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/authors/*" element={<AuthorsView />} />
          <Route path="/books" element={<BooksView />} />
          <Route path="/books/:slug" element={<BookDetailsView />} />
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
