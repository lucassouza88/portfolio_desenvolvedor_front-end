import { useState } from 'react';
import Button from '../Button/Button.jsx';
import Icon from '../Icon/Icon.jsx';
import { TagList } from '../Tag/Tag.jsx';
import styles from './ProjectModal.module.css';

/**
 * Modal com o detalhamento de um projeto: imagens, descrição,
 * destaques técnicos e links.
 *
 * @param {object} project - projeto selecionado
 * @param {() => void} onClose - fecha o modal
 */
export default function ProjectModal({ project, onClose }) {
  const [imageIndex, setImageIndex] = useState(0);
  const total = project.images.length;

  // Avança ou volta na galeria, voltando ao início/fim nas pontas.
  const goTo = (step) => setImageIndex((i) => (i + step + total) % total);

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        // Impede que cliques dentro do conteúdo fechem o modal.
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className={styles.close} onClick={onClose} aria-label="Fechar detalhes">
          <Icon name="close" size={22} />
        </button>

        <div className={styles.gallery}>
          <img
            src={project.images[imageIndex]}
            alt={`Imagem ${imageIndex + 1} de ${total} do projeto ${project.title}`}
          />
          {total > 1 && (
            <>
              <button
                type="button"
                className={`${styles.nav} ${styles.prev}`}
                onClick={() => goTo(-1)}
                aria-label="Imagem anterior"
              >
                <Icon name="arrowLeft" />
              </button>
              <button
                type="button"
                className={`${styles.nav} ${styles.next}`}
                onClick={() => goTo(1)}
                aria-label="Próxima imagem"
              >
                <Icon name="arrowRight" />
              </button>
            </>
          )}
        </div>

        <div className={styles.content}>
          <h3 id="modal-title" className={styles.title}>
            {project.title}
          </h3>
          <TagList items={project.technologies} />
          <p className={styles.description}>{project.description}</p>

          <h4 className={styles.subheading}>Destaques técnicos</h4>
          <ul className={styles.highlights}>
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className={styles.actions}>
            <Button href={project.repoUrl} external>
              <Icon name="github" size={18} /> Ver repositório
            </Button>
            {project.demoUrl && (
              <Button href={project.demoUrl} variant="secondary" external>
                <Icon name="external" size={18} /> Ver demonstração
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
