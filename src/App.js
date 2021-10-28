import './App.css';
import Container from './components/Container';
import Section from './components/Section';
import Box from './components/Box';
import ColorPicker from './components/ColorPicker';
import Alert from 'components/Alert';
import PaintingList from './components/PaintingList';
import colorPickerOptions from './db/colorPickerOptions.json';
import paintings from './db/paintings.json';

export default function App() {
  return (
    <Container>
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

      <Section title="Лучшее">
        <PaintingList items={paintings} />
      </Section>
    </Container>
  );
}
