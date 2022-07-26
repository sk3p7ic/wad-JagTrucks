import { useParams } from "react-router-dom";

/* TODO:
 - Trucks link needs to be active in the navbar.
 - Allow the user to click a back button to view all trucks.
*/

export const TruckViewPage = () => {
  const { truckId } = useParams();

  return <h1>Truck listing for {truckId}</h1>;
};
