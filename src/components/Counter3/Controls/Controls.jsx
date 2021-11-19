import Button from 'components/Button';

const Controls = ({ onIncrement, onDecrement }) => (
  <div>
    <Button type="button" onClick={onIncrement}>
      Увеличить на 1
    </Button>
    <Button type="button" onClick={onDecrement}>
      Уменьшить на 1
    </Button>
  </div>
);

export default Controls;
