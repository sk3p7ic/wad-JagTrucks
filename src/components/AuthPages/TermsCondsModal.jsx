import { useState } from "react";
import { Form, Modal } from "react-bootstrap";

export const TermsAndConditionsModal = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Form.Label>
        Do you agree to the{" "}
        <span
          className="text-decoration-underline"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShow(true);
          }}
        >
          Terms &amp; Conditions
        </span>
        ?
      </Form.Label>
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
        backdrop="static"
        keyboard="false"
      >
        <Modal.Header closeButton>
          <Modal.Title>Terms &amp; Conditions</Modal.Title>
        </Modal.Header>
      </Modal>
    </>
  );
};
