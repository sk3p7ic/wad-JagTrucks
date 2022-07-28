import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DayCard = ({ scheduleItem, truckData }) => {
  const getTruckName = (truckId) => {
    const truck = truckData.get(truckId);
    console.log(truck);
    return truck === undefined || null ? <h2></h2> : <h2>{truck.name}</h2>;
  };

  return (
    <Card>
      <Card.Title>{getTruckName(scheduleItem.truck_id)}</Card.Title>
    </Card>
  );
};

export const DayCards = ({ dayInfo, truckData }) => {
  const routerNavigate = useNavigate();

  const handleNavigationClick = (truckId) => {
    routerNavigate(`/trucks/${truckId}`);
  };

  return (
    <>
      {dayInfo === undefined || null || dayInfo.length === 0 ? (
        <p>No trucks for this day.</p>
      ) : (
        dayInfo.map((dayList, key) => (
          <DayCard scheduleItem={dayList} truckData={truckData} key={key} />
        ))
      )}
    </>
  );
};
