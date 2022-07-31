import { Container, Button, Form } from "react-bootstrap";
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

  const [loginInfo, setloginInfo] = useState(userInfo);

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
    signIn(loginInfo).then((response) => {
      if (response.valid) {
        login(response.user);
        routerNavigate("/user/home");
      }
    });
  };

  return (
    <Container className=" d-flex flex-column justify-content-center align-items-center">
      <Form style={{ width: "fit-content" }}>
        {" "}
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
        <Button
          variant="primary"
          onClick={() => {
            handlleSignIn();
          }}
        >
          Submit
        </Button>{" "}
        <Button variant="primary" size="md" href="/newUser">
          New User
        </Button>
      </Form>
    </Container>
  );
}
{
  /*We also need a log out button. Can we make it dynamic to also allow for a button to swap to signout?*
 Probably making this way more complicated than needed but should we also have a list going that can grow as we 
get more food trucks coming in or does the database take care of all of that? */
}
