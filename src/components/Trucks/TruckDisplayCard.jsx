import { Card } from "react-bootstrap";

export const TruckDisplayCard = ({ truck }) => {
  return (
    <Card>
      <Card.Title>{truck.name}</Card.Title>
    </Card>
  );
};
