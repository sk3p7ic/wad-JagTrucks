import { Row, Col } from "react-bootstrap";
import { MenuItem } from "./MenuItem";
import { MenuItemQuantitySelector } from "./MenuItemQuantitySelector";

export const MenuSection = ({ sectionData }) => {
  return (
    <div>
      <h2>{sectionData.title}</h2>
      {sectionData.items.map((item, index) => (
        <Row key={index}>
          <Col xs="auto">
            <MenuItemQuantitySelector
              fullItemId={`${sectionData._id}.${item._id}`}
              isOrderable={item.isOrderable}
            />
          </Col>
          <Col>
            <MenuItem itemData={item} />
          </Col>
        </Row>
      ))}
    </div>
  );
};
