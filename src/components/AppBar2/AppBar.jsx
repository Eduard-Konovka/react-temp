import Navigation from '../Navigation2/Navigation';
import styles from './Appbar.module.css';

export default function Appbar() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}
