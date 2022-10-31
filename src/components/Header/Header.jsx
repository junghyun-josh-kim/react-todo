import styles from './Header.module.css';

function Header({ filters, filter, onFilterChange }) {
  return (
    <header className={styles.header}>
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
