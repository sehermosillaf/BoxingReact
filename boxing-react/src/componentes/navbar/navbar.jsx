import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import BrandLogo from "../../img/logo/logov1.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import '../navbar/navbar.css'

export const Navigation = () => {
  return (
    <Navbar
      className="sticky-top navbar"
      collapseOnSelect
      expand="lg"
      bg=""
      variant="dark"
    >
      <Container>
        <NavbarBrand href="Inicio">
          <div className="">
           <img src={BrandLogo} alt="logoReactBoxing"/>
           React Boxing
          </div>
        </NavbarBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/Disciplinas">
              Disciplinas
            </NavLink>
            <NavLink className="nav-link" to="/Instructores">
              Instructores
            </NavLink>
            <NavLink className="nav-link" to='/Planes'>Planes</NavLink>
            <NavDropdown
              to="/Horarios"
              title="Horarios"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#">AM</NavDropdown.Item>
              <NavDropdown.Item href="#">PM</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavLink className="nav-link" to="/Reserva">
                <NavDropdown.Item>Reservar clases</NavDropdown.Item>
              </NavLink>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavLink className="nav-link" to="/Login">
              Iniciar sesión
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
