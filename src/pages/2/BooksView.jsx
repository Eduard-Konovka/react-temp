import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import slugify from 'slugify';
import * as bookShelfAPI from 'services/bookshelf-api';
import PageHeading from 'components/PageHeading/PageHeading';

const makeSlug = string => slugify(string, { lower: true });

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
              <Link
                to={`${pathname}/${makeSlug(`${book.title} ${book.id}`)}`}
                state={{
                  from: {
                    pathname,
                    label: 'Назад к книгам',
                  },
                }}
              >
                {book.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
