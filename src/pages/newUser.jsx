import { Container, Button, Form } from "react-bootstrap";
import React, { useEffect, useRef, useState } from "react";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useNavigation } from "../contexts/NavigationContext";

const initialFormValues = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  phoneNumber: "",
  truckName: "",
  password: "",
  confirmPassword: "",
  termCondAgree: false,
};

export function NewFoodTruck() {
  const { setCurrentPage } = useNavigation();
  useEffect(() => {
    const unsubscribe = setCurrentPage("/login");
    return unsubscribe;
  }, [setCurrentPage]);

  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [showPassword, setShowPassword] = useState(false);
  const confirmPasswordRef = useRef();

  const updateValue = (valueName, value) => {
    let currentValues = formValues;
    switch (valueName) {
      case "firstName":
        setFormValues({ ...currentValues, firstName: value });
        break;
      case "lastName":
        setFormValues({ ...currentValues, lastName: value });
        break;
      case "username":
        setFormValues({ ...currentValues, username: value });
        break;
      case "email":
        setFormValues({ ...currentValues, email: value });
        break;
      case "phoneNumber":
        setFormValues({ ...currentValues, phoneNumber: value });
        break;
      case "truckName":
        setFormValues({ ...currentValues, truckName: value });
        break;
      case "password":
        setFormValues({ ...currentValues, password: value });
        break;
      case "confirmPassword":
        setFormValues({ ...currentValues, confirmPassword: value });
        break;
      case "termCondAgree":
        setFormValues({ ...currentValues, termCondAgree: value });
        break;
      default:
        break;
    }
  };

  const checkPassword = () => {
    const valid = formValues.password === formValues.confirmPassword;
    return valid;
  };
  if (!checkPassword()) {
    confirmPasswordRef?.current?.classList.add("is-invalid");
  } else {
    confirmPasswordRef?.current?.classList.remove("is-invalid");
  }

  const handleSubmit = (event) => {
    const stop = () => {
      event.preventDefault();
      event.stopPropagation();
    };
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      stop();
    }
    if (!checkPassword()) {
      stop();
    }

    setValidated(true);
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <h1>Welcome to the JagTrucks Website!</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              value={formValues.firstName}
              onChange={(e) => updateValue("firstName", e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              value={formValues.lastName}
              onChange={(e) => updateValue("lastName", e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
                value={formValues.username}
                onChange={(e) => updateValue("username", e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="companyName@example.com"
              required
              value={formValues.email}
              onChange={(e) => updateValue("email", e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="(123) 456-7890"
              required
              value={formValues.phoneNumber}
              onChange={(e) => updateValue("phoneNumber", e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid phone number.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Truck Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="The Food Truck"
              required
              value={formValues.truckName}
              onChange={(e) => updateValue("truckName", e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom05">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              value={formValues.password}
              onChange={(e) => updateValue("password", e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
            <Form.Group>
              <Form.Check
                type="switch"
                label="Show password"
                checked={showPassword}
                onChange={() => {
                  const showPass = showPassword;
                  setShowPassword(!showPass);
                }}
              />
            </Form.Group>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom05">
            <Form.Label>Please re-enter your password</Form.Label>
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              value={formValues.confirmPassword}
              onChange={(e) => updateValue("confirmPassword", e.target.value)}
              ref={confirmPasswordRef}
            />
            <Form.Control.Feedback type="invalid">
              Passwords do not match.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
            value={formValues.termCondAgree}
            onChange={(e) => updateValue("termCondAgree", e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    </Container>
  );
}
{
  /*Looking at the website we need JS for the site to work. At the moment the whole screen 
comes out as blank*/
}
