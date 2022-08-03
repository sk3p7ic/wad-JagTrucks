import { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { getTrucksForWeek } from "../../util/db/schedule";
import { getTruckDataFromTruckScheduleList } from "../../util/db/trucks";
import { DayCards } from "./DayCards";

export const ScheduleCalendar = ({ days, currentDate }) => {
  const [weeklyTruckSchedule, setWeeklyTruckSchedule] = useState(null);
  const [truckData, setTruckData] = useState(null);
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  useEffect(() => {
    getTrucksForWeek(days).then((sched) => {
      setWeeklyTruckSchedule(sched);
      getTruckDataFromTruckScheduleList(sched).then((trucks) => {
        setTruckData(trucks);
      });
    });
  }, [days]);

  return (
    <CardGroup className="d-block d-xl-flex font-nunito">
      {Object.values(days).map((day, index) => (
        <Card className="bg-amber-50 border-dark" key={day.getDate()}>
          <Card.Header className="text-center bg-emerald-300 border-bottom border-dark">
            <Card.Title className="m-0">
              <h2 className="font-vollkorn m-0" style={{ fontWeight: 700 }}>
                {daysOfWeek[index]}
              </h2>
            </Card.Title>
          </Card.Header>
          <Card.Body
            className={`${
              day.toDateString() === currentDate.toDateString()
                ? "bg-emerald-50"
                : ""
            }`}
          >
            {weeklyTruckSchedule === null || truckData === null ? (
              <h3>Loading...</h3>
            ) : (
              <DayCards
                dayInfo={weeklyTruckSchedule.get(day.getDate())}
                truckData={truckData}
              />
            )}
          </Card.Body>
        </Card>
      ))}
    </CardGroup>
  );
};
