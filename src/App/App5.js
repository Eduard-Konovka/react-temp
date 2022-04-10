import { Component } from 'react';
import shortid from 'shortid';
import Container from 'components/Container';
import Section from 'components/Section';
import Button from 'components/Button';
import Stats from 'components/Stats';
import TodoList from 'components/TodoList3';
import TodoEditor from 'components/TodoEditor';
import Filter from 'components/Filter';
import Modal from 'components/Modal';
import IconButton from 'components/IconButton';
import { ReactComponent as AddIcon } from 'icons/add.svg';
import Clock from 'components/Clock';
import Tabs from 'components/Tabs';
import tabs from 'db/tabs.json';
import 'App/App.css';

class App extends Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
    showClock: false,
  };

  componentDidMount() {
    // console.log('App componentDidMount');

    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);
    // console.log('Начальное значение поля todos, извлекаю todos из хранилища');
    parsedTodos && this.setState({ todos: parsedTodos });
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('App componentDidUpdate');
    // console.log(prevState);
    // console.log(this.state);

    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      // console.log('Обновилось поле todos, записываю todos в хранилище');

      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }

    // Закрытие модалки добавления todo
    if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
      this.toggleModal();
    }
  }

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [...todos, todo],
    }));

    // this.toggleModal();
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

  toggleClock = () => {
    this.setState(({ showClock }) => ({
      showClock: !showClock,
    }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    // console.log('App render');

    const { todos, filter, showClock, showModal } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();
    const toggleClock = this.toggleClock;
    const toggleModal = this.toggleModal;

    return (
      <Container title="5. Жизненный цикл компонента">
        <Section title="Clock">
          <Button type="button" onClick={toggleClock}>
            Открыть/Скрыть таймер
          </Button>
          {showClock && <Clock />}
        </Section>

        <Section title="Tabs">
          <Tabs items={tabs} />
        </Section>

        <Section title="To Do">
          <Stats total={totalTodoCount} completed={completedTodoCount} />
          {/* <div>
            <p>Всего заметок: {totalTodoCount}</p>
            <p>Выполнено: {completedTodoCount}</p>
          </div> */}
          <Filter value={filter} onChange={this.changeFilter} />
          <TodoList
            todos={visibleTodos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />
          <IconButton
            type="button"
            aria-label="Добавить заметку"
            onClick={toggleModal}
          >
            <AddIcon width="36" height="36" fill="#fff" />
          </IconButton>
          {showModal && (
            <Modal forClose={toggleModal}>
              <TodoEditor forSubmit={this.addTodo} forClick={toggleModal} />
              <Button type="button" onClick={toggleModal}>
                Отменить
              </Button>
            </Modal>
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
