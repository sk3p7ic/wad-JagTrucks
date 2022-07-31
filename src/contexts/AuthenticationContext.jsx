import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";

const AuthenticationContext = React.createContext();

export const useJagTrucksAuthentication = () =>
  useContext(AuthenticationContext);

export const JagTrucksAuthenticationProvider = ({ children }) => {
  const [jagTrucksAuth, setJagTrucksAuth] = useState();

  return (
    <AuthenticationContext.Provider value={{ jagTrucksAuth, setJagTrucksAuth }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const RequireJagTrucksAuth = ({ children }) => {
  //const { jagTrucksAuth } = useJagTrucksAuthentication();

  // TODO: Fix this code. It is BROKEN!
  //if (jagTrucksAuth.user === undefined) {
  //  return <Navigate to="/login" replace />;
  //} else {
  //  return children;
  //}
  return children;
};
