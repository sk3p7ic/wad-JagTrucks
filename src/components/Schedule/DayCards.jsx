import { Badge, Button, Card } from "react-bootstrap";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { TruckSocial } from "../SocialDisplay";

const DayCard = ({ scheduleItem, truckData }) => {
  const getTruckName = (truckId) => {
    const truck = truckData.get(truckId);
    return truck === undefined || null ? <div></div> : <h2>{truck.name}</h2>;
  };

  const getTruckFoodType = (truckId) => {
    const truck = truckData.get(truckId);
    return (
      <Badge
        pill
        bg="amber-50"
        className="font-oswald p-2 border pill-outline-emerald-300"
        style={{ height: "fit-content", fontSize: "1.125rem" }}
      >
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
      <h4>
        {formatTimeString(start.toString())}-{formatTimeString(end.toString())}
      </h4>
    );
  };

  const getAcceptsDiningDollars = (truckId) => {
    const truck = truckData.get(truckId);
    const accepts = truck?.accepts_dining_dollars | false;
    return (
      <div className="h-100 d-flex flex-column justify-content-between align-items-end text-end">
        <h4>
          <strong>Dining Dollars:</strong>
        </h4>
        <div>
          {accepts ? (
            <MdCheckBox size={30} />
          ) : (
            <MdCheckBoxOutlineBlank size={30} />
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
      elements = [...elements, <TruckSocial siteName={site} url={url.url} />];
    });
    return (
      <div className="d-flex flex-row flex-wrap gap-2">
        {elements.map((elem, index) => (
          <span key={index}>{elem}</span>
        ))}
      </div>
    );
  };

  return (
    <Card className="bg-amber-100">
      <Card.Img
        src={getTruckImageUrl(scheduleItem.truck_id)}
        alt="Truck header"
      />
      <Card.Body className="d-flex flex-column gap-2">
        <div className="row">
          <div className="col">
            <Card.Title className="font-oswald">
              {getTruckName(scheduleItem.truck_id)}
            </Card.Title>
          </div>
          <div className="col d-flex justify-content-end align-items-center">
            {getTruckFoodType(scheduleItem.truck_id)}
          </div>
        </div>
        <div className="row font-nunito">
          <div className="col d-flex flex-column">
            {getTruckTimes()}
            {getTruckSocials(scheduleItem.truck_id)}
          </div>
          <div className="col">
            {getAcceptsDiningDollars(scheduleItem.truck_id)}
          </div>
        </div>
        <Button
          variant="emerald-300"
          className="w-100"
          href={`/trucks/${scheduleItem.truck_id}`}
        >
          View Menu
        </Button>
      </Card.Body>
    </Card>
  );
};

export const DayCards = ({ dayInfo, truckData }) => {
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
