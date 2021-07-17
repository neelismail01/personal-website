import './App.css';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Intro />
      <Welcome />
      <Projects />
    </div>
  );
}

export default App;
