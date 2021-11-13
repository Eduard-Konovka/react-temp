import { Component } from 'react';
import PokemonDataView from './PokemonDataView';
import PokemonErrorView from './PokemonErrorView';
import PokemonPendingView from './PokemonPendingView';
import pokemonAPI from '../../services/pokemon-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: Status.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      // console.log('Изменилось имя покемона')
      // console.log('prevProps.pokemonName', prevName)
      // console.log('this.props.pokemonName', nextName)

      this.setState({ status: Status.PENDING });

      pokemonAPI
        .fetchPokemon(nextName)
        .then(pokemon => this.setState({ pokemon, status: Status.RESOLVED }))
        .catch(error => this.setState({ error, status: Status.REJECTED }));

      // fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
      //   .then(response => {
      //     if (response.ok) {
      //       return response.json()
      //     }

      //     return Promise.reject(
      //       new Error(`Нет покемона с именем ${nextName}!`)
      //     )
      //   })
      //   .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
      //   .catch(error => this.setState({error, status: 'rejected'}))
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === 'idle') {
      return <div>Введите имя покемона.</div>;
    }

    if (status === 'pending') {
      return <PokemonPendingView pokemonName={pokemonName} />;
    }

    if (status === 'rejected') {
      return <PokemonErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}
