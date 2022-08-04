import { useJagTrucksAuthentication } from "../../../contexts/AuthenticationContext";

export const StudentUserHome = () => {
  const { jagTrucksAuth } = useJagTrucksAuthentication();
  return <h1>Hello</h1>;
};
