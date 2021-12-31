import { Routes, Route, Link } from 'react-router-dom';
import Container from 'components/Container';
import Section from 'components/Section';
import CounterView from 'pages/3/CounterView';
import TodosView from 'pages/3/TodosView';
import 'App/App.css';

export default function App() {
  return (
    <Container title="11. Основы Redux">
      <Section>
        <ul style={{ display: 'flex' }}>
          <li style={{ display: 'block', margin: 10 }}>
            <Link to="/counter">Счётчик</Link>
          </li>

          <li style={{ display: 'block', margin: 10 }}>
            <Link to="/todos">Заметки</Link>
          </li>
        </ul>
      </Section>

      <Section>
        <Routes>
          <Route path="/counter" element={<CounterView />} />
          <Route path="/todos" element={<TodosView />} />
        </Routes>
      </Section>
    </Container>
  );
}
