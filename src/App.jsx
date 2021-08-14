import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact" 
import Skills from "./components/skills/Skill"
import Menu from "./components/menu/Menu"

import "./app.scss"
import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Topbar>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
      <div className="sections">
        <Intro></Intro>
        <Portfolio></Portfolio>
        <Skills></Skills>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
