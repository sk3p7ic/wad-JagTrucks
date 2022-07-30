import { Button } from "react-bootstrap";

export const HomePage = () => {
  return (
    <div className="flex-grow-1 d-flex flex-row justify-content-between align-items-center">
      <div className="container-lg">
        <h1 className="display-1 font-oswald">
          Dining on campus,<br></br>Made simple.
        </h1>
        <h5 className="display-5 font-vollkorn">
          Explore the options available today.
        </h5>
        <div>
          <Button variant="success" size="lg" href="/Schedule">
            What's Here Today{" "}
          </Button>{" "}
          {""}
          <Button variant="outline-success" size="lg" href="/Trucks">
            View All Trucks{" "}
          </Button>
        </div>
        <br></br>
        <Button variant="secondary" size="lg" href="/login">
          {" "}
          Food Truck Driver Login/Create Sign-In{" "}
        </Button>{" "}
        {""} {/*For a visible button.*/}
      </div>
      {/*<div className="image_of_taco">Add the Taco Here.</div>*/}
      <div className="d-none d-lg-block position-relative">
        <img src="img/Tacos.png" style={{ height: "75vh" }} alt="Header" />
        <h1
          className="font-oswald d-none d-xxl-block"
          style={{
            position: "absolute",
            zIndex: -10,
            top: "50%",
            left: "-100%",
            transform: "translateY(-50%)",
            fontSize: "16rem",
            color: "#fffbeb",
          }}
        >
          JagTrucks
        </h1>
      </div>
    </div>
  );
};
