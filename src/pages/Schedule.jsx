import { Container } from "react-bootstrap";
import { ScheduleCalendarProvider } from "../contexts/ScheduleCalendarContext";
import { ScheduleCalendarButtons } from "../components/Schedule/ScheduleCalendarButtons";

export const SchedulePage = () => {
  return (
    <ScheduleCalendarProvider>
      <Container>
        <h1 className="display-1 font-oswald">What's Cookin'?</h1>
        <div className="d-flex flex-column px-4">
          <ScheduleCalendarButtons />
        </div>
      </Container>
    </ScheduleCalendarProvider>
  );
};
