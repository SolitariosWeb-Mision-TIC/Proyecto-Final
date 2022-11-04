import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navBar " variant="dark">
      <Container>
        <Link to="/" className="link">
          <Navbar.Brand>Global Mobile</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link eventKey={1}>
              <Link to="/create" className="link">
                Creacion Productos
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={2}>
              <Link to="/edit" className="link">
                Edicion Productos
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={3}>
              <Link to="/compras" className="link">
                Productos en venta
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={4}>
              <Link to="/ventas" className="link">
                Lista de ventas
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={5} href="#">
              Salir
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
