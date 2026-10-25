# Portfólio — Desenvolvedor Front-end

Portfólio pessoal desenvolvido em **React** para reunir os projetos que criei durante a formação em Desenvolvimento Front-end na **EBAC**, minhas habilidades e formas de contato.

🔗 **Acesse online:** https://SEU-USUARIO.github.io/NOME-DO-REPO/ <!-- substitua pelo link do deploy -->

---

## ✨ Funcionalidades

- **Página inicial** com resumo profissional e atalhos para as seções
- **Sobre Mim** com foto, apresentação, localização, e-mail e redes sociais
- **Projetos** em cards, com **filtro por tecnologia** e **modal de detalhes** (galeria de imagens navegável por clique ou setas do teclado, descrição, destaques técnicos e links)
- **Habilidades** agrupadas por categoria, com nível de proficiência, e competências comportamentais
- **Contato** com e-mail e botão "Copiar e-mail", além dos links para redes profissionais
- **Navegação** com menu fixo que destaca a seção visível e vira menu "hambúrguer" no mobile
- **Responsivo** (mobile-first) e com **tema claro/escuro** automático conforme o sistema
- **Acessibilidade**: HTML semântico, rótulos ARIA, foco visível, suporte a teclado e a `prefers-reduced-motion`

## 🛠️ Tecnologias

- [React 18](https://react.dev/) — componentes funcionais, props e hooks (`useState`, `useEffect`, `useMemo`, `useCallback`, `useRef`) e hooks customizados
- [Vite](https://vitejs.dev/) — ambiente de desenvolvimento e build
- **CSS Modules** — estilização modular, com escopo por componente
- **CSS Custom Properties** — tokens de design (cores, espaçamentos, raios) compartilhados

## 📁 Estrutura de pastas

```
src/
├── components/          # Componentes reutilizáveis (cada um com seu .module.css)
│   ├── Button/          # Botão/link com variantes
│   ├── Footer/
│   ├── Header/          # Menu fixo e responsivo
│   ├── Icon/            # Ícones SVG inline
│   ├── ProjectCard/     # Card de resumo do projeto
│   ├── ProjectModal/    # Detalhes do projeto com galeria
│   ├── Section/         # Wrapper padrão das seções (título, container)
│   ├── SkillBar/        # Habilidade com barra de nível
│   ├── SocialLinks/     # Links de redes sociais
│   └── Tag/             # Etiquetas de tecnologia
├── sections/            # Seções da página (Hero, About, Projects, Skills, Contact)
├── data/                # Conteúdo do portfólio (perfil, projetos, habilidades, menu)
├── hooks/               # Hook customizado useActiveSection (seção visível no menu)
├── styles/global.css    # Reset e tokens de design
├── App.jsx
└── main.jsx
public/images/           # Foto e capturas de tela dos projetos
```

Todo o **conteúdo** fica em `src/data/`, separado da **apresentação** (componentes). Para atualizar o portfólio, basta editar esses arquivos — por exemplo, adicionar um objeto em `projects.js` cria automaticamente um novo card, filtro e modal.

## 🚀 Como rodar localmente

Pré-requisitos: [Node.js](https://nodejs.org/) 18 ou superior.

```bash
# 1. Clone o repositório
git clone https://github.com/SEU-USUARIO/NOME-DO-REPO.git
cd NOME-DO-REPO

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

Outros comandos:

| Comando           | Descrição                                   |
| ----------------- | ------------------------------------------- |
| `npm run build`   | Gera a versão de produção na pasta `dist/`  |
| `npm run preview` | Serve localmente a versão gerada pelo build |

## 🌐 Deploy

O projeto está configurado para publicar em qualquer uma destas plataformas:

- **GitHub Pages** (já configurado): o workflow em `.github/workflows/deploy.yml` publica automaticamente a cada push na `main`. Basta ativar em *Settings → Pages → Source: GitHub Actions*.
- **Vercel / Netlify**: importe o repositório; o framework (Vite) é detectado automaticamente. Comando de build `npm run build`, pasta de saída `dist`.

## 📂 Projetos apresentados

Todos os projetos foram desenvolvidos durante a formação em **Desenvolvimento Front-end na EBAC**.

| Projeto | Descrição | Tecnologias |
| ------- | --------- | ----------- |
| [**Micro Cardápio**](https://github.com/lucassouza88/Micro-Cardapio) | Sistema de pedidos de restaurante dividido em três micro frontends unidos com Module Federation. | Next.js, Module Federation, Webpack |
| [**Blog com Next.js**](https://github.com/lucassouza88/blog-app-router) | Blog com páginas estáticas, rotas dinâmicas e metadata para SEO. [Ver online](https://blog-app-router-two.vercel.app) | Next.js, TypeScript, Vercel |
| [**Lista de Tarefas com Next.js 15**](https://github.com/lucassouza88/lista-next) | Server e Client Components, hook personalizado e testes unitários. | Next.js, TypeScript, Tailwind CSS, Jest |
| [**Pipeline de CI/CD**](https://github.com/lucassouza88/site-ci-cd) | Site com lint, build e deploy automáticos via GitHub Actions. [Ver online](https://lucassouza88.github.io/site-ci-cd/) | Next.js, GitHub Actions, GitHub Pages |
| [**Catálogo de Livros**](https://github.com/lucassouza88/catalogo-livros) | CRUD completo de livros consumindo uma API REST com Axios. | React, TypeScript, Vite, Axios |
| [**Todo React Avançado**](https://github.com/lucassouza88/Todo-React-Avan-ado) | Tarefas com Context API, hooks customizados e memoização. | React, Context API, Vite |
| [**Diário de Bordo (PWA)**](https://github.com/lucassouza88/Di-rio-de-Bordo) | Diário instalável que funciona offline com Service Worker. | PWA, JavaScript, HTML5, CSS3 |
| [**Cadastro com Busca de CEP**](https://github.com/lucassouza88/cadastro-usuarios-cep) | Formulário que preenche o endereço automaticamente pela API ViaCEP. | JavaScript, API REST |
| [**Agência Criativa Web**](https://github.com/lucassouza88/Ag-ncia-Criativa-Web---refatorado) | Site institucional responsivo com estilos organizados em SASS. | HTML5, SASS, CSS3 |

## 👤 Autor

**Lucas de Paula Souza** — [GitHub](https://github.com/lucassouza88) · lucasdepaulasouza23@gmail.com
