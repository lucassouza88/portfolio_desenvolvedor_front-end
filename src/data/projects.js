/**
 * Projetos exibidos na seção "Projetos".
 * Para adicionar um projeto, basta incluir um novo objeto no array:
 * o componente ProjectCard e o modal de detalhes são gerados automaticamente.
 * As imagens ficam em /public/images/projects.
 */
export const projects = [
  {
    id: 'lista-tarefas',
    title: 'Lista de Tarefas',
    summary: 'Gerenciador de tarefas com filtros e persistência no navegador.',
    description:
      'Aplicação para criar, editar, concluir e excluir tarefas. As tarefas são salvas no localStorage, ' +
      'permitindo que o usuário feche o navegador sem perder nada. Conta com filtros por status ' +
      '(todas, pendentes e concluídas) e contador de itens restantes.',
    highlights: [
      'Manipulação do DOM com JavaScript puro',
      'Persistência de dados com localStorage',
      'Layout responsivo com Flexbox',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    images: ['images/projects/tarefas-1.svg', 'images/projects/tarefas-2.svg'],
    repoUrl: 'https://github.com/seu-usuario/lista-de-tarefas',
    demoUrl: '',
  },
  {
    id: 'app-clima',
    title: 'App de Clima',
    summary: 'Previsão do tempo em tempo real consumindo uma API pública.',
    description:
      'Aplicação React que consulta a API OpenWeather para exibir temperatura, umidade, vento ' +
      'e a previsão dos próximos dias da cidade pesquisada. Trata estados de carregamento e erro ' +
      'e lembra a última cidade buscada.',
    highlights: [
      'Consumo de API REST com fetch e async/await',
      'Hooks useState, useEffect e hook customizado useWeather',
      'Tratamento de loading e erros',
    ],
    technologies: ['React', 'Vite', 'CSS Modules', 'API REST'],
    images: ['images/projects/clima-1.svg', 'images/projects/clima-2.svg'],
    repoUrl: 'https://github.com/seu-usuario/app-clima',
    demoUrl: '',
  },
  {
    id: 'loja-virtual',
    title: 'Loja Virtual',
    summary: 'E-commerce com catálogo, carrinho e rotas.',
    description:
      'Front-end de uma loja virtual com listagem de produtos, página de detalhes, carrinho de ' +
      'compras com cálculo de total e navegação entre páginas. O estado do carrinho é compartilhado ' +
      'entre componentes através da Context API.',
    highlights: [
      'Roteamento com React Router',
      'Estado global com Context API',
      'Estilização com Styled Components',
    ],
    technologies: ['React', 'React Router', 'Context API', 'Styled Components'],
    images: ['images/projects/loja-1.svg', 'images/projects/loja-2.svg'],
    repoUrl: 'https://github.com/seu-usuario/loja-virtual',
    demoUrl: '',
  },
];
