import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigation } from "../contexts/NavigationContext";

export const TrucksPage = () => {
  const { setCurrentPage } = useNavigation();

  useEffect(() => {
    const unsubscribe = setCurrentPage("/trucks");
    return unsubscribe;
  }, [setCurrentPage]);

  return (
    <Container fluid style={{ padding: "0vw 5vw" }}>
      <h1 className="display-1 font-oswald">Looking for something?</h1>
      <div className="d-flex flex-column px-4"></div>
    </Container>
  );
};
