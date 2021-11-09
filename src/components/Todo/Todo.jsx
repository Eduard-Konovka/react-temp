import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'components/Button';
import s from './Todo.module.css';

const Todo = ({ text, completed, onToggleCompleted, onDelete }) => (
  <>
    <input
      type="checkbox"
      className={s.checkbox}
      checked={completed}
      onChange={onToggleCompleted}
    />
    <p className={classNames(s.text, completed && s.completed)}>{text}</p>
    <Button type="button" onClick={onDelete}>
      Удалить
    </Button>
  </>
);

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Todo;
