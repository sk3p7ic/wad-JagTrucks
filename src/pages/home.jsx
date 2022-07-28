import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from 'react-bootstrap/Button';
//import taco from '../../public/img/Tacos.png';
function blockofTitle() {
  return (
    <div className="flex-grow-1 d-flex flex-row justify-content-between align-items-center">
      <div className="container-lg">
        
        <h1 className="display-1 font-oswald">Dining on campus,<br></br>Made simple.</h1>
        <h5 className="display-5 font-vollkorn">Explore the options available today.</h5>
        <div>
          <Button variant="success" size="lg" href="/Schedule">What's Here Today </Button> {''}
          <Button variant="outline-success" size="lg" href="/Trucks">View All Trucks </Button>
        </div>

      </div>
      {/*<div className="image_of_taco">Add the Taco Here.</div>*/}
      <img src="img/Tacos.png" style={{height:"75vh"}} className="d-none d-lg-block" alt="image of tacos"/>
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
//font-oswald
//font-vollkorn