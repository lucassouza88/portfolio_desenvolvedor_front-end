import { useState } from 'react';
import Section from '../../components/Section/Section.jsx';
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx';
import ProjectModal from '../../components/ProjectModal/ProjectModal.jsx';
import { projects } from '../../data/projects.js';
import styles from './Projects.module.css';

/** Seção "Projetos": grade de cards e modal de detalhes ao clicar em um projeto. */
export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <Section
      id="projetos"
      eyebrow="Formação EBAC"
      title="Projetos desenvolvidos na EBAC"
      subtitle="Projetos criados durante meus estudos de Desenvolvimento Front-end na EBAC. Clique em um card para ver os detalhes."
    >
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setSelected} />
        ))}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </Section>
  );
}
