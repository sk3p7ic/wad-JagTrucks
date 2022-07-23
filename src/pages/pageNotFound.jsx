import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useNavigation } from "../contexts/NavigationContext";

export const NonexistentPage = () => {
  const { setCurrentPage } = useNavigation();
  const routerNavigate = useNavigate();

  useEffect(() => setCurrentPage("404"), []); // Update current page after component mounts

  const goHome = () => {
    setCurrentPage("/");
    routerNavigate("/");
  };

  return (
    <div className="w-100 flex-grow-1 d-flex flex-column justify-content-center align-items-center">
      <h1 className="display-1 font-oswald">404...That's an error.</h1>
      <h1 className="font-vollkorn">
        Sorry, but the page you're looking for does not exist.
      </h1>
      <button className="btn btn-primary" onClick={goHome}>
        <h1 className="display-6 font-oswald m-0">Go Home</h1>
      </button>
    </div>
  );
};
