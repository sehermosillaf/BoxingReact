import Card from "react-bootstrap/Card";


export const CardComponent = ({ titulo, desc, img, linkText  }) => {
    return(
    <Card className="me-5">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Card.Link href="#">{linkText}</Card.Link>
      </Card.Body>
    </Card>
    );
};
