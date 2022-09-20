
import './App.css';
import {Disciplinas} from './pages/disciplinas'
import { Horarios } from './pages/horarios';
import { Calendar } from './componentes/calendar/calendar';

function App() {
  return (
    <>
    <Calendar/>
    <Horarios/>
   <Disciplinas/>
   </>
  );
}

export default App;

