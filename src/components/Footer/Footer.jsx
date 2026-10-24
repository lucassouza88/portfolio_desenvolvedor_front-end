import SocialLinks from '../SocialLinks/SocialLinks.jsx';
import { profile } from '../../data/profile.js';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          © {year} {profile.name}. Feito com React.
        </p>
        <SocialLinks links={profile.socials} compact />
      </div>
    </footer>
  );
}
