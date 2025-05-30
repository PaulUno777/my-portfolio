import { Route, BrowserRouter, Routes } from "react-router";
import { Nav } from "./components/nav/Nav";
import { About } from "./components/about/About";
import { Project } from "./components/project/Project";
import { Contacts } from "./components/contacts/Contacts";
import { Skills } from "./components/skills/Skills";
import { Background } from "./components/background/Background";
import { Player } from "./components/player/Player";

function App() {
  return (
    <BrowserRouter>
      <Background />
      <Nav />
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Project/>} />
        <Route path="/contacts" element={<Contacts/>} />
      </Routes>
      <Player/>
    </BrowserRouter>
  );
}

export default App;
