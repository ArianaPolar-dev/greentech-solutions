import styles from '../styles/Hero.module.css';
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>GreenTech Solutions</h1>
        <p className={styles.subtitle}>
          Consultoría en tecnología sostenible: optimiza tu pyme, reduce tu huella y transforma tu futuro.
        </p>
        <a href="#budget" className={styles.cta}>Solicita tu presupuesto</a>
      </div>
    </section>
  );
}

