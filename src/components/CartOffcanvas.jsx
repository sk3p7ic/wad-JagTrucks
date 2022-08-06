import { Offcanvas } from "react-bootstrap";

export const CartOffcanvas = ({ show, stopShowCallback }) => {
  return (
    <Offcanvas show={show} onHide={stopShowCallback} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>My Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>Lorem ipsum.</Offcanvas.Body>
    </Offcanvas>
  );
};
