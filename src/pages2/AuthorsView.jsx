import { useState, useEffect, lazy, Suspense } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import slugify from 'slugify';
import * as bookShelfAPI from '../services/bookshelf-api';
import PageHeading from '../components/PageHeading/PageHeading';
import Spinner from '../components/Spinner/Spinner';
// import AuthorSubView from './AuthorSubView';

const AuthorSubView = lazy(() =>
  import('./AuthorSubView.jsx' /* webpackChunkName: "AuthorSubView" */),
);

const makeSlug = string => slugify(string, { lower: true });

export default function AuthorsView() {
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    bookShelfAPI.fetchAuthors().then(setAuthors);
  }, []);

  return (
    <>
      <PageHeading text="Авторы" />

      {authors && (
        <ul>
          {authors.map(author => (
            <li key={author.id}>
              <NavLink to={`${makeSlug(`${author.name} ${author.id}`)}`}>
                {author.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
      <hr />

      <Suspense fallback={<Spinner size={200} />}>
        <Routes>
          <Route
            path=":slug"
            element={authors && <AuthorSubView authors={authors} />}
          />
        </Routes>
      </Suspense>
    </>
  );
}
