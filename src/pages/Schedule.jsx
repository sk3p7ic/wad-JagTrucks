import { Container } from "react-bootstrap";
import { ScheduleCalendarButtons } from "../components/Schedule/ScheduleCalendarButtons";
import { ScheduleCalendar } from "../components/Schedule/ScheduleCalendar";
import { useState } from "react";
import { DateManager } from "../util/calendarOperations";

const dateManager = new DateManager(); // Manages the current dates that are being displayed

export const SchedulePage = () => {
  const [days, setDays] = useState(dateManager.weekDateRange);
  const currentDate = dateManager.currentDate;

  const handleClick = (mode) => {
    if (mode === "incr") dateManager.incrWeek();
    else dateManager.decrWeek();
    setDays(dateManager.weekDateRange);
  };

  return (
    <Container>
      <h1 className="display-1 font-oswald">What's Cookin'?</h1>
      <div className="d-flex flex-column gap-4 px-4">
        <ScheduleCalendarButtons
          days={days}
          currentDate={currentDate}
          clickHandler={handleClick}
        />
        <ScheduleCalendar days={days} currentDate={currentDate} />
      </div>
    </Container>
  );
};
