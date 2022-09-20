import Card from "react-bootstrap/Card";


export const CardComponent = ({ titulo, desc, img }) => {
    return(
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
    </Card>
    );
};
