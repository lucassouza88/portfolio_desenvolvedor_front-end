import styles from './FormField.module.css';

/**
 * Campo de formulário com rótulo e mensagem de erro acessível.
 *
 * @param {'input' | 'textarea'} as - elemento a renderizar
 * @param {string} error - mensagem de erro (campo inválido quando presente)
 */
export default function FormField({ label, name, as = 'input', error, ...rest }) {
  const Element = as;
  const fieldId = `field-${name}`;
  const errorId = `${fieldId}-error`;

  return (
    <div className={styles.field}>
      <label htmlFor={fieldId} className={styles.label}>
        {label}
      </label>
      <Element
        id={fieldId}
        name={name}
        className={`${styles.control} ${error ? styles.invalid : ''}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        {...rest}
      />
      {error && (
        <span id={errorId} className={styles.error}>
          {error}
        </span>
      )}
    </div>
  );
}
