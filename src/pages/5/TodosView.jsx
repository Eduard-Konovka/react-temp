import { Component } from 'react';
import Button from 'components/Button/Button';
import TodoList from 'components/TodoList6/TodoList';
import TodoEditor from 'components/TodoEditor4/TodoEditor';
import Filter from 'components/Filter3/Filter';
import Stats from 'components/Stats2/Stats';
import Modal from 'components/Modal/Modal';
import IconButton from 'components/IconButton/IconButton';
import { ReactComponent as AddIcon } from 'icons/add.svg';

const iconStyles = {
  marginTop: 20,
  marginBottom: 20,
};

class TodosView extends Component {
  state = {
    showModal: false,
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
        <Stats />
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
            <TodoEditor onSave={toggleModal} />
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
