import { Card, CardGroup } from "react-bootstrap";
import { getTrucksForWeek } from "../../util/db/schedule";
import { getTruckDataFromTruckScheduleList } from "../../util/db/trucks";
import { DayCard } from "./DayCards";

export const ScheduleCalendar = ({ days, currentDate }) => {
  const weekTrucks = getTrucksForWeek(days);
  const truckData = getTruckDataFromTruckScheduleList(weekTrucks);
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <CardGroup className="d-block d-xl-flex">
      {Object.values(days).map((day, index) => (
        <Card key={day.getDate()}>
          <Card.Header className="text-center">
            <Card.Title className="m-0">
              <h2 className="font-vollkorn m-0" style={{ fontWeight: 700 }}>
                {daysOfWeek[index]}
              </h2>
            </Card.Title>
          </Card.Header>
          <Card.Body
            className={`${
              day.toDateString() === currentDate.toDateString()
                ? "bg-secondary"
                : ""
            }`}
          >
            {weekTrucks.get(day.getDate()) !== undefined ? (
              <DayCard
                dayInfo={weekTrucks.get(day.getDate())}
                truckData={truckData}
              />
            ) : (
              <h3>No truck data for this day...</h3>
            )}
          </Card.Body>
        </Card>
      ))}
    </CardGroup>
  );
};
