import { Badge, Button, Card } from "react-bootstrap";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { TruckSocial } from "../SocialDisplay";

const DayCard = ({ scheduleItem, truckData }) => {
  const getTruckName = (truckId) => {
    const truck = truckData.get(truckId);
    return truck === undefined || null ? <h2></h2> : <h2>{truck.name}</h2>;
  };

  const getTruckFoodType = (truckId) => {
    const truck = truckData.get(truckId);
    return (
      <Badge pill bg="primary">
        {truck?.primary_food_type}
      </Badge>
    );
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

  const getAcceptsDiningDollars = (truckId) => {
    const truck = truckData.get(truckId);
    const accepts = truck?.accepts_dining_dollars | false;
    return (
      <div className="d-flex flex-column">
        <p>Accepts Dining Dollars:</p>
        <div className="text-end">
          {accepts ? (
            <MdCheckBox size={24} />
          ) : (
            <MdCheckBoxOutlineBlank size={24} />
          )}
        </div>
      </div>
    );
  };

  const getTruckSocials = (truckId) => {
    const truck = truckData.get(truckId);
    const socials = truck?.socials;
    if (socials === undefined || null) return <div></div>;
    const sites = Object.keys(socials);
    const urls = Object.values(socials);
    let elements = [];
    sites.forEach((site, index) => {
      const url = urls[index];
      elements = [...elements, <TruckSocial siteName={site} url={url} />];
    });
    return (
      <div className="d-flex flex-row">
        {elements.map((elem, index) => (
          <span key={index}>{elem}</span>
        ))}
      </div>
    );
  };

  return (
    <Card>
      <Card.Img src={getTruckImageUrl(scheduleItem.truck_id)} />
      <Card.Body>
        <div className="row">
          <div className="col">
            <Card.Title>{getTruckName(scheduleItem.truck_id)}</Card.Title>
          </div>
          <div className="col">{getTruckFoodType(scheduleItem.truck_id)}</div>
        </div>
        <div className="row">
          <div className="col d-flex flex-column">
            {getTruckTimes()}
            {getTruckSocials(scheduleItem.truck_id)}
          </div>
          <div className="col">
            {getAcceptsDiningDollars(scheduleItem.truck_id)}
          </div>
        </div>
        <Button className="w-100" href={`/trucks/${scheduleItem.truck_id}`}>
          View Menu
        </Button>
      </Card.Body>
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
