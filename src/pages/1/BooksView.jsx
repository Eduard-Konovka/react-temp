import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as bookShelfAPI from 'services/bookshelf-api';
import PageHeading from 'components/PageHeading';

export default function BooksView() {
  const { pathname } = useLocation();
  const [books, setBooks] = useState(null);

  useEffect(() => {
    bookShelfAPI.fetchBooks().then(setBooks);
  }, []);

  return (
    <>
      <PageHeading text="Книги" />

      {books && (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <Link to={`${pathname}/${book.id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
