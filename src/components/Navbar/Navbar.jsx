import { Button, Nav, Navbar as BSNavbar } from "react-bootstrap";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useJagTrucksAuthentication } from "../../contexts/AuthenticationContext";
import { useCart } from "../../contexts/CartContext";
import { useNavigation } from "../../contexts/NavigationContext";
import PageLinkData from "../../data/pages.json";
import { UserNavbarSection } from "../TruckUserPages/UserNavabarSection";
import "./Navbar.css";

export const Navbar = () => {
  const { currentPage } = useNavigation();
  const { jagTrucksAuth } = useJagTrucksAuthentication();
  const { cartTotalItems } = useCart();

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
            <Nav.Item>
              <Button variant="emerald-300" className="position-relative">
                <MdShoppingCart size={28} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartTotalItems()}
                </span>
              </Button>
            </Nav.Item>
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
