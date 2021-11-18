import { Component } from 'react';
import Container from './components/Container';
import Section from './components/Section';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
import ColorPicker2 from './components/ColorPicker2';
import TodoList from './components/TodoList';
import colorPickerOptions from './db/colorPickerOptions.json';
import todos from './db/todos.json';
import './App.css';

class App extends Component {
  state = {
    todos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );

    return (
      <Container title="3. События и состояние компонента">
        <Section title="Counter">
          <Counter initialValue={10} />
        </Section>

        <Section title="Dropdown">
          <Dropdown />
        </Section>

        <Section>
          <ColorPicker2 options={colorPickerOptions} />
        </Section>

        <Section title="To Do List">
          <div>
            <p>Общее количествово: {totalTodoCount}</p>
            <p>Количество выполненных: {completedTodoCount}</p>
          </div>
          <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        </Section>
      </Container>
    );
  }
}

export default App;
