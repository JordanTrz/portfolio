import "./app.scss";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
