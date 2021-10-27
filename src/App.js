import './App.css';
import paintings from './db/paintings.json';
import Section from './components/Section';
import PaintingList from './components/PaintingList';

export default function App() {
  return (
    <div>
      <Section title="Топ недели">
        <PaintingList items={paintings} />
      </Section>
      <Section title="Лучшее">
        <PaintingList items={paintings} />
      </Section>
    </div>
  );
}
