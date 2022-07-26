import { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { useNavigation } from "../../contexts/NavigationContext";

/* TODO:
 - Trucks link needs to be active in the navbar.
 - Allow the user to click a back button to view all trucks.
*/

export const TruckViewPage = () => {
  const { setCurrentPage } = useNavigation();
  const { truckId } = useParams();

  useEffect(() => {
    const unsubscribe = setCurrentPage("/trucks");
    return unsubscribe;
  }, [setCurrentPage]);

  return (
    <Container>
      <Link to="/trucks">
        <BsArrowLeftCircleFill size="48" />
      </Link>
      <h1>Truck listing for {truckId}</h1>
    </Container>
  );
};
