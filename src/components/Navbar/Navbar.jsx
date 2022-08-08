import { Nav, Navbar as BSNavbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useJagTrucksAuthentication } from "../../contexts/AuthenticationContext";
import { useNavigation } from "../../contexts/NavigationContext";
import PageLinkData from "../../data/pages.json";
import { UserNavbarSection } from "../TruckUserPages/UserNavabarSection";
import { CartButton } from "./CartButton";
import "./Navbar.css";

export const Navbar = () => {
  const { currentPage } = useNavigation();
  const { jagTrucksAuth } = useJagTrucksAuthentication();

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
              <Link
                to={linkData.pagePath}
                className={`text-dark nav-link ${
                  currentPage === linkData.pagePath
                    ? "active"
                    : "text-decoration-none"
                }`}
                key={index}
              >
                {linkData.pageName}
              </Link>
            );
          })}
        </Nav>
        <hr className="d-lg-none" />
        {jagTrucksAuth === undefined || jagTrucksAuth === null ? (
          <Nav className="ms-lg-auto d-flex flex-column flex-lg-row gap-2">
            <CartButton />
            <Link
              to="/login"
              className={`text-dark ${
                currentPage === "/login" ? "active" : "text-decoration-none"
              }`}
            >
              Login
            </Link>
          </Nav>
        ) : (
          <UserNavbarSection />
        )}
      </BSNavbar.Collapse>
    </BSNavbar>
  );
};
