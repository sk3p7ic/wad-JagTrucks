import { useEffect, useState } from "react";
import { Accordion, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { MenuForm } from "../../../components/Authenticated/TruckUser/MenuForm/MenuForm";
import { getTruckDataFromId } from "../../../util/db/trucks";

export const EditTruckPage = () => {
  const { truckId } = useParams();
  const [truckData, setTruckData] = useState();

  useEffect(() => {
    getTruckDataFromId(truckId).then((data) => setTruckData(data));
  }, [truckId]);

  return (
    <Container>
      <h1>{truckData?.name ?? "Loading..."}</h1>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Create New Menu</Accordion.Header>
          <Accordion.Body>
            <MenuForm truckId={truckId} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};
