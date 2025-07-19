import styles from './Components.module.css';

function Container({ children }) {
  return (
    <main className={styles.container}>
      {children}
    </main>
  );
}

export default Container;
