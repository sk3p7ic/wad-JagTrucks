import { Badge } from "react-bootstrap";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { TruckSocial } from "../SocialDisplay";

export const TruckMenuHeader = ({ truck }) => {
  return (
    <div className="font-nunito">
      <div className="d-flex flex-column flex-lg-row gap-2">
        <div
          className="bg-dark"
          style={{ width: 150, height: 150, borderRadius: "0.5rem" }}
        ></div>
        <div className="flex-grow-1 d-flex flex-column justify-content-between">
          <h1 className="font-oswald">{truck.name}</h1>
          <div className="d-flex flex-row justify-content-between">
            <Badge
              pill
              bg="primary"
              className="font-oswald py-3 px-4"
              style={{ height: "fit-content", fontSize: "1.5rem" }}
            >
              {truck?.primary_food_type}
            </Badge>

            <div className="d-flex flex-column align-items-end">
              <h3>Dining Dollars:</h3>
              {truck.accepts_dining_dollars ? (
                <MdCheckBox size={32} />
              ) : (
                <MdCheckBoxOutlineBlank size={32} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="my-2 py-2 border-top border-bottom border-4 border-success d-flex flex-column">
        {Object.entries(truck.socials).map(([site, info], index) => (
          <div key={index}>
            <TruckSocial siteName={site} url={info.url} />
            <h5 className="ms-2 d-inline">
              <strong>
                {site !== "website" ? `@${info.username}` : info.username}
              </strong>
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};
