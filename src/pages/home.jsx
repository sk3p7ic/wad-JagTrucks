import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function blockofTitle() {
  return (
   <div className = "d-flex flex-row justify-content-between">
    <div className="intro_to_pg">Welcome to our page!</div>
    <div className="image_of_taco">Add the Taco Here.</div>
   </div>
  );
}

/*const exampleFunc = () => {
  return (
    <div className="d-flex flex-row justify-content-between">
      <div className="display-1">Content 1</div>
      <div className="display-1">Content 2</div>
    </div>
  );
};*/

export const HomePage = () => {
  return blockofTitle();

};


// npm start