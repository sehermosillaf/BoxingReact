import CardGroup from "react-bootstrap/CardGroup";
import { CardComponent } from "../componentes/cards/card-comp";
import Boxeo from "../img/boxeo.jpg";
import KickBoxing from "../img/kickboxing.jpg";
import Fitness from "../img/fitness.jpg";

export const Disciplinas = () => {
  return (
    <CardGroup className="mx-auto mt-5" style={{ width: "80%" }}>
      <CardComponent
        titulo="Boxeo"
        desc="Deporte de contacto basado en golpes de puño sobre la cintura.Alto trabajo aeróbico, combinado con coordinación y técnica."
        img={Boxeo}
        linkText="Mas informacion"
      />

      <CardComponent
        titulo="KickBoxing"
        desc="Disciplina catalogada como arte marcial, puedes progresar mediante sistema de grados o cinturones.Combinación de golpes de puño y patadas."
        img={KickBoxing}
        linkText="Mas informacion"
      />
      <CardComponent
        titulo="Fitness Training"
        desc="Trabajo físico GAP (glúteos, abdomen y piernas)  focalizado.
HIT (High Intensity Training) entrenamiento de alta intensidad clave para mejorar el estado físico y ponerse en forma."
        img={Fitness}
        linkText="Mas informacion"
      />
    </CardGroup>
    
  );
};
