import { Card, Badge, Button } from "react-bootstrap";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

export const TruckDisplayCard = ({ truck }) => {
  return (
    <Card>
      <Card.Img src={`/images/${truck.header_img_path}`} alt="Truck header" />
      <Card.Body className="d-flex flex-column gap-4 font-nunito">
        <div className="d-flex flex-row">
          <div className="flex-grow-1">
            <Card.Title className="font-oswald">
              <h1>{truck.name}</h1>
            </Card.Title>
          </div>
          <div className="d-flex justify-content-end align-items-center">
            <Badge
              pill
              bg="primary"
              className="font-oswald py-2 px-4"
              style={{ height: "fit-content", fontSize: "1.5rem" }}
            >
              {truck?.primary_food_type}
            </Badge>
          </div>
        </div>
        <div className="d-flex flex-column align-items-end">
          <h3>Dining Dollars:</h3>
          {truck.accepts_dining_dollars ? (
            <MdCheckBox size={32} />
          ) : (
            <MdCheckBoxOutlineBlank size={32} />
          )}
        </div>
        <Button href={`/trucks/${truck._id}`} className="w-100">
          View Menu
        </Button>
      </Card.Body>
    </Card>
  );
};
