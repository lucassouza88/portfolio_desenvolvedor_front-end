import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Hero from './sections/Hero/Hero.jsx';
import About from './sections/About/About.jsx';
import Projects from './sections/Projects/Projects.jsx';
import Skills from './sections/Skills/Skills.jsx';
import Contact from './sections/Contact/Contact.jsx';
import { navItems } from './data/navigation.js';
import { useActiveSection } from './hooks/useActiveSection.js';

/**
 * Componente raiz: monta o layout de página única (one-page)
 * e informa ao Header qual seção está visível no momento.
 */
export default function App() {
  const activeId = useActiveSection(navItems.map((item) => item.id));

  return (
    <>
      <Header items={navItems} activeId={activeId} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
