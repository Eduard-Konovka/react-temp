import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import PokemonForm from './PokemonForm';
import PokemonInfo from './PokemonInfo';

export default function PokemonView() {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <div style={{ height: 500 }}>
      <PokemonForm forSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
      <ToastContainer autoClose={3000} />
    </div>
  );
}
