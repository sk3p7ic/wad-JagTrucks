import { Row, Col, Container } from "react-bootstrap";
import { MenuItem } from "./MenuItem";
import { MenuItemQuantitySelector } from "./MenuItemQuantitySelector";

export const MenuSection = ({ sectionData, truckId }) => {
  return (
    <Container className="bg-amber-100 rounded">
      <h2 className="font-vollkorn">{sectionData.title}</h2>
      {sectionData.items.map((item, index) => (
        <Row key={index}>
          <Col xs="auto">
            <MenuItemQuantitySelector
              fullItemId={`${truckId}.${sectionData._id}.${item._id}`}
              isOrderable={item.isOrderable}
            />
          </Col>
          <Col>
            <MenuItem itemData={item} />
          </Col>
        </Row>
      ))}
    </Container>
  );
};
