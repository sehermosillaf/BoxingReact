import { CardComponent } from "../componentes/cards/card-comp";
import CardGroup from "react-bootstrap/CardGroup";
import AM from '../img/AM.jpg'
import PM from '../img/PM.jpg'

export const Horarios = () => {
    return (
    <CardGroup className="mx-auto" border="dark" style={{ width: "80%" }}>
        <CardComponent titulo='AM' desc='Horarios desde las 7:00 AM hasta 11:30 AM' img={AM}/>
        <CardComponent titulo='PM' desc='Horarios desde las 12:00 PM hasta 10:30 PM' img={PM}/>
    </CardGroup>
);
}