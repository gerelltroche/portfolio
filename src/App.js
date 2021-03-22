import './App.css';
import Header from './Header';
import Navigation from "./Navigation";
import Projects from "./Projects";
import projects from "./projects.json";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <div id={'main'}>
          <Projects projects={projects} />
      </div>
    </div>
  );
}

export default App;
