import { Nav, Navbar as BSNavbar } from "react-bootstrap";
import { useNavigation } from "../../contexts/NavigationContext";
import "./Navbar.css";

export const Navbar = () => {
  const { currentPage, setCurrentPage } = useNavigation();

  return (
    <BSNavbar
      className="px-4 nav-black-text font-oswald d-flex flex-lg-row align-items-baseline"
      expand="lg"
      variant="light"
      bg="light"
    >
      <BSNavbar.Brand href="#">JagTrucks</BSNavbar.Brand>
      <BSNavbar.Toggle aria-controls="main-nav" />
      <BSNavbar.Collapse id="main-nav">
        <Nav className="me-auto">
          <Nav.Link href="/" active={currentPage === ("home" || "/")}>
            Home
          </Nav.Link>
          <Nav.Link href="/schedule" active={currentPage === "schedule"}>
            Schedule
          </Nav.Link>
          <Nav.Link href="/trucks" active={currentPage === "trucks"}>
            Trucks
          </Nav.Link>
        </Nav>
        <hr className="d-lg-none" />
        <Nav>
          <Nav.Link href="/login" className="ms-lg-auto">
            Login
          </Nav.Link>
        </Nav>
      </BSNavbar.Collapse>
    </BSNavbar>
  );
};
