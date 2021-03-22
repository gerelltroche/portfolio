import './App.css';
import Header from './Header';
import Navigation from "./Navigation";
import Projects from "./Projects";
import projects from "./projects.json";
import Skills from './Skills';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <div id={'main'}>
          <Navigation />
          <div id={'projects'}><Projects projects={projects} /></div>
          <div id={'skills'}><Skills /></div>
      </div>
        <div><Contact /></div>
    </div>
  );
}

export default App;
