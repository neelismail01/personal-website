import './App.css';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import Welcome from './components/Welcome/Welcome';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Intro />
      <Welcome />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
