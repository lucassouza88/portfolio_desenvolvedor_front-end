import styles from './Section.module.css';

/**
 * Wrapper padrão de seção: aplica espaçamento, largura máxima e título.
 * Todas as seções da página usam este componente para manter consistência.
 *
 * @param {string} id - âncora usada pela navegação
 * @param {string} eyebrow - texto pequeno acima do título
 * @param {boolean} alt - usa o fundo alternativo para separar visualmente
 */
export default function Section({ id, eyebrow, title, subtitle, alt = false, children }) {
  return (
    <section id={id} className={`${styles.section} ${alt ? styles.alt : ''}`}>
      <div className={styles.container}>
        {title && (
          <header className={styles.header}>
            {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
