import { useState } from 'react';
import Icon from '../Icon/Icon.jsx';
import { profile } from '../../data/profile.js';
import styles from './Header.module.css';

/**
 * Cabeçalho fixo com navegação entre seções.
 * No mobile, o menu vira uma gaveta aberta pelo botão "hambúrguer".
 *
 * @param {{id: string, label: string}[]} items - itens do menu
 */
export default function Header({ items }) {
  const [isOpen, setIsOpen] = useState(false);

  // Iniciais do primeiro e do último nome (ignora "de", "da" etc.).
  const names = profile.name.split(' ').filter((word) => word.length > 2);
  const initials = `${names[0][0]}${names.length > 1 ? names[names.length - 1][0] : ''}`;

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#inicio" className={styles.logo} aria-label="Voltar ao início">
          <span className={styles.logoMark}>{initials}</span>
          <span>{names[0]}</span>
        </a>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={isOpen}
          aria-controls="menu-principal"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          <Icon name={isOpen ? 'close' : 'menu'} size={24} />
        </button>

        <nav
          id="menu-principal"
          className={`${styles.nav} ${isOpen ? styles.open : ''}`}
          aria-label="Navegação principal"
        >
          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={styles.link} onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
