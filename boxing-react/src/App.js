import "./App.css";
import { Inicio } from "./pag/inicio";
import { Disciplinas } from "./pag/disciplinas";
import { ReservaClases } from "./pag/reservar-clases";
import { Navigation } from "./componentes/navbar/navbar";
import { FormularioLogin } from "./componentes/formuluario/form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Instructores } from "./pag/instructores";
import { Planes } from "./pag/planes";
 
function App() {
  return (
    <>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/Inicio" element={<Inicio />}></Route>
        <Route path="/Disciplinas" element={<Disciplinas />}></Route>
        <Route path="/Instructores" element={<Instructores/>}></Route>
        <Route path="/Planes" element={<Planes/>}></Route>
        <Route path="/Reserva'" element={<ReservaClases />}></Route>
        <Route path="/Login" element={<FormularioLogin />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
