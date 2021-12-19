import classNames from 'classnames';
import PropTypes from 'prop-types';
import s from './Button.module.css';

export default function Button({ type, onClick, disabled, children }) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classNames(s.btn, disabled && s.disabled)}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  onClick: () => null,
  disabled: false,
  children: null,
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};
