
import './App.css';
import {Disciplinas} from './pages/disciplinas'
import { Horarios } from './pages/horarios';
import { Navigation } from './componentes/navbar/navbar';
import Footer from './componentes/Footer/footer';

function App() {
  return (
    <>
    <Navigation/>
    <Disciplinas/>
    <Horarios/>
    <Footer/>
   </>
  );
}

export default App;

