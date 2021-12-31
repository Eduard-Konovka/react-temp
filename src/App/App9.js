import { Routes, Route } from 'react-router-dom';
import Container from 'components/Container';
import AppBar from 'components/AppBar/AppBar';
import HomeView from 'pages/1/HomeView';
import AuthorsView from 'pages/1/AuthorsView';
import BooksView from 'pages/1/BooksView';
import BookDetailsView from 'pages/1/BookDetailsView';
import NotFoundView from 'pages/1/NotFoundView';
import errorImage from 'pages/1/error.jpg';
import 'App/App.css';

export default function App() {
  return (
    <Container title="9. React Router">
      <AppBar />

      <Routes>
        <Route path="" element={<HomeView />} />
        <Route path="authors/*" element={<AuthorsView />} />
        <Route path="books" element={<BooksView />} />
        <Route path="books/:bookId" element={<BookDetailsView />} />
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
    </Container>
  );
}
