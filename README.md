# Portfólio — Desenvolvedor Front-end

Portfólio pessoal desenvolvido em **React** para reunir meus principais projetos do curso, minhas habilidades e formas de contato.

🔗 **Acesse online:** https://SEU-USUARIO.github.io/NOME-DO-REPO/ <!-- substitua pelo link do deploy -->

---

## ✨ Funcionalidades

- **Página inicial** com resumo profissional e atalhos para as seções
- **Sobre Mim** com foto, apresentação, localização, e-mail e redes sociais
- **Projetos** em cards, com **filtro por tecnologia** e **modal de detalhes** (galeria de imagens navegável por clique ou setas do teclado, descrição, destaques técnicos e links)
- **Habilidades** agrupadas por categoria, com nível de proficiência, e competências comportamentais
- **Contato** com formulário validado e links para redes profissionais
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
│   ├── FormField/       # Campo de formulário com rótulo e erro
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
├── hooks/               # Hooks customizados (useActiveSection, useContactForm)
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

### Formulário de contato (opcional)

Por padrão, o formulário valida os campos e abre o cliente de e-mail do visitante com a mensagem preenchida. Para receber as mensagens diretamente, crie um formulário gratuito no [Formspree](https://formspree.io), copie `.env.example` para `.env` e preencha `VITE_FORMSPREE_ID`.

## 🌐 Deploy

O projeto está configurado para publicar em qualquer uma destas plataformas:

- **GitHub Pages** (já configurado): o workflow em `.github/workflows/deploy.yml` publica automaticamente a cada push na `main`. Basta ativar em *Settings → Pages → Source: GitHub Actions*.
- **Vercel / Netlify**: importe o repositório; o framework (Vite) é detectado automaticamente. Comando de build `npm run build`, pasta de saída `dist`.

## 📂 Projetos apresentados

| Projeto | Descrição | Tecnologias |
| ------- | --------- | ----------- |
| **Lista de Tarefas** | Gerenciador de tarefas com criação, edição, filtros por status e persistência no `localStorage`. | HTML5, CSS3, JavaScript |
| **App de Clima** | Consulta a previsão do tempo em uma API pública, com tratamento de carregamento e erros. | React, Vite, CSS Modules, API REST |
| **Loja Virtual** | E-commerce com catálogo, detalhes do produto, carrinho com total e rotas; estado global via Context API. | React, React Router, Context API, Styled Components |

## 👤 Autor

**Lucas de Paula Souza** — [LinkedIn](https://www.linkedin.com/in/seu-usuario) · [GitHub](https://github.com/seu-usuario) · lucasdepaulasouza23@gmail.com
