import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { TruckFilters } from "../components/Trucks/TruckFilters";
import { TruckList } from "../components/Trucks/TruckList";
import { useNavigation } from "../contexts/NavigationContext";
import { getAllTrucks } from "../util/db/trucks";

export const TrucksPage = () => {
  const { setCurrentPage } = useNavigation();
  const [trucks, setTrucks] = useState();

  useEffect(() => {
    getAllTrucks().then((truckData) => {
      setTrucks(truckData);
    });
  }, []);

  useEffect(() => {
    const unsubscribe = setCurrentPage("/trucks");
    return unsubscribe;
  }, [setCurrentPage]);

  return (
    <Container fluid style={{ padding: "0vw 5vw" }}>
      <h1 className="display-1 font-oswald">Looking for something?</h1>
      <div className="d-flex flex-column px-4">
        <TruckFilters />
        <TruckList trucks={trucks} />
      </div>
    </Container>
  );
};
