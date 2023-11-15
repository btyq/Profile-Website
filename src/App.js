import React, { useRef } from 'react';
import './App.css';
import Navbar from  './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {

  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const bgColor = {
    backgroundColor: '#1A202C',
    minHeight: '100vh', 
  };

  return (
    <div style={bgColor}>
      <Navbar
        aboutRef={aboutRef}
        projectRef={projectRef}
        experienceRef={experienceRef}
        contactRef={contactRef}
      />
      <Home />
      <About refProp={aboutRef}/>
      <Project refProp={projectRef}/>
      <Experience refProp={experienceRef}/>
      <Contact refProp={contactRef}/>
    </div>
  );
}

export default App;
