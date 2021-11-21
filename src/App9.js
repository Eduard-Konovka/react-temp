import { Routes, Route } from 'react-router-dom';
import Container from './components/Container';
import AppBar from './components/AppBar/AppBar';
import HomeView from './pages/HomeView';
import AuthorsView from './pages/AuthorsView';
import BooksView from './pages/BooksView';
import BookDetailsView from './pages/BookDetailsView';
import NotFoundView from './pages/NotFoundView';
import errorImage from './pages/error.jpg';
import './App.css';

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
