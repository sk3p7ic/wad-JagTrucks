import { Container } from "react-bootstrap";
import { ScheduleCalendarButtons } from "../components/Schedule/ScheduleCalendarButtons";
import { ScheduleCalendar } from "../components/Schedule/ScheduleCalendar";
import { useEffect, useState } from "react";
import { DateManager } from "../util/calendarOperations";
import { useNavigation } from "../contexts/NavigationContext";

const dateManager = new DateManager(); // Manages the current dates that are being displayed

export const SchedulePage = () => {
  const [days, setDays] = useState(dateManager.weekDateRange);
  const currentDate = dateManager.currentDate;
  const { setCurrentPage } = useNavigation();

  useEffect(() => {
    const unsubscribe = setCurrentPage("/schedule");
    return unsubscribe;
  }, [setCurrentPage]);

  const handleClick = (mode) => {
    if (mode === "incr") dateManager.incrWeek();
    else dateManager.decrWeek();
    setDays(dateManager.weekDateRange);
  };

  return (
    <Container fluid className="mb-4" style={{ padding: "0vw 5vw" }}>
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
