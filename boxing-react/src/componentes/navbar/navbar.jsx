import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";

export const Navigation = () => {
  return (
    <Navbar className="sticky-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavbarBrand href="Inicio"> React-Boxing</NavbarBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/Disciplinas">
              Disciplinas
            </NavLink>
            <NavLink className="nav-link" to="/Instructores">
              Instructores
            </NavLink>
            <NavLink className="nav-link">
              
            </NavLink>
            <NavDropdown
              to="/Horarios"
              title="Horarios"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#">AM</NavDropdown.Item>
              <NavDropdown.Item href="#">PM</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Reservar clases</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavLink className="nav-link" to="/Contacto">
              Contacto
            </NavLink>
            <NavLink className="nav-link" to="/Login">Iniciar Sesion</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
