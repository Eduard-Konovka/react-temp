import { Component } from 'react';
import shortid from 'shortid';
import Container from './components/Container';
import Section from './components/Section';
import Form from './components/Form';
import ColorPicker3 from './components/ColorPicker3';
import TodoList from './components/TodoList2';
import TodoEditor from './components/TodoEditor';
import Filter from './components/Filter';
import colorPickerOptions from './db/colorPickerOptions.json';
import todos from './db/todos.json';
import './App.css';

class App extends Component {
  state = {
    todos,
    filter: '',
  };

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [...todos, todo],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }

    //     return todo;
    //   }),
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  formSubmitHandler = data => {
    setTimeout(() => {
      console.log(data);
    }, 1000);
  };

  render() {
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <Container title="4. Формы">
        <Section title="Form">
          <Form forSubmit={this.formSubmitHandler} />
        </Section>

        <Section>
          <ColorPicker3 options={colorPickerOptions} />
        </Section>

        <Section title="To Do">
          {/* TODO: вынести в отдельный компонент */}
          <div>
            <p>Всего заметок: {totalTodoCount}</p>
            <p>Выполнено: {completedTodoCount}</p>
          </div>
        </Section>

        <Section title="Filter">
          <Filter value={filter} onChange={this.changeFilter} />
        </Section>

        <Section title="To Do List">
          <TodoList
            todos={visibleTodos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />
        </Section>

        <Section title="To Do Editor">
          <TodoEditor forSubmit={this.addTodo} />
        </Section>
      </Container>
    );
  }
}

export default App;
