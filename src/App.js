import React, { useState, useEffect } from 'react';

import Navbar         from './components/Navbar';
import SectionWrapper from './components/SectionWrapper';
import Home           from './sections/Home';
import About          from './sections/About';
import Skills         from './sections/Skills';
import Projects       from './sections/Projects';
import Contact        from './sections/Contact';

import './styles/variables.css';
import './styles/global.css';

function App() {
  /* ── Theme state (persisted in localStorage) ── */
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  /* Apply [data-theme] attribute to <html> and persist */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <SectionWrapper id="home">
          <Home />
        </SectionWrapper>

        <SectionWrapper id="about">
          <About />
        </SectionWrapper>

        <SectionWrapper id="skills">
          <Skills />
        </SectionWrapper>

        <SectionWrapper id="projects">
          <Projects />
        </SectionWrapper>

        <SectionWrapper id="contact">
          <Contact />
        </SectionWrapper>
      </main>
    </div>
  );
}

export default App;
