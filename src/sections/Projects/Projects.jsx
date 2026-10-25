import { useMemo, useState } from 'react';
import Section from '../../components/Section/Section.jsx';
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx';
import ProjectModal from '../../components/ProjectModal/ProjectModal.jsx';
import { projects } from '../../data/projects.js';
import styles from './Projects.module.css';

const ALL = 'Todos';

/**
 * Seção "Projetos": grade de cards com filtro por tecnologia
 * e modal de detalhes ao clicar em um projeto.
 */
export default function Projects() {
  const [filter, setFilter] = useState(ALL);
  const [selected, setSelected] = useState(null);

  // Lista única de tecnologias, usada para montar os botões de filtro.
  const technologies = useMemo(
    () => [ALL, ...new Set(projects.flatMap((project) => project.technologies))],
    [],
  );

  const visibleProjects =
    filter === ALL ? projects : projects.filter((p) => p.technologies.includes(filter));

  return (
    <Section
      id="projetos"
      eyebrow="Formação EBAC"
      title="Projetos desenvolvidos na EBAC"
      subtitle="Projetos criados durante meus estudos de Desenvolvimento Front-end na EBAC. Clique em um card para ver os detalhes."
    >
      <div className={styles.filters} role="group" aria-label="Filtrar por tecnologia">
        {technologies.map((tech) => (
          <button
            key={tech}
            type="button"
            className={`${styles.filter} ${filter === tech ? styles.filterActive : ''}`}
            aria-pressed={filter === tech}
            onClick={() => setFilter(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setSelected} />
        ))}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </Section>
  );
}
