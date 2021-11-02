import { Component } from 'react';
import Container from './components/Container';
import Page from './components/Page';
import Section from './components/Section';
import Box from './components/Box';
import Alert from './components/Alert';
import ColorPicker1 from './components/ColorPicker1';
import PaintingList from './components/PaintingList';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
import ColorPicker2 from './components/ColorPicker2';
import TodoList from './components/TodoList';
import colorPickerOptions from './db/colorPickerOptions.json';
import paintings from './db/paintings.json';
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
      <Container>
        <Page title="1. Компоненты и коллекции. 2. Стилизация">
          <Section title="Box">
            <Box
              type="small"
              classNames="big red"
              styles={{ color: 'green' }}
            />
            <Box type="medium" />
            <Box type="large" />
          </Section>

          <Section title="Alert">
            <Alert text="Gooooooo!" type="success" />
            <Alert text="Gooooooo!" type="warning" />
            <Alert text="Gooooooo!" type="error" />
          </Section>

          <Section>
            <ColorPicker1 options={colorPickerOptions} />
          </Section>

          <Section title="PaintingList">
            <PaintingList items={paintings} />
          </Section>
        </Page>

        <Page title="3. События и состояние компонента">
          <Section title="Counter">
            <Counter initialValue={10} />
          </Section>

          <Section title="Dropdown">
            <Dropdown />
          </Section>

          <Section>
            <ColorPicker2 options={colorPickerOptions} />
          </Section>

          <Section title="TodoList">
            <div>
              <p>Общее количествово: {totalTodoCount}</p>
              <p>Количество выполненных: {completedTodoCount}</p>
            </div>
            <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
          </Section>
        </Page>
      </Container>
    );
  }
}

export default App;
