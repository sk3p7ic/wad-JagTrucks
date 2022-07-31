import { Navigate } from "react-router-dom";
import { useJagTrucksAuthentication } from "../../contexts/AuthenticationContext";

export const RequireJagTrucksAuth = ({ children }) => {
  const { jagTrucksAuth } = useJagTrucksAuthentication();

  if (jagTrucksAuth.user === null) {
    return <Navigate to="/login" replace />;
  } else {
    return children;
  }
};
