import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getValue, getStep } from 'redux3/counter/counter-selector';
import * as actions from 'redux3/counter/counter-actions';
import Controls from './Controls/Controls';
import Value from './Value/Value';
import s from './Counter.module.css';

export default function Counter() {
  const value = useSelector(getValue);
  const step = useSelector(getStep);
  const dispatch = useDispatch();

  return (
    <div className={s.counter}>
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => dispatch(actions.increment(step))}
        onDecrement={() => dispatch(actions.decrement(step))}
      />
    </div>
  );
}

Counter.propTypes = {
  initialValue: PropTypes.number,
};
