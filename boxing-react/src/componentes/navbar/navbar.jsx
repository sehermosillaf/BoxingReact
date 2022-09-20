import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'

export const Navigation = () => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Boxing</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Planes</Nav.Link>
            <Nav.Link href="#">Instructores</Nav.Link>
            <Nav.Link href="#">Disciplinas</Nav.Link>
            <NavDropdown title="Horarios" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">AM</NavDropdown.Item>
              <NavDropdown.Item href="#">PM</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Reservar clases</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#">Iniciar Sesion</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }