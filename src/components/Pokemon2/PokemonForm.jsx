import { useState } from 'react';
import Button from '../Button';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

const styles = { form: { marginBottom: 20 } };

export default function PokemonForm({ forSubmit }) {
  const [pokemonName, setPokemonName] = useState('');

  const handleNameChange = event => {
    setPokemonName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (pokemonName.trim() === '') {
      toast.error('Введите имя покемона!');
      setPokemonName('');
      return;
    }

    forSubmit(pokemonName.trim());
    setPokemonName('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        name="pokemonName"
        value={pokemonName}
        onChange={handleNameChange}
      />
      <Button type="submit">
        <ImSearch style={{ marginRight: 8 }} />
        Найти
      </Button>
    </form>
  );
}
