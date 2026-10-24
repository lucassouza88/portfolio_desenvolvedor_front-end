import Icon from '../Icon/Icon.jsx';
import styles from './SocialLinks.module.css';

/**
 * Lista de links para redes sociais.
 * Reutilizada no "Sobre Mim", no "Contato" e no rodapé.
 *
 * @param {boolean} compact - mostra apenas os ícones (sem rótulo)
 */
export default function SocialLinks({ links, compact = false }) {
  return (
    <ul className={`${styles.list} ${compact ? styles.compact : ''}`}>
      {links.map((link) => {
        const isMail = link.url.startsWith('mailto:');
        return (
          <li key={link.label}>
            <a
              href={link.url}
              className={styles.link}
              aria-label={compact ? link.label : undefined}
              {...(isMail ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
            >
              <Icon name={link.icon} size={compact ? 20 : 18} />
              {!compact && <span>{link.label}</span>}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
