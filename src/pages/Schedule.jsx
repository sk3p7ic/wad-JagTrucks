import { Button, ButtonGroup, Container } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import {
  ScheduleCalendarProvider,
  useCalendar,
} from "../contexts/ScheduleCalendarContext";
import { formatDate } from "../util/calendarOperations";

const ScheduleCalendarButtons = () => {
  const { dateManager } = useCalendar();
  const days = dateManager.weekDateRange;

  return (
    <div className="d-flex flex-column flex-lg-row justify-content-between">
      <div className="d-flex flex-row gap-3">
        <ButtonGroup>
          <Button variant="primary">
            <BsChevronLeft />
          </Button>
          <Button variant="primary">
            <BsChevronRight />
          </Button>
        </ButtonGroup>
        <h1 className="font-nunito m-0">
          {formatDate(days.monday)} - {formatDate(days.friday)}
        </h1>
      </div>
      <h1 className="font-nunito m-0">
        <strong>Today: </strong>
        {new Date().toDateString()}
      </h1>
    </div>
  );
};

export const SchedulePage = () => {
  return (
    <ScheduleCalendarProvider>
      <div>
        <Container>
          <h1 className="display-1 font-oswald">What's Cookin'?</h1>
          <div className="d-flex flex-column px-4">
            <ScheduleCalendarButtons />
          </div>
        </Container>
      </div>
    </ScheduleCalendarProvider>
  );
};
