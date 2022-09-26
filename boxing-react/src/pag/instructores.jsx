import CardGroup from "react-bootstrap/CardGroup";

import { CardComponent } from "../componentes/cards/card-comp";
import Footer from "../componentes/Footer/footer";
import { CheckRadioBtn } from "../componentes/formuluario/checkbox-radiobtn";
import instructor_2 from "../img/instructores/instructor_2.jpg";
import instructor_1 from "../img/instructores/instructor_1.jpg";
import instructor_3 from "../img/instructores/instructor_3.jpg";
import instructor_4 from "../img/instructores/instructor_4.jpg";
import instructor_5 from "../img/instructores/instructor_5.jpg";
import instructor_6 from "../img/instructores/instructor_6.jpg";

export const Instructores = () => {
  return (
    <div className="container-fluid">
      <div className="mx-auto w-25 mt-5">
        <CheckRadioBtn />
      </div>
      <CardGroup
        className="mx-auto mt-5"
        border="dark"
        style={{ width: "80%" }}
      >
        <CardComponent
          titulo="Gonzalo"
          desc="Peleador de Kickboxing, con 5 años de experiencia en la escena nacional"
          img={instructor_1}
          linkText="Mas información"
        />

        <CardComponent
          titulo="Olivia"
          desc="Entrenadora de boxeo, ha formado parte de equipos de alta competición, ideal para quienes comienzan a aventurarse en el mundo del boxeo"
          img={instructor_2}
          linkText="Mas información"
        />

        <CardComponent
          titulo="Ricardo"
          desc="Entrenador Fitness, posee distintos planes de ejercicios con las rutinas óptimas para cada alumno"
          img={instructor_3}
          linkText="Mas información"
        />
      </CardGroup>
      &nbsp;
      <CardGroup className="mx-auto" border="dark" style={{ width: "80%" }}>
        <CardComponent
          titulo="Pedro"
          desc="Gimnasta Paralímpico que destaca en el levantamiento de pesas, ideal para apoyar en trabajos del tren superior"
          img={instructor_4}
          linkText="Mas información"
        />

        <CardComponent
          titulo="Ignacio"
          desc="Campeón nacional de Kickboxing, cuenta con grandes títulos y 3 años de experiencia"
          img={instructor_5}
          linkText="Mas información"
        />

        <CardComponent
          titulo="Constanza"
          desc="Deportista de alto nivel, posee 2 años de experiencia en el boxeo y ha competido en torneos nacionales"
          img={instructor_6}
          linkText="Mas información"
        />
      </CardGroup>
      &nbsp;
      <Footer />
    </div>
  );
};
