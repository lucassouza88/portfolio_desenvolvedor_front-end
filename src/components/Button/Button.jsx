import styles from './Button.module.css';

/**
 * Botão reutilizável. Renderiza <a> quando recebe `href` e <button> caso contrário.
 *
 * @param {'primary' | 'secondary' | 'ghost'} variant - estilo visual
 * @param {boolean} external - abre o link em nova aba com rel seguro
 */
export default function Button({
  href,
  variant = 'primary',
  external = false,
  className = '',
  children,
  ...rest
}) {
  const classes = `${styles.button} ${styles[variant]} ${className}`.trim();

  if (href) {
    const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    return (
      <a href={href} className={classes} {...externalProps} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
