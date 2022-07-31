import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigation } from "../contexts/NavigationContext";
import "./Home.css";

export const HomePage = () => {
  const { setCurrentPage } = useNavigation();

  useEffect(() => {
    setCurrentPage("/");
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex-grow-1 d-flex flex-row justify-content-between align-items-center">
      <div className="container-lg">
        <div style={{ width: "fit-content" }}>
          <h1 className="display-1 font-oswald">
            Dining on campus,
            <br />
            Made simple.
          </h1>
          <h5 className="display-5 font-vollkorn">
            Explore the options available today.
          </h5>
          <div className="gap-2 button-grid">
            <Button variant="success" size="lg" href="/Schedule">
              What's Here Today
            </Button>
            <Button variant="outline-success" size="lg" href="/Trucks">
              View All Trucks
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="/login"
              className="button-grid-span-2"
            >
              Food Truck Driver Login/Create Sign-In
            </Button>
          </div>
        </div>
      </div>
      <div className="d-none d-lg-block position-relative">
        <img src="img/Tacos.png" style={{ height: "75vh" }} alt="Header" />
        <h1
          className="font-oswald d-none d-xxl-block"
          style={{
            position: "absolute",
            zIndex: -10,
            top: "50%",
            left: "-125%",
            transform: "translateY(-50%)",
            fontSize: "14rem",
            color: "#fffbeb",
          }}
        >
          JagTrucks
        </h1>
      </div>
    </div>
  );
};
