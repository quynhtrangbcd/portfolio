import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Tools from './components/Tools';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-dark selection:bg-accent selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Tools />
      </main>
      <Contact />
    </div>
  );
};

export default App;