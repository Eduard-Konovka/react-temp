import { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'components/Button';
import todosOperations from 'redux4/todos/todos-operations';
import s from './TodoEditor.module.css';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.message !== '') {
      this.props.forSubmit(this.state.message);
      this.props.onSave();
      this.setState({ message: '' });
      return;
    }

    alert('Заполните форму!');
  };

  render() {
    return (
      <form className={s.editor} onSubmit={this.handleSubmit}>
        <textarea
          className={s.textarea}
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <Button type="submit">Сохранить</Button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  forSubmit: text => dispatch(todosOperations.addTodo(text)),
});

export default connect(null, mapDispatchToProps)(TodoEditor);
