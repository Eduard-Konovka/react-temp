import Button from 'components/Button';

const Controls = ({ step, onIncrement, onDecrement }) => (
  <div>
    <Button type="button" onClick={onIncrement}>
      Увеличить на {step}
    </Button>
    <Button type="button" onClick={onDecrement}>
      Уменьшить на {step}
    </Button>
  </div>
);

export default Controls;
