import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import '@fontsource/roboto'
import { useState } from 'react';




function App() {
  const [currentComponent, setCurrentComponent] = useState('home');

  const handleClick = (component) => {
    setCurrentComponent(component);
  };

  return (
    <div className="App">
      <Sidebar handleClick={handleClick} />
      <div className='Container'>
        {currentComponent === 'home' && <Home />}
        {currentComponent === 'about' && <About handleClick={handleClick} />}
        {currentComponent === 'skills' && <Skills />}
        {currentComponent === 'portfolio' && <Portfolio />}
        {currentComponent === 'contact' && <Contact/>}

      </div>
    </div>
  );
}

export default App;
