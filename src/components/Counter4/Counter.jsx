import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Controls from './Controls/Controls';
import Value from './Value/Value';
import * as actions from 'store/redux1/counter/counter-actions';
import s from './Counter.module.css';

function Counter({ value, step, onIncrement, onDecrement }) {
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

const mapStateToProps = state => ({
  value: state.counter.value,
  step: state.counter.step,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: value => dispatch(actions.increment(value)),
  onDecrement: value => dispatch(actions.decrement(value)),
});

Counter.propTypes = {
  initialValue: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
