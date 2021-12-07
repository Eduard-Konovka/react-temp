import PropTypes from 'prop-types';
import Controls from './Controls/Controls';
import Value from './Value/Value';
import s from './Counter.module.css';

export default function Counter({ value, step, onIncrement, onDecrement }) {
  return (
    <div className={s.counter}>
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
    </div>
  );
}

Counter.propTypes = {
  initialValue: PropTypes.number,
};
