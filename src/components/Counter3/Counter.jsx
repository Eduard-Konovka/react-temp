import { useReducer } from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls/Controls';
import Value from './Value/Value';
import s from './Counter.module.css';

function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, value: state.value + action.payload };

    case 'decrement':
      return { ...state, value: state.value - action.payload };

    default:
      throw new Error(`Unsuported action type ${action.type}`);
  }
}

// Для ленивой инициализации useReducer первый раз - в случае вычисляемых стартовых значений,
// если значения простые - init не используется, и третий параметр в useReducer убирается.
function init(initialState) {
  return {
    ...initialState,
    value: initialState.value + 100,
  };
}

export default function Counter({ initialValue = { value: 0 } }) {
  const [state, dispatch] = useReducer(countReducer, initialValue, init);

  return (
    <div className={s.counter}>
      <Value value={state.value} />
      <Controls
        onIncrement={() => dispatch({ type: 'increment', payload: 1 })}
        onDecrement={() => dispatch({ type: 'decrement', payload: 1 })}
      />
    </div>
  );
}

// Об'єкт з властивостями вказаного типу
Counter.propTypes = {
  initialValue: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
};

// Об'єкт вказаної форми
Counter.propTypes = {
  initialValue: PropTypes.shape({
    value: PropTypes.number.isRequired,
  }).isRequired,
};
