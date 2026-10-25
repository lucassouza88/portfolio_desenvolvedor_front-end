import Section from '../../components/Section/Section.jsx';
import SocialLinks from '../../components/SocialLinks/SocialLinks.jsx';
import Icon from '../../components/Icon/Icon.jsx';
import { profile } from '../../data/profile.js';
import styles from './Contact.module.css';

/** Seção "Contato": e-mail e links para as redes profissionais. */
export default function Contact() {
  return (
    <Section
      id="contato"
      eyebrow="Contato"
      title="Vamos conversar?"
      subtitle="Tem uma vaga, um projeto ou só quer trocar uma ideia? Me mande um e-mail ou me encontre nas redes."
    >
      <div className={styles.card}>
        <p className={styles.email}>
          <Icon name="mail" size={20} />
          <span className={styles.address}>{profile.email}</span>
        </p>
        <SocialLinks links={profile.socials} />
      </div>
    </Section>
  );
}
