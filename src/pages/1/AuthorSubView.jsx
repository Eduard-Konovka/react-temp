import { useParams, Link } from 'react-router-dom';

export default function AuthorSubView({ authors }) {
  const { authorId } = useParams();
  const author = authors.find(author => author.id === Number(authorId));
  return (
    <>
      <ul>
        {author.books.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
