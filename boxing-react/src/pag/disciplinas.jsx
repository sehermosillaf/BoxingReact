import CardGroup from "react-bootstrap/CardGroup";
import { CardComponent } from "../componentes/cards/card-comp";
import Boxeo from "../img/disciplinas/boxeo.jpg";
import KickBoxing from "../img/disciplinas/kickboxing.jpg";
import Fitness from "../img/disciplinas/fitness.jpg";
import Footer from "../componentes/Footer/footer";

export const Disciplinas = () => {
  return (
    <>
      <CardGroup className="mx-auto mt-5" style={{ width: "80%" }}>
        <CardComponent
          titulo="Boxeo"
          desc="Deporte de contacto basado en golpes de puño sobre la cintura, posee un alto trabajo aeróbico, combinado con coordinación y técnica."
          img={Boxeo}
          linkText="Mas información"
        />

        <CardComponent
          titulo="KickBoxing"
          desc="Disciplina catalogada como arte marcial, puedes progresar mediante sistema de grados o cinturones.Combinación de golpes de puño y patadas."
          img={KickBoxing}
          linkText="Mas información"
        />
        <CardComponent
          titulo="Fitness Training"
          desc="Trabajo físico GAP (glúteos, abdomen y piernas)  focalizado.
HIT, entrenamiento de alta intensidad clave para mejorar el estado físico y ponerse en forma."
          img={Fitness}
          linkText="Mas información"
        />
      </CardGroup>

      <Footer></Footer>
    </>
  );
};
