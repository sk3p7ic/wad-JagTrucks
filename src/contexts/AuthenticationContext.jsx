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

  const login = (user, userType) => {
    const cookie = { userType: userType ?? "truck", ...user };
    localStorage.setItem("jagTrucksAuth", JSON.stringify(cookie));
    setJagTrucksAuth(cookie);
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
