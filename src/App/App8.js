import Container from 'components/Container';
import Section from 'components/Section';
import SkipEffectOnFirstRender from 'components/SkipEffectOnFirstRender/SkipEffectOnFirstRender';
import PokemonView from 'components/Pokemon2/PokemonView';
import Counter from 'components/Counter3/Counter';
import Friends from 'components/Friends/Friends';
import 'App/App.css';

export default function App() {
  return (
    <Container title="8. Хуки - часть 2">
      <Section title="Skip Effect on first render">
        <SkipEffectOnFirstRender />
      </Section>

      <Section title="Pokemon with Hooks">
        <PokemonView />
      </Section>

      <Section title="useReducer">
        <Counter initialValue={{ value: 10 }} />
      </Section>

      <Section title="useMemo">
        <Friends />
      </Section>
    </Container>
  );
}
