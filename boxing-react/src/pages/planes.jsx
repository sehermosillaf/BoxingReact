import CardGroup from "react-bootstrap/CardGroup";
import { CardComponent } from "../componentes/card-comp";
import Boxeo from "../img/boxeo.jpg";

export const PlanesPage = () => {
  return(
    <CardGroup>
      <CardComponent titulo="a" desc="horario" img={Boxeo} />
      <CardComponent titulo="a" desc="horario" img={Boxeo} />
    </CardGroup>
    );
};
