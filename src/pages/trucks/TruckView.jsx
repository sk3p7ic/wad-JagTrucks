import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { TruckMenuHeader } from "../../components/Trucks/TruckMenuHeader";
import { useNavigation } from "../../contexts/NavigationContext";
import { getTruckDataFromId, getTruckMenuFromId } from "../../util/db/trucks";
import { TruckMenuView } from "./TruckMenuView";

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
    <Container className="d-flex flex-column gap-4">
      <Link to="/trucks">
        <BsArrowLeftCircleFill size="48" />
      </Link>
      {truckData?._id !== undefined ? (
        <TruckMenuHeader truck={truckData} />
      ) : (
        ""
      )}
      <TruckMenuView menuData={truckMenuJson} />
    </Container>
  );
};
