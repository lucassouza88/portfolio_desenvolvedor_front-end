import Section from '../../components/Section/Section.jsx';
import SocialLinks from '../../components/SocialLinks/SocialLinks.jsx';
import Icon from '../../components/Icon/Icon.jsx';
import { profile } from '../../data/profile.js';
import styles from './About.module.css';

/** Seção "Sobre Mim": foto, apresentação e informações de contato. */
export default function About() {
  return (
    <Section id="sobre" eyebrow="Sobre mim" title="Quem sou eu" alt>
      <div className={styles.grid}>
        <figure className={styles.photo}>
          <img src={profile.photo} alt={`Foto de ${profile.name}`} />
        </figure>

        <div className={styles.text}>
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <ul className={styles.info}>
            <li>
              <Icon name="pin" size={18} /> {profile.location}
            </li>
            <li>
              <Icon name="mail" size={18} />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
          </ul>

          <SocialLinks links={profile.socials} />
        </div>
      </div>
    </Section>
  );
}
