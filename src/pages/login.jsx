import { Container, Button, Form, Toast } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNavigation } from "../contexts/NavigationContext";
import { signIn } from "../util/db/users";
import { useJagTrucksAuthentication } from "../contexts/AuthenticationContext";
const userInfo = {
  authName: "",
  password: "",
};

export function FoodTruckLogin() {
  const { login } = useJagTrucksAuthentication();
  const { setCurrentPage } = useNavigation();
  const routerNavigate = useNavigate();

  const [currentFormType, setCurrentFormType] = useState("");

  const [loginInfo, setloginInfo] = useState(userInfo);
  const [showErrorToast, setShowErrorToast] = useState(false);

  useEffect(() => {
    setCurrentPage("/login");
    // eslint-disable-next-line
  }, [setCurrentPage]);

  function updateValue(valueName, value) {
    const Info = loginInfo;
    if (valueName === "authName") setloginInfo({ ...Info, authName: value });
    else setloginInfo({ ...Info, password: value });
  }

  const handlleSignIn = () => {
    const userOfApp = currentFormType === "1" ? "student" : "truck";
    signIn(loginInfo, userOfApp).then((response) => {
      if (response.valid) {
        login(response.user);
        routerNavigate("/user/home");
      } else {
        setShowErrorToast(true);
      }
    });
  };
  return (
    <Container className=" d-flex flex-column justify-content-center align-items-center">
      <Form style={{ width: "fit-content" }}>
        {" "}
        <Form.Group>
          <Form.Label id="account-type-label">Account Type</Form.Label>
          <Form.Select
            aria-labelledby="account-type-label"
            onChange={(e) => setCurrentFormType(e.target.value)}
          >
            <option>Please select an account type</option>
            <option value="1">Student</option>
            <option value="2">Food Truck</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={loginInfo.authName}
            onChange={(e) => {
              updateValue("authName", e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={loginInfo.password}
            onChange={(e) => {
              updateValue("password", e.target.value);
            }}
          />
        </Form.Group>
        <div className="d-flex flex-row gap-2 align-items-end">
          <Button
            variant="primary"
            onClick={() => {
              handlleSignIn();
            }}
          >
            Submit
          </Button>
          <div>
            <p className="d-inline">New user? </p>
            <p
              className="d-inline"
              style={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={() => routerNavigate("/newUser")}
            >
              Create an account.
            </p>
          </div>
        </div>
      </Form>
      <Toast
        className="mt-4"
        bg="danger"
        onClose={() => setShowErrorToast(false)}
        show={showErrorToast}
        delay={5000}
        autohide
      >
        <Toast.Header>
          <strong className="me-auto">Login Failed</strong>
        </Toast.Header>
        <Toast.Body>
          Sorry, but your credentials were invalid. Please try again.
        </Toast.Body>
      </Toast>
    </Container>
  );
}
