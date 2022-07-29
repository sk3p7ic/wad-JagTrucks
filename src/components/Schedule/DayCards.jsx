import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DayCard = ({ scheduleItem, truckData }) => {
  const getTruckName = (truckId) => {
    const truck = truckData.get(truckId);
    return truck === undefined || null ? <h2></h2> : <h2>{truck.name}</h2>;
  };

  const getTruckImageUrl = (truckId) => {
    const truck = truckData.get(truckId);
    return truck === undefined || null
      ? ""
      : `/images/${truck.header_img_path}`;
  };

  const getTruckTimes = () => {
    const formatTimeString = (timeString) => {
      let hours = parseInt(timeString.substring(0, 2));
      let minutes = parseInt(timeString.substring(2));
      const period = hours > 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12; // Change hour 0 (false) to 12
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      return `${hours}:${minutes} ${period}`;
    };
    const start = scheduleItem?.start_time | "";
    const end = scheduleItem?.end_time | "";
    if (start === "" || end === "") return <p></p>;
    return (
      <p>
        {formatTimeString(start.toString())}-{formatTimeString(end.toString())}
      </p>
    );
  };

  return (
    <Card>
      <Card.Img src={getTruckImageUrl(scheduleItem.truck_id)} />
      <Card.Title>{getTruckName(scheduleItem.truck_id)}</Card.Title>
      <Card.Body>{getTruckTimes()}</Card.Body>
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
