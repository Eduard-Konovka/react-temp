import Container from './components/Container';
import Section from './components/Section';
import Box from './components/Box';
import Alert from './components/Alert';
import ColorPicker from './components/ColorPicker1';
import PaintingList from './components/PaintingList';
import colorPickerOptions from './db/colorPickerOptions.json';
import paintings from './db/paintings.json';
import './App.css';

export default function App() {
  return (
    <Container title="1. Компоненты и коллекции. 2. Стилизация">
      <Section title="Box">
        <Box type="small" classNames="big red" styles={{ color: 'green' }} />
        <Box type="medium" />
        <Box type="large" />
      </Section>

      <Section title="Alert">
        <Alert text="Gooooooo!" type="success" />
        <Alert text="Gooooooo!" type="warning" />
        <Alert text="Gooooooo!" type="error" />
      </Section>

      <Section>
        <ColorPicker options={colorPickerOptions} />
      </Section>

      <Section title="PaintingList">
        <PaintingList items={paintings} />
      </Section>
    </Container>
  );
}
