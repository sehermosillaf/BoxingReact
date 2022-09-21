import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export const FormularioLogin = () => {
    return (
    <Form className='mx-5 col-sm-xx'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        Nunca compartiremos su correo electrónico con nadie más.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Acceder
      </Button>
    </Form>
    );
} 