import { Container } from "react-bootstrap";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useNavigation } from "../contexts/NavigationContext";
import { addUser } from "../util/db/users";
import { useJagTrucksAuthentication } from "../contexts/AuthenticationContext";
import { NewTruckCreateAccountForm } from "../components/CreateAccount/NewTruckUser";

export function NewAccountPage() {
  const { login } = useJagTrucksAuthentication();
  const routerNavigate = useNavigate();
  const { setCurrentPage } = useNavigation();
  useEffect(() => {
    setCurrentPage("/login");
    // eslint-disable-next-line
  }, [setCurrentPage]);

  const handleSubmit = (values) => {
    addUser(values).then((response) => {
      if (response.success !== false || response?.user !== null) {
        login(response.user);
        routerNavigate("/user/home");
      }
    });
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center font-nunito">
      <h1 className="display-1 font-oswald">Join the JagTrucks Website!</h1>
      <NewTruckCreateAccountForm
        onSubmitCallback={(values) => handleSubmit(values)}
      />
    </Container>
  );
}
