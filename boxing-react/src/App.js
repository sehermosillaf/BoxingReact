
import './App.css';
import {Disciplinas} from './pages/disciplinas'
import { Horarios } from './pages/horarios';
import { Navigation } from './componentes/navbar/navbar';

function App() {
  return (
    <>
    <Navigation/>
    <Disciplinas/>
    <Horarios/>
   </>
  );
}

export default App;

