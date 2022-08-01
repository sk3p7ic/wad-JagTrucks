import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { useNavigation } from "../../contexts/NavigationContext";
import { getTruckDataFromId, getTruckMenuFromId } from "../../util/db/trucks";

export const TruckViewPage = () => {
  const { setCurrentPage } = useNavigation();
  const { truckId } = useParams();
  const [truckData, setTruckData] = useState();
  const [truckMenuJson, setTruckMenuJson] = useState({});

  useEffect(() => {
    const unsubscribe = setCurrentPage("/trucks");
    return unsubscribe;
  }, [setCurrentPage]);

  useEffect(() => {
    getTruckDataFromId(truckId).then((data) => setTruckData(data));
    getTruckMenuFromId(truckId).then((data) => setTruckMenuJson(data));
  }, [truckId]);

  return (
    <Container>
      <Link to="/trucks">
        <BsArrowLeftCircleFill size="48" />
      </Link>
      <h1>Truck listing for {truckData?.name || "loading..."}</h1>
    </Container>
  );
};
