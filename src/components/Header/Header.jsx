import { useDarkMode } from '../../context/DarkModeContext';
import styles from './Header.module.css';
import { HiMoon, HiSun } from 'react-icons/hi';

function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={styles.header}>
      <button className={styles.toggle} onClick={toggleDarkMode}>
        {!darkMode && <HiMoon />} {darkMode && <HiSun />}
      </button>

      <ul className={styles.filters}>
        {filters.map((value, index) => {
          return (
            <li key={index}>
              <button
                className={`${styles.filter} ${
                  filter === value && styles.selected
                }`}
                onClick={() => {
                  onFilterChange(value);
                }}
              >
                {value}
              </button>
            </li>
          );
        })}
      </ul>
    </header>
  );
}

export default Header;
