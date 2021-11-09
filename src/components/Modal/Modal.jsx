import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  static propTypes = {
    forClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };

  componentDidMount() {
    // console.log('Modal componentDidMount');

    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    // console.log('Modal componentWillUnmount');

    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    // e.code === 'Escape' && console.log('Нажали Escape, закрываем модалку')
    e.code === 'Escape' && this.props.forClose();
  };

  handleBackdropClick = e => {
    // console.log('Кликнули в бекдроп');
    // console.log('currentTarget', e.currentTarget);
    // console.log('target', e.target);

    e.currentTarget === e.target && this.props.forClose();
  };

  render() {
    return createPortal(
      <div className={s.backdrop} onClick={this.handleBackdropClick}>
        <div className={s.content}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}
