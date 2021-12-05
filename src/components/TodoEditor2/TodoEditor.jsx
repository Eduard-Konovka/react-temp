import { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'components/Button';
import todosActions from 'redux/todos/todos-actions';
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
        <Button type="submit">Сохранить</Button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  forSubmit: text => dispatch(todosActions.addTodo(text)),
});

export default connect(null, mapDispatchToProps)(TodoEditor);
