import { useEffect } from "react";
import { useParams } from "react-router-dom";
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

  return <h1>Truck listing for {truckId}</h1>;
};
