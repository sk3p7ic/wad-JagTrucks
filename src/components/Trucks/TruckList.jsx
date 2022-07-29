import { TruckDisplayCard } from "./TruckDisplayCard";
import "./TruckList.css";

export const TruckList = ({ trucks }) => {
  return (
    <div className="truck-page-trucklist">
      {(trucks !== undefined) | null ? (
        trucks.map((truck, index) => (
          <TruckDisplayCard truck={truck} key={index} />
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};
