import { useState, useEffect } from 'react';
import Button from 'components/Button';

export default function EffectHook() {
  const [count, setCount] = useState(0);

  // Аналогично componentDidMount и componentDidUpdate:
  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    document.title = `Нажали ${count} раз`;
  });
  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <Button type="button" onClick={() => setCount(count + 1)}>
        Нажми на меня
      </Button>
    </div>
  );
}
