import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from 'react-bootstrap/Button';
//import taco from '../../public/img/Tacos.png';
function blockofTitle() {
  return (
    <div className="flex-grow-1 d-flex flex-row justify-content-between">
      <div className="intro_to_pg" style={{padding:100}}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>Dining on campus,<br></br>Made simple.</h1>
        <h3>Explore the options available today.</h3>
        <Button variant="success">What's Here Today </Button>
        <Button variant="secondary">View All Trucks </Button>
      </div>
      {/*<div className="image_of_taco">Add the Taco Here.</div>*/}
      <img src="img/Tacos.png" width={450} height={750}  alt="image of tacos"/>
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
