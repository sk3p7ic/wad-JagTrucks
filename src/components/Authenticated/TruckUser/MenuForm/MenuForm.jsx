import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

export const MenuForm = ({ truckId }) => {
  const [currentSectionId, setCurrentSectionId] = useState(0);
  const [currentItemId, setCurrentItemId] = useState(0);
  const [menuSections, setMenuSections] = useState(new Map());

  const addItem = (sectionId) => {
    const sections = menuSections;
    sections.get(sectionId).items.set(currentItemId, {
      name: "",
      price: 0,
      displayPrice: false,
      description: "",
    });
    setMenuSections(sections);
    setCurrentItemId(currentItemId + 1);
  };

  const addSection = () => {
    const sections = menuSections;
    sections.set(currentSectionId, { title: "New Section", items: new Map() });
    setMenuSections(sections);
    setCurrentSectionId(currentSectionId + 1);
  };

  useEffect(() => {
    if (currentSectionId === 0) {
      addSection();
      addItem(0);
    }
    // eslint-disable-next-line
  }, [currentSectionId]);

  const onEditSectionTitle = (sectionId, title) => {
    const sections = menuSections;
    const section = sections.get(sectionId);
    section.title = title;
    sections.set(sectionId, section);
    console.log(sections);
    setMenuSections(sections);
    console.log(menuSections);
  };

  console.log(menuSections);

  return (
    <>
      <h3>Create a New Menu {truckId}</h3>
      <Form>
        {menuSections.size !== 0 &&
          Array.from(menuSections).map(([sectionId, section], sectionIndex) => (
            <Form.Group key={sectionIndex}>
              <Form.Group>
                <Form.Label>Section Name</Form.Label>
                <Form.Control
                  value={section.title}
                  onChange={(e) =>
                    onEditSectionTitle(sectionId, e.target.value)
                  }
                  type="text"
                  placeholder="Section Name"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Items</Form.Label>
                {Array.from(section.items).map(([itemId, item], itemIndex) => (
                  <Form.Group key={itemIndex}>
                    <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <Form.Control value={item.name} />
                    </Form.Group>
                  </Form.Group>
                ))}
              </Form.Group>
            </Form.Group>
          ))}
      </Form>
    </>
  );
};
