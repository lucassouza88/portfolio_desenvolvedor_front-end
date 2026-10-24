/**
 * Habilidades agrupadas por categoria.
 * `level` vai de 1 a 5 e é usado para desenhar a barra de proficiência.
 */
export const skillGroups = [
  {
    title: 'Front-end',
    skills: [
      { name: 'HTML5', level: 5 },
      { name: 'CSS3', level: 4 },
      { name: 'JavaScript (ES6+)', level: 4 },
      { name: 'React', level: 4 },
      { name: 'Responsividade', level: 4 },
    ],
  },
  {
    title: 'Estilização',
    skills: [
      { name: 'CSS Modules', level: 4 },
      { name: 'Styled Components', level: 3 },
      { name: 'Flexbox e Grid', level: 4 },
      { name: 'Sass', level: 3 },
    ],
  },
  {
    title: 'Ferramentas',
    skills: [
      { name: 'Git e GitHub', level: 4 },
      { name: 'Vite', level: 3 },
      { name: 'npm', level: 3 },
      { name: 'Vercel / Netlify', level: 3 },
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
