import styles from './SkillBar.module.css';

const MAX_LEVEL = 5;
const levelLabels = ['', 'Iniciante', 'Básico', 'Intermediário', 'Avançado', 'Especialista'];

/**
 * Exibe uma habilidade com uma barra de proficiência (1 a 5).
 */
export default function SkillBar({ name, level }) {
  const percent = (level / MAX_LEVEL) * 100;

  return (
    <li className={styles.item}>
      <div className={styles.row}>
        <span className={styles.name}>{name}</span>
        <span className={styles.level}>{levelLabels[level]}</span>
      </div>
      <div
        className={styles.track}
        role="meter"
        aria-label={name}
        aria-valuemin={1}
        aria-valuemax={MAX_LEVEL}
        aria-valuenow={level}
        aria-valuetext={levelLabels[level]}
      >
        <div className={styles.fill} style={{ width: `${percent}%` }} />
      </div>
    </li>
  );
}
