import "./App.css";
import { Inicio } from "./pag/inicio";
import { Disciplinas } from "./pag/disciplinas";
import { Horarios } from "./pag/horarios";
import { Navigation } from "./componentes/navbar/navbar";
import Footer from "./componentes/Footer/footer";
import { FormularioLogin } from "./componentes/formuluario/form";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/Disciplinas" element={<Disciplinas />}></Route>
        <Route path="/Horarios" element={<Horarios />}></Route>
        <Route path="/Contacto" element={<Footer />}></Route>
      </Routes>
    </Router>
    <FormularioLogin/>
    </>
  );
}

export default App;
