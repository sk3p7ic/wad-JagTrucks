import { Nav, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useJagTrucksAuthentication } from "../../contexts/AuthenticationContext";

export const UserNavbarSection = () => {
  const { jagTrucksAuth, logout } = useJagTrucksAuthentication();
  const routerNavigate = useNavigate();

  const handleLogout = () => {
    logout();
    routerNavigate("/login");
  };

  return (
    <Nav className="ms-lg-auto">
      <NavDropdown
        title={`${jagTrucksAuth.firstName} ${jagTrucksAuth.lastName}`}
        id="navProfileDropdown"
      >
        <NavDropdown.Item eventKey="1.1">Profile</NavDropdown.Item>
        <NavDropdown.Item eventKey="1.2">My Trucks</NavDropdown.Item>
        <NavDropdown.Item eventKey="1.3">Foo Bar</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item
          eventKey="1.4"
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};