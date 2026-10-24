import Button from '../Button/Button.jsx';
import { TagList } from '../Tag/Tag.jsx';
import styles from './ProjectCard.module.css';

/**
 * Card de resumo de um projeto.
 *
 * @param {object} project - item de src/data/projects.js
 * @param {(project: object) => void} onOpen - abre o modal de detalhes
 */
export default function ProjectCard({ project, onOpen }) {
  return (
    <article className={styles.card}>
      <button
        type="button"
        className={styles.cover}
        onClick={() => onOpen(project)}
        aria-label={`Ver detalhes de ${project.title}`}
      >
        <img src={project.images[0]} alt="" loading="lazy" />
      </button>

      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.summary}>{project.summary}</p>
        <TagList items={project.technologies} />
      </div>

      <div className={styles.actions}>
        <Button variant="primary" onClick={() => onOpen(project)}>
          Ver detalhes
        </Button>
        <Button href={project.repoUrl} variant="secondary" external>
          Repositório
        </Button>
      </div>
    </article>
  );
}
