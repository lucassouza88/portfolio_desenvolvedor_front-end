import Header from './components/Header/Header.jsx';
import Hero from './sections/Hero/Hero.jsx';
import About from './sections/About/About.jsx';
import Projects from './sections/Projects/Projects.jsx';
import Skills from './sections/Skills/Skills.jsx';
import Contact from './sections/Contact/Contact.jsx';
import { navItems } from './data/navigation.js';

/** Componente raiz: monta o layout de página única (one-page). */
export default function App() {
  return (
    <>
      <Header items={navItems} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
