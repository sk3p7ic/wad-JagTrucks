import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
export const HomePage = ()=>{
    return <div>Hello World!</div>
    function BlockofTitle(){
        return(
            <Container>
                <Row>
                    <Col md={{ span: 3, offset: 3}}>{'md={{span: 3, offset: 3}}'}</Col>
                </Row>
            </Container>
        )
    }
}