import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact" 
import Projects from "./components/projects/Projects"
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Topbar></Topbar>
      <div className="sections">
        <Intro></Intro>
        <Portfolio></Portfolio>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
