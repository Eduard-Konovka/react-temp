import { useState, lazy } from 'react';
import { useGetPokemonByNameQuery } from '../redux6/pokemon/pokemonSlice';
import PokemonDataView from 'components/Pokemon2/PokemonDataView';
import Button from 'components/Button';
import Spinner from 'components/Spinner/Spinner';
import errorImage from 'pages7/error.jpg';

const NotFoundView = lazy(() =>
  import('pages7/NotFoundView.jsx' /* webpackChunkName: "NotFoundView" */),
);

export default function HomeView() {
  const [pokemonName, setPokemonName] = useState('');
  const { data, error, isFetching, isUninitialized, refetch, isError } =
    useGetPokemonByNameQuery(pokemonName, {
      skip: pokemonName === '',
      // pollingInterval: 3000,
    });

  const handleSubmit = e => {
    e.preventDefault();
    setPokemonName(e.currentTarget.elements.pokemonName.value);
    // e.currentTarget.reset();
  };

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        style={{ marginTop: 10, marginBottom: 10 }}
      >
        <input type="text" name="pokemonName" />

        <Button type="submite">Search</Button>

        <Button type="button" onClick={refetch} disabled={isUninitialized}>
          Refetch
        </Button>
      </form>

      {isFetching && <Spinner size={100} />}

      {isError && error.originalStatus === 404 && (
        <NotFoundView
          errorImage={errorImage}
          messadge="Ошибка 404: страница не найдена :("
        />
      )}

      {data && !isFetching && !isError && <PokemonDataView pokemon={data} />}
    </>
  );
}
