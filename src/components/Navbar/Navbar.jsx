import { Nav, Navbar as BSNavbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useNavigation } from "../../contexts/NavigationContext";
import PageLinkData from "../../data/pages.json";
import "./Navbar.css";

export const Navbar = () => {
  const { currentPage, setCurrentPage } = useNavigation();
  const routerNavigate = useNavigate();

  const navigateTo = (path) => {
    setCurrentPage(path);
    routerNavigate(path, { replace: true });
  };

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
          {PageLinkData.map((linkData, index) => {
            return (
              <Nav.Link
                active={currentPage === linkData.pagePath}
                onClick={() => navigateTo(linkData.pagePath)}
                key={index}
              >
                {linkData.pageName}
              </Nav.Link>
            );
          })}
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
