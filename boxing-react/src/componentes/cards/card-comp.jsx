import Card from "react-bootstrap/Card";
import '../cards/cards.css'

export const CardComponent = ({ titulo, desc, img, linkText}) => {
    return(
    <Card className="card-style">
      <Card.Img variant="top" src={img} />
      <Card.Body className="card-body">
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Card.Link href="#">{linkText}</Card.Link>
      </Card.Body>
    </Card>
    );
};
