import { useEffect, useState } from "react";
import { Accordion, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { TruckSocial } from "../../../components/SocialDisplay";
import { useJagTrucksAuthentication } from "../../../contexts/AuthenticationContext";
import { getTruckDataFromId } from "../../../util/db/trucks";

export const AccountActivePage = () => {
  const { jagTrucksAuth } = useJagTrucksAuthentication();
  const [ownedTrucks, setOwnedTrucks] = useState([]);
  const routerNavigate = useNavigate();

  useEffect(() => {
    const truckIds = jagTrucksAuth.trucks;
    const getNeededTrucks = async () => {
      let userTrucks = [];
      for await (const id of truckIds) {
        const data = await getTruckDataFromId(id);
        userTrucks = [...userTrucks, data];
      }
      return userTrucks;
    };
    getNeededTrucks().then((truckList) => setOwnedTrucks(truckList));
  }, [jagTrucksAuth]);

  return (
    <div className="flex-grow-1">
      <Container className="d-flex flex-column">
        <h1 className="display-2 font-oswald">
          Hello, {jagTrucksAuth.firstName}.
        </h1>
        <h1 className="font-oswald">Account Dashboard</h1>
        <div className="p-4 d-flex flex-column gap-2">
          <h2 className="font-vollkorn">Your Trucks</h2>
          {ownedTrucks.map((truck, index) => (
            <Card className="p-2 font-nunito" key={index}>
              <Card.Title className="font-oswald">{truck.name}</Card.Title>
              <Card.Body className="d-flex flex-column flex-lg-row gap-4 pb-0">
                <p className="d-flex flex-row align-items-center gap-2">
                  <strong>Primary Food Type: </strong>
                  {truck.primary_food_type}
                </p>
                <p className="d-flex flex-row align-items-center gap-2">
                  <strong>Accepts Dining Dollars: </strong>
                  {truck.accepts_dining_dollars ? "Yes" : "No"}
                </p>
                <p className="d-flex flex-row align-items-center gap-2">
                  <strong>Socials: </strong>
                  {Object.entries(truck.socials).map(([site, url], index) => (
                    <TruckSocial siteName={site} url={url.url} key={index} />
                  ))}
                </p>
              </Card.Body>
              <Card.Link
                style={{ paddingLeft: "var(--bs-card-spacer-y)" }}
                onClick={() => routerNavigate(`/user/editTruck/${truck._id}`)}
              >
                Edit
              </Card.Link>
            </Card>
          ))}
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Add Another Truck</Accordion.Header>
              <Accordion.Body>Foo bar.</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
    </div>
  );
};
