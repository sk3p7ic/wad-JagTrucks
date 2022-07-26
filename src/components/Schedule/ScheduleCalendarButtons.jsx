import { Button, ButtonGroup } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { formatDate } from "../../util/calendarOperations";

export const ScheduleCalendarButtons = ({
  days,
  currentDate,
  clickHandler,
}) => {
  return (
    <div className="d-flex flex-column flex-xl-row justify-content-between">
      <div className="d-flex flex-row gap-3">
        <ButtonGroup>
          <Button variant="primary" onClick={() => clickHandler("decr")}>
            <BsChevronLeft />
          </Button>
          <Button variant="primary" onClick={() => clickHandler("incr")}>
            <BsChevronRight />
          </Button>
        </ButtonGroup>
        <h1 className="font-nunito m-0">
          {formatDate(days.mon)} - {formatDate(days.fri)}
        </h1>
      </div>
      <h1 className="font-nunito m-0">
        <strong>Today: </strong>
        {currentDate.toDateString()}
      </h1>
    </div>
  );
};
