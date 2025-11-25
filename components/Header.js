import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>🌱 GreenTech</div>
        <nav className={styles.nav}>
          <a href="#servicios">Servicios</a>
          <a href="#casos">Casos</a>
          <a href="#testimonios">Testimonios</a>
          <a href="#blog">Blog</a>
          <a href="#budget" className={styles.ctaBtn}>Contacto</a>
        </nav>
      </div>
    </header>
  );
}
