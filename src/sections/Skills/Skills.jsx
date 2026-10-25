import Section from '../../components/Section/Section.jsx';
import { TagList } from '../../components/Tag/Tag.jsx';
import { skillGroups, softSkills } from '../../data/skills.js';
import styles from './Skills.module.css';

/** Seção "Habilidades": tecnologias por categoria e competências comportamentais. */
export default function Skills() {
  return (
    <Section
      id="habilidades"
      eyebrow="Habilidades"
      title="Tecnologias e competências"
      subtitle="Tecnologias que utilizei nos projetos da EBAC e nos meus estudos."
      alt
    >
      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <article key={group.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{group.title}</h3>
            <TagList items={group.skills} />
          </article>
        ))}
      </div>

      <div className={styles.soft}>
        <h3 className={styles.cardTitle}>Competências comportamentais</h3>
        <TagList items={softSkills} />
      </div>
    </Section>
  );
}
