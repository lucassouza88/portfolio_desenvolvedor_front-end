import Button from '../../components/Button/Button.jsx';
import { profile } from '../../data/profile.js';
import styles from './Hero.module.css';

/** Página inicial: resumo profissional e atalhos para as demais seções. */
export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          Olá, eu sou <span className={styles.highlight}>{profile.name.split(' ')[0]}</span>
          <br />
          {profile.role}.
        </h1>
        <p className={styles.summary}>{profile.summary}</p>
        <div className={styles.actions}>
          <Button href="#projetos">Ver projetos</Button>
          <Button href="#contato" variant="secondary">
            Entrar em contato
          </Button>
        </div>
      </div>
    </section>
  );
}
