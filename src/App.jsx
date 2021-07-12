import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact" 
import Projects from "./components/projects/Projects"
import "./app.scss"
import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Topbar>
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
