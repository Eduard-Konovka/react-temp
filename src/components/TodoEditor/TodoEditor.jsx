import { Component } from 'react';
import s from './TodoEditor.module.css';

export default class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.forSubmit(this.state.message);

    this.setState({ message: '' });
  };

  render() {
    return (
      <form className={s.editor} onSubmit={this.handleSubmit}>
        <textarea
          className={s.textarea}
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className={s.btn}>
          Сохранить
        </button>
      </form>
    );
  }
}
