import React, { useContext, useEffect, useState } from "react";

const AuthenticationContext = React.createContext();

export const useJagTrucksAuthentication = () =>
  useContext(AuthenticationContext);

export const JagTrucksAuthenticationProvider = ({ children }) => {
  const [jagTrucksAuth, setJagTrucksAuth] = useState();

  useEffect(() => {
    const authFromStorage = JSON.parse(localStorage.getItem("jagTrucksAuth"));
    if (authFromStorage) setJagTrucksAuth(authFromStorage);
  }, []);

  const login = (user) => {
    localStorage.setItem("jagTrucksAuth", JSON.stringify(user));
    setJagTrucksAuth(user);
  };

  const logout = () => {
    localStorage.removeItem("jagTrucksAuth");
    setJagTrucksAuth(null);
  };

  return (
    <AuthenticationContext.Provider value={{ jagTrucksAuth, login, logout }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
