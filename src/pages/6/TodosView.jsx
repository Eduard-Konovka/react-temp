import { Component } from 'react';
import { connect } from 'react-redux';
import todosOperations from 'store/redux4/todos/todos-operations';
import Button from 'components/Button';
import TodoList from 'components/TodoList7';
import TodoEditor from 'components/TodoEditor5';
import Filter from 'components/Filter4';
import Stats from 'components/Stats2';
import Modal from 'components/Modal';
import Spinner from 'components/Spinner';
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

  componentDidMount() {
    this.props.fetchTodos();
  }

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
        {this.props.isLoadingTodos && <Spinner size={100} />}
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

const mapStateToProps = state => ({
  isLoadingTodos: state.todos.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(todosOperations.fetchTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosView);
