import Section from '../../components/Section/Section.jsx';
import SocialLinks from '../../components/SocialLinks/SocialLinks.jsx';
import { profile } from '../../data/profile.js';
import styles from './Contact.module.css';

/** Seção "Contato": links para as redes profissionais. */
export default function Contact() {
  return (
    <Section
      id="contato"
      eyebrow="Contato"
      title="Vamos conversar?"
      subtitle="Tem uma vaga, um projeto ou só quer trocar uma ideia? Me encontre nas redes abaixo."
    >
      <div className={styles.card}>
        <SocialLinks links={profile.socials} />
      </div>
    </Section>
  );
}
