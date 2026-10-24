import styles from './Tag.module.css';

/** Etiqueta usada para tecnologias e competências. */
export default function Tag({ children }) {
  return <li className={styles.tag}>{children}</li>;
}

/** Lista de etiquetas a partir de um array de textos. */
export function TagList({ items }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </ul>
  );
}
