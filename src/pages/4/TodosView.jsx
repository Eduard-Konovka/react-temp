import { Component } from 'react';
import Button from 'components/Button';
import TodoList from 'components/TodoList5';
import TodoEditor from 'components/TodoEditor3';
import Filter from 'components/Filter2';
import Stats from 'components/Stats2';
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
