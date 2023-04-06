import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

import '@fontsource/roboto'
let Theme = "";

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div className='Container'>
        <Home/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact/>
      </div>
      
    </div>
  );
}

export default App;
