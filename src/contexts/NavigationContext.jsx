import { useContext, useState } from "react";

const NavContext = React.createContext("");

export const useNavigation = () => useContext(NavContext);

export const NavProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <NavContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </NavContext.Provider>
  );
};
