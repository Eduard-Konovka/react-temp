import { Routes, Route, Link } from 'react-router-dom';
import Container from './components/Container';
import Section from './components/Section';
import TodosView from './pages6/TodosView';
import './App.css';

export default function App() {
  return (
    <Container title="13. Асинхронный Redux, концепция и низкоуровневый API">
      <Section>
        <ul style={{ display: 'flex' }}>
          <li style={{ display: 'block', margin: 10 }}>
            <Link to="/todos">Заметки</Link>
          </li>
        </ul>
      </Section>

      <Section>
        <Routes>
          <Route path="/todos" element={<TodosView />} />
        </Routes>
      </Section>
    </Container>
  );
}
