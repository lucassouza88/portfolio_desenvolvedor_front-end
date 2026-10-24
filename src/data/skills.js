/**
 * Habilidades agrupadas por categoria.
 * `level` vai de 1 a 5 e é usado para desenhar a barra de proficiência.
 */
export const skillGroups = [
  {
    title: 'Front-end',
    skills: [
      { name: 'HTML5 e CSS3', level: 5 },
      { name: 'JavaScript (ES6+)', level: 4 },
      { name: 'TypeScript', level: 3 },
      { name: 'React', level: 4 },
      { name: 'Next.js (App Router)', level: 3 },
      { name: 'Consumo de APIs REST', level: 4 },
    ],
  },
  {
    title: 'Estilização',
    skills: [
      { name: 'Flexbox e Grid', level: 4 },
      { name: 'SASS', level: 4 },
      { name: 'Tailwind CSS', level: 3 },
      { name: 'Bootstrap', level: 3 },
      { name: 'CSS Modules', level: 4 },
    ],
  },
  {
    title: 'Ferramentas e práticas',
    skills: [
      { name: 'Git e GitHub', level: 4 },
      { name: 'GitHub Actions (CI/CD)', level: 3 },
      { name: 'Testes com Jest', level: 3 },
      { name: 'PWA e Service Workers', level: 3 },
      { name: 'Micro frontends', level: 2 },
      { name: 'Vite, Vercel e GitHub Pages', level: 4 },
    ],
  },
];

/** Competências comportamentais, exibidas como etiquetas. */
export const softSkills = [
  'Trabalho em equipe',
  'Comunicação',
  'Resolução de problemas',
  'Aprendizado contínuo',
  'Organização',
];
