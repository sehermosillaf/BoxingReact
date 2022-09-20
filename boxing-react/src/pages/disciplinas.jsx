import CardGroup from "react-bootstrap/CardGroup";
import { CardComponent } from "../componentes/cards/card-comp";
import Boxeo from "../img/boxeo.jpg";
import KickBoxing from "../img/kickboxing.jpg";
import Fitness from "../img/fitness.jpg";

export const Disciplinas = () => {
  return(
    <CardGroup className="mx-auto " border="dark" style={{ width: '80%'}} >
      <CardComponent titulo="Plan basico" desc="horario" img={Boxeo} />
      <CardComponent titulo="Plan intermedio" desc="horario" img={KickBoxing} />
      <CardComponent titulo="Plan Power" desc="horario" img={Fitness} />
    </CardGroup>
    );
};
