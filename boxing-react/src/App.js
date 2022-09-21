import "./App.css";
import { Inicio } from "./pag/inicio";
import { Disciplinas } from "./pag/disciplinas";
import { Navigation } from "./componentes/navbar/navbar";
import { FormularioLogin } from "./componentes/formuluario/form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Instructores } from "./pag/instructores";

function App() {
  return (
    <>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/Inicio" element={<Inicio />}></Route>
        <Route path="/Disciplinas" element={<Disciplinas />}></Route>
        <Route path="/Login" element={<FormularioLogin />}></Route>
        <Route path="/Instructores" element={<Instructores/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
