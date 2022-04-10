import { useState } from 'react';
import Container from 'components/Container';
import Section from 'components/Section';
import Button from 'components/Button';
import EffectHook from 'components/EffectHook';
import ColorPicker from 'components/ColorPicker4';
import Counter from 'components/Counter2';
import Form from 'components/Form2';
import FormLS from 'components/Form3';
import Clock from 'components/Clock2';
import colorPickerOptions from 'db/colorPickerOptions.json';
import 'App/App.css';

export default function App() {
  const [showClock, setShowClock] = useState(false);

  const formSubmitHandler = data => {
    setTimeout(() => {
      console.log(data);
    }, 1000);
  };

  return (
    <Container title="7. Хуки - часть 1">
      <Section title="Хук эффекта - React-docs">
        <EffectHook />
      </Section>

      <Section title="ColorPicker">
        <ColorPicker options={colorPickerOptions} />
      </Section>

      <Section title="Counter">
        <Counter initialValue={10} />
      </Section>

      <Section title="Form">
        <Form forSubmit={formSubmitHandler} />
      </Section>

      <Section title="Form to LocalStorage">
        <FormLS forSubmit={data => console.log(data)} />
      </Section>

      <Section title="Clock">
        <Button type="button" onClick={() => setShowClock(!showClock)}>
          Открыть/Скрыть таймер
        </Button>
        {showClock && <Clock />}
      </Section>
    </Container>
  );
}
