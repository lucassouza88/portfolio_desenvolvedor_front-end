import { useEffect, useState } from 'react';

/**
 * Observa as seções da página e retorna o id da que está visível,
 * usado para destacar o item correspondente no menu.
 *
 * @param {string[]} ids - ids das <section> a observar, na ordem da página
 * @returns {string} id da seção ativa
 */
export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0]);
  // Serializa os ids para que o efeito só rode de novo se a lista mudar de fato.
  const key = ids.join(',');

  useEffect(() => {
    const elements = key
      .split(',')
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      // Considera ativa a seção que cruza a faixa central da tela.
      { rootMargin: '-45% 0px -50% 0px' },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);

  return activeId;
}
