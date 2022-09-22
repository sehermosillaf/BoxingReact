import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";

export const CardBtn = ({ titulo, desc, img, btnVariant,BtnText}) => {
    return(
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body className="card-body">
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button variant={btnVariant}>{BtnText}</Button>
      </Card.Body>
    </Card>
    );
}