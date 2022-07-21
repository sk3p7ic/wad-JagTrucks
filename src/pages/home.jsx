import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function BlockofTitle() {
  return (
    <Container>
      <Row>
        <Col md={{ span: 3, offset: 3 }}>{"md={{span: 3, offset: 3}}"}</Col>
      </Row>
    </Container>
  );
}

const exampleFunc = () => {
  return (
    <div className="d-flex flex-row justify-content-between">
      <div className="display-1">Content 1</div>
      <div className="display-1">Content 2</div>
    </div>
  );
};

export const HomePage = () => {
  return <div>Home page works!</div>;
};
