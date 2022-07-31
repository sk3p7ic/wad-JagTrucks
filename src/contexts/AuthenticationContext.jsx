import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";

const AuthenticationContext = React.createContext();

export const useJagTrucksAuthentication = () =>
  useContext(AuthenticationContext);

export const JagTrucksAuthenticationProvider = ({ children }) => {
  const [jagTrucksAuth, setJagTrucksAuth] = useState();

  const login = (user) => {
    setJagTrucksAuth(user);
  };

  const logout = () => {
    setJagTrucksAuth(null);
  };

  return (
    <AuthenticationContext.Provider value={{ jagTrucksAuth, login, logout }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
