import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { TruckFilters } from "../components/Trucks/TruckFilters";
import { TruckList } from "../components/Trucks/TruckList";
import { useNavigation } from "../contexts/NavigationContext";
import { getAllTrucks } from "../util/db/trucks";

export const TrucksPage = () => {
  const { setCurrentPage } = useNavigation();
  const [baseTrucks, setBaseTrucks] = useState();
  const [trucks, setTrucks] = useState();
  const [filter, setFilter] = useState([{ filter: "none", value: "" }]);

  useEffect(() => {
    console.log(filter);
    filter.forEach((partialFilter) => {
      switch (partialFilter.filter) {
        // Filter by search string
        case "string":
          let allFilteredTrucks = []; // Stores the trucks found by the filter
          // Search each term entered in the search bar, separated by spaces
          partialFilter.value
            .toLocaleLowerCase()
            .split(" ")
            .forEach((val) => {
              // Search the truck names for the given value
              const filteredTrucks = baseTrucks.filter((filterTruck) =>
                filterTruck?.name.toLowerCase().includes(val)
              );
              // Add the truck to the array of found trucks
              allFilteredTrucks = allFilteredTrucks.concat(filteredTrucks);
            });
          // Convert to Set to remove duplicate entries and then back to array
          setTrucks(Array.from(new Set(allFilteredTrucks)));
          break;

        // Default (setup the view)
        default:
          getAllTrucks().then((truckData) => {
            setBaseTrucks(truckData);
            setTrucks(truckData);
          });
          break;
      }
    });
    // eslint-disable-next-line
  }, [filter]);

  const changeFilter = (filterMode, value) => {
    if (filter[0].filter !== "none" && filterMode !== "string") {
      const newFilterAddition = [
        { filter: value !== "" ? filterMode : "none", value: value },
      ];
      let newFilter = filter;
      newFilter.concat(newFilterAddition);
      setFilter(newFilter);
    } else if (filterMode === "string") {
      setFilter([{ filter: "string", value: value }]);
    } else {
      setFilter([{ filter: "none", value: "" }]);
    }
  };

  useEffect(() => {
    const unsubscribe = setCurrentPage("/trucks");
    return unsubscribe;
  }, [setCurrentPage]);

  return (
    <Container fluid className="mb-4" style={{ padding: "0vw 5vw" }}>
      <h1 className="display-1 font-oswald">Looking for something?</h1>
      <div className="d-flex flex-column px-4">
        <TruckFilters onFilterChangeCallback={changeFilter} />
        <TruckList trucks={trucks} />
      </div>
    </Container>
  );
};
