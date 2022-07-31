import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { TruckDisplayCard } from "../../../components/Trucks/TruckDisplayCard";
import { useJagTrucksAuthentication } from "../../../contexts/AuthenticationContext";
import { getTruckDataFromId } from "../../../util/db/trucks";

export const AccountActivePage = () => {
  const { jagTrucksAuth } = useJagTrucksAuthentication();
  const [ownedTrucks, setOwnedTrucks] = useState([]);

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
        <div>
          <h2>Your Trucks</h2>
          {ownedTrucks.map((truck) => (
            <TruckDisplayCard truck={truck} key={truck._id} />
          ))}
        </div>
      </Container>
    </div>
  );
};
