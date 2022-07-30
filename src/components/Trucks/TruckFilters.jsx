import { useState } from "react";
import {
  Form,
  InputGroup,
  FloatingLabel,
  Button,
  Offcanvas,
} from "react-bootstrap";
import { FaFilter } from "react-icons/fa";
import "./TruckFilters.css";

export const TruckFilters = ({ onFilterChangeCallback }) => {
  const [searchValue, setSearchValue] = useState("");
  const [showFilterForm, setShowFilterForm] = useState(false);
  const [allowsDiningDollars, setAllowsDiningDollars] = useState(false);

  const handleSearchUpdate = (event) => {
    onFilterChangeCallback("string", event.target.value);
    setSearchValue(event.target.value);
  };

  const clearSearch = () => {
    onFilterChangeCallback("none", "");
    setSearchValue("");
  };

  const handleAllowDiningDollarUpdate = () => {
    const allows = allowsDiningDollars;
    setAllowsDiningDollars(!allows);
    onFilterChangeCallback("dollars", allows);
  };

  return (
    <div className="p-4 d-flex flex-column flex-lg-row align-items-center gap-4">
      <InputGroup className="search-container">
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
      <div className="position-relative">
        <FaFilter
          size={48}
          onClick={() => {
            setShowFilterForm(true);
          }}
          style={{ zIndex: 2020 }}
        />
        <Offcanvas
          show={showFilterForm}
          onHide={() => {
            setShowFilterForm(false);
          }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Filters</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form.Check
              type="switch"
              id="accepts-dining-dollars-switch"
              label="Accepts Dining Dollars?"
              checked={allowsDiningDollars}
              onChange={handleAllowDiningDollarUpdate}
            />
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
};
