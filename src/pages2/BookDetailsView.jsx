import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';
import PageHeading from '../components/PageHeading/PageHeading';
import Button from 'components/Button';
import * as bookShelfAPI from '../services/bookshelf-api';

export default function BookDetailsView() {
  const navigate = useNavigate();
  const location = useLocation();
  const { slug } = useParams();
  const bookId = slug.match(/[a-z0-9]+$/)[0];
  const [book, setBook] = useState(null);

  useEffect(() => {
    bookShelfAPI.fetchBookById(bookId).then(setBook);
  }, [bookId]);

  const onGoBack = () => {
    navigate(location?.state?.from?.pathname ?? '/books');
  };

  return (
    <>
      <PageHeading text={`Книга ${bookId}`} />

      {book && (
        <>
          <Button type="button" onClick={onGoBack}>
            Кнопка "{location?.state?.from?.label ?? 'Назад'}"
          </Button>
          <Link to={location?.state?.from?.pathname ?? '/books'}>
            Ссылка "{location?.state?.from?.label ?? 'Назад'}"
          </Link>
          <hr />
          <img src={book.imgUrl} alt={book.title} />
          <h2>{book.title}</h2>
          <p>Автор: {book.author.name}</p>
          <p>{book.descr}</p>
        </>
      )}
    </>
  );
}
