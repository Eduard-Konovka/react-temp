import { ImSpinner } from 'react-icons/im';
import PropTypes from 'prop-types';
import s from './Spinner.module.css';

export default function Spinner({ size }) {
  return (
    <div className={s.box}>
      <ImSpinner size={size} className={s.spinner} />
    </div>
  );
}

Spinner.propTypes = {
  size: PropTypes.number.isRequired,
};
