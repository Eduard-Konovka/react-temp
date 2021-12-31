import { useParams, useLocation, Link } from 'react-router-dom';
import slugify from 'slugify';

const makeSlug = string => slugify(string, { lower: true });

export default function AuthorSubView({ authors }) {
  const { pathname } = useLocation();
  const { slug } = useParams();
  const authorId = slug.match(/[a-z0-9]+$/)[0];
  const author = authors.find(author => author.id === Number(authorId));

  return (
    <>
      <ul>
        {author.books.map(book => (
          <li key={book.id}>
            <Link
              to={`/books/${makeSlug(`${book.title} ${book.id}`)}`}
              state={{ from: { pathname, label: 'Назад к автору' } }}
            >
              {book.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
