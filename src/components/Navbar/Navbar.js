import { Nav, Navbar as BSNavbar } from "react-bootstrap";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <BSNavbar
      className="px-4 nav-black-text"
      fixed="top"
      expand="lg"
      variant="light"
      bg="light"
    >
      <BSNavbar.Brand href="#">JagTrucks</BSNavbar.Brand>
      <BSNavbar.Toggle aria-controls="main-nav" />
      <BSNavbar.Collapse id="main-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/schedule">Schecdule</Nav.Link>
          <Nav.Link href="/trucks">Trucks</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/login" className="ms-auto">
            Login
          </Nav.Link>
        </Nav>
      </BSNavbar.Collapse>
    </BSNavbar>
  );
};
