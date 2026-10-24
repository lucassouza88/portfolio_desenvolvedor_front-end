/**
 * Projetos exibidos na seção "Projetos" — todos desenvolvidos durante
 * a formação em Desenvolvimento Front-end na EBAC.
 *
 * Para adicionar um projeto, basta incluir um novo objeto no array:
 * o ProjectCard, o filtro por tecnologia e o modal de detalhes são gerados automaticamente.
 * As imagens ficam em /public/images/projects.
 */
const GITHUB = 'https://github.com/lucassouza88';

export const projects = [
  {
    id: 'micro-cardapio',
    title: 'Micro Cardápio',
    summary: 'Sistema de pedidos de restaurante dividido em micro frontends.',
    description:
      'Sistema de pedidos dividido em três aplicações independentes — container, cardápio e pedido — ' +
      'unidas em tempo de execução com Webpack Module Federation. Os micro frontends se comunicam por ' +
      'eventos, e se um deles estiver fora do ar o container mostra um aviso só no lugar dele, sem ' +
      'derrubar o restante da página.',
    highlights: [
      'Arquitetura de micro frontends com Module Federation',
      'Comunicação entre aplicações via eventos customizados',
      'Monorepo com npm workspaces e hooks customizados (usePedido, useResumoPedido)',
    ],
    technologies: ['Next.js', 'Module Federation', 'Webpack', 'JavaScript'],
    images: ['images/projects/micro-cardapio-1.svg', 'images/projects/micro-cardapio-2.svg'],
    repoUrl: `${GITHUB}/Micro-Cardapio`,
    demoUrl: '',
  },
  {
    id: 'blog-next',
    title: 'Blog com Next.js',
    summary: 'Blog com páginas estáticas, rotas dinâmicas e SEO, publicado na Vercel.',
    description:
      'Blog construído com o App Router do Next.js. A home lista os artigos em cards e cada artigo tem ' +
      'sua própria página estática gerada no build, com metadata dinâmica para SEO. Em uma segunda ' +
      'versão, o projeto passou por um estudo de performance: medir, diagnosticar, otimizar e comparar.',
    highlights: [
      'Rotas dinâmicas (/artigos/[slug]) com geração estática',
      'Metadata dinâmica para SEO',
      'Deploy contínuo na Vercel e relatórios de performance',
    ],
    technologies: ['Next.js', 'TypeScript', 'App Router', 'Vercel'],
    images: ['images/projects/blog-next-1.svg', 'images/projects/blog-next-2.svg'],
    repoUrl: `${GITHUB}/blog-app-router`,
    demoUrl: 'https://blog-app-router-two.vercel.app',
  },
  {
    id: 'lista-next',
    title: 'Lista de Tarefas com Next.js 15',
    summary: 'Lista de tarefas com Server e Client Components e testes automatizados.',
    description:
      'Aplicação de tarefas feita para praticar a divisão entre componentes de servidor e de cliente ' +
      'no App Router do Next.js 15. Conta com um hook personalizado para contar as tarefas e uma suíte ' +
      'de testes unitários cobrindo componentes, página e hook.',
    highlights: [
      'Server Components e Client Components',
      'Hook personalizado useContadorDeTarefas',
      'Testes unitários com Jest e Testing Library',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Jest'],
    images: ['images/projects/lista-next-1.svg', 'images/projects/lista-next-2.svg'],
    repoUrl: `${GITHUB}/lista-next`,
    demoUrl: '',
  },
  {
    id: 'site-ci-cd',
    title: 'Pipeline de CI/CD',
    summary: 'Site Next.js com integração e entrega contínuas no GitHub Actions.',
    description:
      'Projeto criado para demonstrar um pipeline completo de Integração Contínua (CI) e Entrega ' +
      'Contínua (CD). A cada push, o GitHub Actions instala as dependências, roda lint e testes, ' +
      'gera o build de produção e publica o site automaticamente no GitHub Pages.',
    highlights: [
      'Workflow do GitHub Actions com lint, testes e build',
      'Deploy automático no GitHub Pages',
      'Exportação estática do Next.js',
    ],
    technologies: ['Next.js', 'TypeScript', 'GitHub Actions', 'GitHub Pages'],
    images: ['images/projects/site-ci-cd-1.svg', 'images/projects/site-ci-cd-2.svg'],
    repoUrl: `${GITHUB}/site-ci-cd`,
    demoUrl: 'https://lucassouza88.github.io/site-ci-cd/',
  },
  {
    id: 'catalogo-livros',
    title: 'Catálogo de Livros',
    summary: 'CRUD de livros em React com TypeScript consumindo uma API REST.',
    description:
      'Catálogo onde é possível cadastrar, listar, editar e remover livros. Todas as operações são ' +
      'feitas em uma API REST com Axios (GET, POST, PUT e DELETE), com uma camada de serviços ' +
      'separada dos componentes e tipagem dos dados com TypeScript.',
    highlights: [
      'CRUD completo com Axios (GET, POST, PUT, DELETE)',
      'Camada de serviços isolada (services/api.ts)',
      'Tipagem com TypeScript e componentes reutilizáveis',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Axios', 'API REST'],
    images: ['images/projects/catalogo-livros-1.svg', 'images/projects/catalogo-livros-2.svg'],
    repoUrl: `${GITHUB}/catalogo-livros`,
    demoUrl: '',
  },
  {
    id: 'todo-react',
    title: 'Todo React Avançado',
    summary: 'Gerenciador de tarefas com estado global e otimização de renderização.',
    description:
      'Lista de tarefas que explora recursos avançados do React: estado global com Context API, ' +
      'hooks customizados para formulários e persistência no localStorage, filtros por status e ' +
      'memoização para evitar renderizações desnecessárias.',
    highlights: [
      'Estado global com Context API',
      'Hooks customizados useInput e useLocalStorage',
      'Otimização com useMemo e React.memo',
    ],
    technologies: ['React', 'Vite', 'Context API', 'JavaScript'],
    images: ['images/projects/todo-react-1.svg', 'images/projects/todo-react-2.svg'],
    repoUrl: `${GITHUB}/Todo-React-Avan-ado`,
    demoUrl: '',
  },
  {
    id: 'diario-bordo',
    title: 'Diário de Bordo (PWA)',
    summary: 'Diário instalável que funciona offline.',
    description:
      'Progressive Web App para registrar anotações com título e texto. Os registros ficam salvos no ' +
      'localStorage, o Service Worker faz cache dos arquivos para uso offline e o app pode ser ' +
      'instalado no celular ou no computador por um botão próprio.',
    highlights: [
      'Service Worker com cache para funcionamento offline',
      'Web App Manifest e botão de instalação',
      'Persistência dos registros com localStorage',
    ],
    technologies: ['PWA', 'Service Worker', 'JavaScript', 'HTML5', 'CSS3'],
    images: ['images/projects/diario-bordo-1.svg', 'images/projects/diario-bordo-2.svg'],
    repoUrl: `${GITHUB}/Di-rio-de-Bordo`,
    demoUrl: '',
  },
  {
    id: 'cadastro-cep',
    title: 'Cadastro com Busca de CEP',
    summary: 'Formulário que preenche o endereço automaticamente pelo CEP.',
    description:
      'Formulário de cadastro de usuários que, ao informar o CEP, consulta a API pública ViaCEP e ' +
      'preenche logradouro, bairro, cidade e estado automaticamente, tratando CEPs inválidos ou ' +
      'inexistentes.',
    highlights: [
      'Consumo da API ViaCEP com fetch e async/await',
      'Preenchimento automático de campos do formulário',
      'Tratamento de erros para CEP não encontrado',
    ],
    technologies: ['JavaScript', 'API REST', 'HTML5', 'CSS3'],
    images: ['images/projects/cadastro-cep-1.svg', 'images/projects/cadastro-cep-2.svg'],
    repoUrl: `${GITHUB}/cadastro-usuarios-cep`,
    demoUrl: '',
  },
  {
    id: 'agencia-criativa',
    title: 'Agência Criativa Web',
    summary: 'Site institucional responsivo com estilos organizados em SASS.',
    description:
      'Site de uma agência de design digital com seções de apresentação, sobre, serviços, depoimentos ' +
      'e contato. Na versão refatorada, os estilos foram reorganizados em SASS com variáveis, mixins ' +
      'e parciais separados por responsabilidade.',
    highlights: [
      'SASS com variáveis, mixins e parciais',
      'Layout responsivo com Flexbox, Grid e unidades relativas',
      'HTML semântico dividido em seções',
    ],
    technologies: ['HTML5', 'SASS', 'CSS3'],
    images: ['images/projects/agencia-criativa-1.svg', 'images/projects/agencia-criativa-2.svg'],
    repoUrl: `${GITHUB}/Ag-ncia-Criativa-Web---refatorado`,
    demoUrl: '',
  },
];
