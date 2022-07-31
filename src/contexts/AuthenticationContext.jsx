import React, { useContext, useState } from "react";

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
