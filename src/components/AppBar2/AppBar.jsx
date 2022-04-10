import Navigation from 'components/Navigation2';
import styles from './Appbar.module.css';

export default function Appbar() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}
