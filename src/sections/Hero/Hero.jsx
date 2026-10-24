import Button from '../../components/Button/Button.jsx';
import { profile } from '../../data/profile.js';
import { projects } from '../../data/projects.js';
import { skillGroups } from '../../data/skills.js';
import styles from './Hero.module.css';

/** Página inicial: resumo profissional e chamadas para as demais seções. */
export default function Hero() {
  const skillCount = skillGroups.reduce((sum, group) => sum + group.skills.length, 0);

  const stats = [
    { value: projects.length, label: 'projetos em destaque' },
    { value: skillCount, label: 'tecnologias' },
    { value: '100%', label: 'responsivo' },
  ];

  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <span className={styles.badge}>Disponível para oportunidades</span>
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

        <dl className={styles.stats}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <dt className={styles.statLabel}>{stat.label}</dt>
              <dd className={styles.statValue}>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
