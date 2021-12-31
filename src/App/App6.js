import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Container from 'components/Container';
import Section from 'components/Section';
import PokemonForm from 'components/Pokemon/PokemonForm';
import PokemonInfo from 'components/Pokemon/PokemonInfo';

export default class App extends Component {
  state = {
    pokemonName: '',
  };

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    return (
      <Container title="6. Работа с REST API">
        <Section>
          <div style={{ height: 500 }}>
            <PokemonForm forSubmit={this.handleFormSubmit} />
            <PokemonInfo pokemonName={this.state.pokemonName} />
            <ToastContainer autoClose={3000} />
          </div>
        </Section>
      </Container>
    );
  }
}
