import { Component } from 'react';
import Button from '../Button';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

const styles = { form: { marginBottom: 20 } };

export default class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  handleNameChange = event => {
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.pokemonName.trim() === '') {
      toast.error('Введите имя покемона!');
      this.setState({ pokemonName: '' });
      return;
    }

    this.props.forSubmit(this.state.pokemonName.trim());
    this.setState({ pokemonName: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
        />
        <Button type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Найти
        </Button>
      </form>
    );
  }
}
