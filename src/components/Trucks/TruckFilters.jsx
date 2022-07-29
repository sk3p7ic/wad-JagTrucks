import { useState } from "react";
import { Form, InputGroup, FloatingLabel, Button } from "react-bootstrap";

export const TruckFilters = ({ onFilterChangeCallback }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchUpdate = (event) => {
    onFilterChangeCallback("string", event.target.value);
    setSearchValue(event.target.value);
  };

  const clearSearch = () => {
    onFilterChangeCallback("none", "");
    setSearchValue("");
  };

  return (
    <div className="p-4 d-flex flex-column flex-md-row">
      <InputGroup style={{ width: "15vw" }}>
        <FloatingLabel controlId="truckNameSearch" label="Search">
          <Form.Control
            type="text"
            placeholder="Lorem ipsum."
            value={searchValue}
            onChange={(e) => {
              handleSearchUpdate(e);
            }}
          />
        </FloatingLabel>
        <InputGroup.Text>
          <Button onClick={() => clearSearch()}>Clear</Button>
        </InputGroup.Text>
      </InputGroup>
    </div>
  );
};
