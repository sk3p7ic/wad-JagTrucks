import { Container, Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNavigation } from "../contexts/NavigationContext";
import { addUser } from "../util/db/users";
import { useJagTrucksAuthentication } from "../contexts/AuthenticationContext";
import { NewTruckCreateAccountForm } from "../components/CreateAccount/NewTruckUser";
import { NewStudentCreateAccountForm } from "../components/CreateAccount/NewStudentUser";

export function NewAccountPage() {
  const { login } = useJagTrucksAuthentication();
  const routerNavigate = useNavigate();
  const { setCurrentPage } = useNavigation();
  useEffect(() => {
    setCurrentPage("/login");
    // eslint-disable-next-line
  }, [setCurrentPage]);
  const [currentFormType, setCurrentFormType] = useState("0");

  const handleSubmit = (values, userType) => {
    addUser(values, userType).then((response) => {
      if (response.success !== false || response?.user !== null) {
        login(response.user);
        routerNavigate("/user/home");
      }
    });
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center font-nunito">
      <h1 className="display-1 font-oswald">Join the JagTrucks Website!</h1>
      <Form className="w-100 mb-4 pb-2 border-bottom border-3 border-dark">
        <div className="w-50 mx-auto">
          <Form.Label id="account-type-label">Account Type</Form.Label>
          <Form.Select
            aria-labelledby="account-type-label"
            onChange={(e) => setCurrentFormType(e.target.value)}
          >
            <option>Please select an account type</option>
            <option value="1">Student</option>
            <option value="2">Food Truck</option>
          </Form.Select>
        </div>
      </Form>
      {currentFormType === "1" && (
        <NewStudentCreateAccountForm
          onSubmitCallback={(values) => handleSubmit(values, "student")}
        />
      )}
      {currentFormType === "2" && (
        <NewTruckCreateAccountForm
          onSubmitCallback={(values) => handleSubmit(values, "truck")}
        />
      )}
    </Container>
  );
}
