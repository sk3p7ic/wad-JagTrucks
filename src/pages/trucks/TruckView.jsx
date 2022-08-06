import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { TruckMenuHeader } from "../../components/Trucks/TruckMenuHeader";
import { useNavigation } from "../../contexts/NavigationContext";
import { getTruckDataFromId } from "../../util/db/trucks";
import { TruckMenuView } from "../../components/Trucks/TruckMenuView";

export const TruckViewPage = () => {
  const { setCurrentPage } = useNavigation();
  const { truckId } = useParams();
  const [truckData, setTruckData] = useState();

  useEffect(() => {
    const unsubscribe = setCurrentPage("/trucks");
    return unsubscribe;
  }, [setCurrentPage]);

  useEffect(() => {
    getTruckDataFromId(truckId).then((data) => setTruckData(data));
  }, [truckId]);

  return (
    <Container className="mb-4 p-3 bg-amber-200 rounded-2">
      <Link to="/trucks">
        <BsArrowLeftCircleFill size="48" />
      </Link>
      {truckData?._id !== undefined ? (
        <TruckMenuHeader truck={truckData} />
      ) : (
        ""
      )}
      {truckData?.menu !== undefined ? (
        <TruckMenuView menuData={truckData.menu} truckId={truckId} />
      ) : (
        <p>Nothing to show</p>
      )}
    </Container>
  );
};
