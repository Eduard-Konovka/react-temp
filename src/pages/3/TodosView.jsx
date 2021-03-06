import { Component } from 'react';
import Button from 'components/Button';
import TodoList from 'components/TodoList4';
import TodoEditor from 'components/TodoEditor2';
import Filter from 'components/Filter2';
import Modal from 'components/Modal';
import IconButton from 'components/IconButton';
import { ReactComponent as AddIcon } from 'icons/add.svg';

const iconStyles = {
  marginTop: 20,
  marginBottom: 20,
};

class TodosView extends Component {
  state = {
    showModal: false,
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    const toggleModal = this.toggleModal;

    return (
      <>
        <Filter />
        <IconButton
          type="button"
          style={iconStyles}
          onClick={toggleModal}
          aria-label="Добавить todo"
        >
          <AddIcon width="36" height="36" fill="#fff" />
        </IconButton>

        <TodoList />

        {showModal && (
          <Modal forClose={toggleModal}>
            <TodoEditor />
            <Button type="button" onClick={toggleModal}>
              Отменить
            </Button>
          </Modal>
        )}
      </>
    );
  }
}

export default TodosView;
