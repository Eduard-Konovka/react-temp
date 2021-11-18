import { useState } from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls';
import Value from './Value';
import s from './Counter.module.css';

export default function Counter({ initialValue = 0 }) {
  const [value, setValue] = useState(initialValue);

  const hendleIncrement = () => {
    setValue(prevState => prevState + 1);
  };

  const hendleDecrement = () => {
    setValue(prevState => prevState - 1);
  };

  return (
    <div className={s.counter}>
      <Value value={value} />
      <Controls onIncrement={hendleIncrement} onDecrement={hendleDecrement} />
    </div>
  );
}

Counter.propTypes = {
  initialValue: PropTypes.number.isRequired,
};
