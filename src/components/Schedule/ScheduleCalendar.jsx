import { Card, CardGroup } from "react-bootstrap";

export const ScheduleCalendar = ({ days, currentDate }) => {
  return (
    <CardGroup className="d-block d-xl-flex">
      <Card>
        <Card.Header className="text-center">
          <Card.Title className="m-0">
            <h2 className="font-vollkorn m-0" style={{ fontWeight: 700 }}>
              Monday
            </h2>
          </Card.Title>
        </Card.Header>
        <Card.Body
          className={`${
            days.mon.toDateString() === currentDate.toDateString()
              ? "bg-secondary"
              : ""
          }`}
        >
          Lorem ipsum
        </Card.Body>
      </Card>
      <Card>
        <Card.Header className="text-center">
          <Card.Title className="m-0">
            <h2 className="font-vollkorn m-0" style={{ fontWeight: 700 }}>
              Tuesday
            </h2>
          </Card.Title>
        </Card.Header>
        <Card.Body
          className={`${
            days.tue.toDateString() === currentDate.toDateString()
              ? "bg-secondary"
              : ""
          }`}
        >
          Lorem ipsum
        </Card.Body>
      </Card>
      <Card>
        <Card.Header className="text-center">
          <Card.Title className="m-0">
            <h2 className="font-vollkorn m-0" style={{ fontWeight: 700 }}>
              Wednesday
            </h2>
          </Card.Title>
        </Card.Header>
        <Card.Body
          className={`${
            days.wed.toDateString() === currentDate.toDateString()
              ? "bg-secondary"
              : ""
          }`}
        >
          Lorem ipsum
        </Card.Body>
      </Card>
      <Card>
        <Card.Header className="text-center">
          <Card.Title className="m-0">
            <h2 className="font-vollkorn m-0" style={{ fontWeight: 700 }}>
              Thursday
            </h2>
          </Card.Title>
        </Card.Header>
        <Card.Body
          className={`${
            days.thu.toDateString() === currentDate.toDateString()
              ? "bg-secondary"
              : ""
          }`}
        >
          Lorem ipsum
        </Card.Body>
      </Card>
      <Card>
        <Card.Header className="text-center">
          <Card.Title className="m-0">
            <h2 className="font-vollkorn m-0" style={{ fontWeight: 700 }}>
              Friday
            </h2>
          </Card.Title>
        </Card.Header>
        <Card.Body
          className={`${
            days.fri.toDateString() === currentDate.toDateString()
              ? "bg-secondary"
              : ""
          }`}
        >
          Lorem ipsum
        </Card.Body>
      </Card>
    </CardGroup>
  );
};
