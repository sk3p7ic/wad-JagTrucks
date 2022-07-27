import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export const DayCard = ({ dayInfo, truckData }) => {
  const routerNavigate = useNavigate();
  const fullTruckInfo = new Map();

  const _getProperTruckData = (truckScheduleInfo) => {
    return truckData.get(truckScheduleInfo);
  };

  dayInfo.forEach((truckScheduleInfo) => {
    fullTruckInfo.set(
      truckScheduleInfo,
      _getProperTruckData(truckScheduleInfo)
    );
  });

  const handleNavigationClick = (truckId) => {
    routerNavigate(`/trucks/${truckId}`);
  };

  return (
    <>
      {dayInfo.map((truckScheduleInfo, index) => (
        <Card key={index}>
          <Card.Title>{fullTruckInfo.get(truckScheduleInfo).name}</Card.Title>
          <Card.Subtitle>
            {truckScheduleInfo.startTime} - {truckScheduleInfo.endTime}
          </Card.Subtitle>
          <Card.Body>
            <Button
              variant="primary"
              onClick={() => handleNavigationClick(truckScheduleInfo.truckId)}
            >
              View Menu
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};
